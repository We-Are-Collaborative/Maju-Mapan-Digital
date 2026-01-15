'use client';

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Check } from 'lucide-react';
import { ConsentState } from '@/lib/consent-logger';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface CookieSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialPreferences: ConsentState;
    onSave: (preferences: ConsentState) => void;
}

export function CookieSettingsModal({
    isOpen,
    onClose,
    initialPreferences,
    onSave,
}: CookieSettingsModalProps) {
    const [preferences, setPreferences] = useState<ConsentState>(initialPreferences);

    const handleToggle = (category: keyof ConsentState) => {
        if (category === 'necessary') return; // Cannot toggle necessary
        setPreferences(prev => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const handleSave = () => {
        onSave(preferences);
        onClose();
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl animate-in fade-in zoom-in duration-300 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <Dialog.Title className="text-2xl font-bold text-white">
                            Cookie Settings
                        </Dialog.Title>
                        <Dialog.Close asChild>
                            <button className="rounded-full p-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                                <X className="size-5" />
                            </button>
                        </Dialog.Close>
                    </div>

                    <div className="space-y-6">
                        {/* Necessary Cookies */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <h4 className="font-semibold text-white">Necessary Cookies</h4>
                                <p className="text-sm text-slate-400">
                                    Required for the website to function properly. They cannot be disabled.
                                </p>
                            </div>
                            <div className="flex h-6 items-center">
                                <div className="size-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <Check className="size-3 text-emerald-500" />
                                </div>
                            </div>
                        </div>

                        {/* Analytics Cookies */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <h4 className="font-semibold text-white">Analytics Cookies</h4>
                                <p className="text-sm text-slate-400">
                                    Help us understand how visitors interact with the website, allowing us to improve user experience.
                                </p>
                            </div>
                            <Switch
                                checked={preferences.analytics}
                                onCheckedChange={() => handleToggle('analytics')}
                                className="data-[state=checked]:bg-emerald-500"
                            />
                        </div>

                        {/* Marketing Cookies */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                                <h4 className="font-semibold text-white">Marketing Cookies</h4>
                                <p className="text-sm text-slate-400">
                                    Used to deliver more relevant advertisements and limit how many times you see an ad.
                                </p>
                            </div>
                            <Switch
                                checked={preferences.marketing}
                                onCheckedChange={() => handleToggle('marketing')}
                                className="data-[state=checked]:bg-emerald-500"
                            />
                        </div>
                    </div>

                    <div className="mt-10">
                        <Button
                            onClick={handleSave}
                            className="w-full h-12 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all duration-300"
                        >
                            Save Preferences
                        </Button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
