import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const GA4_ID = 'G-FSNLF7LS64';

export default function ScriptWrapper() {
    return (
        <>
            <Toaster />
            {/* Google Analytics 4 (gtag.js) */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
            </Script>
        </>
    );
}
