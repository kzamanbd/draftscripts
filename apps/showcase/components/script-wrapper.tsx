import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import PrelineScript from './preline-script';

export default function ScriptWrapper() {
    return (
        <>
            <ToastContainer />
            <PrelineScript />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-3HFZXXGGM3" />
            <Script id="google-analytics">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'GA_MEASUREMENT_ID');
                `}
            </Script>
        </>
    );
}
