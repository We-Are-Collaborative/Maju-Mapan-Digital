'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCookieConsent } from '@/hooks/use-cookie-consent';
import { CookieSettingsModal } from './settings-modal';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export function CookieConsentBanner() {
    const {
        consent,
        isEU,
        showBanner,
        setShowBanner,
        acceptAll,
        saveConsent
    } = useCookieConsent();

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !showBanner || consent === null) return null;

    return (
        <>
            <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-center sm:justify-end">
                    <div className="pointer-events-auto w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-full duration-400 ease-out">
                        <div className="flex items-start gap-4">
                            <div className="hidden sm:flex size-10 items-center justify-center rounded-2xl bg-emerald-500/10 shrink-0">
                                <Cookie className="size-6 text-emerald-400" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-white leading-tight">We Use Cookies</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {isEU
                                            ? "We use cookies to ensure functional stability, analyze traffic, and personalize marketing content."
                                            : "We use cookies to improve your experience and analyze our traffic."
                                        }
                                        {' '}Read our{' '}
                                        <Link href="/privacy-policy" className="text-emerald-400 hover:underline decoration-emerald-400/30 underline-offset-4">
                                            Cookie Policy
                                        </Link>.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        onClick={acceptAll}
                                        className="h-10 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all duration-300"
                                    >
                                        Accept All
                                    </Button>

                                    {isEU && (
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSettingsOpen(true)}
                                            className="h-10 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                                        >
                                            Cookie Settings
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CookieSettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                initialPreferences={consent}
                onSave={saveConsent}
            />
        </>
    );
}
