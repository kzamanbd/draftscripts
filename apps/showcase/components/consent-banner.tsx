'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ds-consent';

type Choice = 'granted' | 'denied';

function applyConsent(choice: Choice) {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    // gtag pushes the literal `arguments` object onto the dataLayer.
    function gtag(...args: unknown[]) {
        w.dataLayer!.push(args);
    }
    gtag('consent', 'update', {
        ad_storage: choice,
        analytics_storage: choice,
        ad_user_data: choice,
        ad_personalization: choice
    });
}

export function ConsentBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch {
            // localStorage unavailable (private mode) — show the banner.
        }
        if (saved === 'granted') applyConsent('granted');
        if (saved !== 'granted' && saved !== 'denied') setShow(true);
    }, []);

    const choose = (choice: Choice) => {
        try {
            localStorage.setItem(STORAGE_KEY, choice);
        } catch {
            // ignore persistence failures
        }
        applyConsent(choice);
        setShow(false);
    };

    if (!show) return null;

    return (
        <div
            role="dialog"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
            <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-card/95 p-5 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                    We use cookies to analyze traffic and improve your experience. You decide
                    what to share — read our{' '}
                    <Link
                        href="/privacy-policy"
                        className="font-medium text-primary hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
                <div className="flex shrink-0 gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="px-4"
                        onClick={() => choose('denied')}>
                        Decline
                    </Button>
                    <Button size="sm" className="px-4" onClick={() => choose('granted')}>
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
}
