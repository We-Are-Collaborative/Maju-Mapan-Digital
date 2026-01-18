'use client';

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function Providers({ children, session }: { children: React.ReactNode; session?: Session | null }) {
    return (
        <SessionProvider session={session}>
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
            >
                {children}
            </GoogleReCaptchaProvider>
        </SessionProvider>
    );
}
