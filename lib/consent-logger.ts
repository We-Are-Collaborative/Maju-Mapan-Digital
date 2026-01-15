export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export interface ConsentState {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

export interface ConsentLog {
    timestamp: string;
    region: 'EU' | 'Non-EU';
    preferences: ConsentState;
    userAgent: string;
    version: string;
}

export const logConsentEvent = (
    preferences: ConsentState,
    region: 'EU' | 'Non-EU'
) => {
    const log: ConsentLog = {
        timestamp: new Date().toISOString(),
        region,
        preferences,
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
        version: '1.0.0',
    };

    // In a real-world scenario, this would be sent to an API endpoint
    // For now, we log it to the console and store it in a local audit log array (simulated)
    console.log('[Consent Audit Log]:', JSON.stringify(log, null, 2));

    // Optionally store last 5 logs locally for quick inspection
    if (typeof window !== 'undefined') {
        const existingLogs = JSON.parse(localStorage.getItem('mmd_consent_audit_logs') || '[]');
        const updatedLogs = [log, ...existingLogs].slice(0, 5);
        localStorage.setItem('mmd_consent_audit_logs', JSON.stringify(updatedLogs));
    }

    return log;
};
