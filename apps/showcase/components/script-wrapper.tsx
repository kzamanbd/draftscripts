import { ConsentBanner } from '@/components/consent-banner';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const GA4_ID = 'G-FSNLF7LS64';

export default function ScriptWrapper() {
    return (
        <>
            <Toaster />
            {/* Google Analytics 4 (gtag.js) with Consent Mode v2 — denied by
                default until the user opts in via the banner. */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('js',new Date());gtag('config','${GA4_ID}');`}
            </Script>
            <ConsentBanner />
        </>
    );
}
