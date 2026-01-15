'use client';

import { useState, useEffect, useCallback } from 'react';
import { ConsentState, logConsentEvent } from '@/lib/consent-logger';

const CONSENT_STORAGE_KEY = 'mmd_cookie_consent';
const DEFAULT_CONSENT: ConsentState = {
    necessary: true,
    analytics: false,
    marketing: false,
};

export function useCookieConsent() {
    const [consent, setConsent] = useState<ConsentState | null>(null);
    const [isEU, setIsEU] = useState<boolean | null>(null);
    const [showBanner, setShowBanner] = useState(false);

    // Initialize consent and geo-detection
    useEffect(() => {
        const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

        // Mock geo-detection (EU/UK check)
        // In production, this would come from a server-side header or API call
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const euTimeZones = ['Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Madrid', 'Europe/Amsterdam'];
        const detectedEU = euTimeZones.some(tz => userTimeZone.includes(tz)) || userTimeZone.startsWith('Europe/');

        setIsEU(detectedEU);

        if (storedConsent) {
            const parsedConsent = JSON.parse(storedConsent);
            setConsent(parsedConsent);
            updateGoogleConsent(parsedConsent);
            setShowBanner(false);
        } else {
            setConsent(DEFAULT_CONSENT);
            setShowBanner(true);
            // Default denied state for EU traffic
            if (detectedEU) {
                updateGoogleConsent(DEFAULT_CONSENT);
            }
        }
    }, []);

    const updateGoogleConsent = (state: ConsentState) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'ad_storage': state.marketing ? 'granted' : 'denied',
                'analytics_storage': state.analytics ? 'granted' : 'denied',
                'ad_user_data': state.marketing ? 'granted' : 'denied',
                'ad_personalization': state.marketing ? 'granted' : 'denied',
            });
        }
    };

    const saveConsent = useCallback((preferences: ConsentState) => {
        setConsent(preferences);
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
        updateGoogleConsent(preferences);
        logConsentEvent(preferences, isEU ? 'EU' : 'Non-EU');
        setShowBanner(false);

        // Set a cookie for server-side awareness if needed
        document.cookie = `${CONSENT_STORAGE_KEY}=${JSON.stringify(preferences)}; path=/; max-age=31104000; SameSite=Lax`;
    }, [isEU]);

    const acceptAll = useCallback(() => {
        const allAccepted: ConsentState = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        saveConsent(allAccepted);
    }, [saveConsent]);

    const openSettings = useCallback(() => {
        setShowBanner(true);
    }, []);

    return {
        consent,
        isEU,
        showBanner,
        setShowBanner,
        acceptAll,
        saveConsent,
        openSettings,
    };
}
