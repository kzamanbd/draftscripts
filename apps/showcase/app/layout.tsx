import ScriptWrapper from '@/components/script-wrapper';
import { ThemeProviders } from '@repo/shared';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = 'https://draftscripts.com';
const SITE_DESC =
    'DraftScripts is a modern web studio building polished Next.js & React applications, reusable component libraries, and open-source developer tools.';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'DraftScripts — Modern Web Studio',
    description: SITE_DESC,
    applicationName: 'DraftScripts',
    keywords: [
        'DraftScripts',
        'web studio',
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'component library',
        'open source',
        'developer tools'
    ],
    authors: [{ name: 'DraftScripts', url: SITE_URL }],
    creator: 'DraftScripts',
    publisher: 'DraftScripts',
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.png', type: 'image/png' }
        ],
        apple: '/apple-touch-icon.png'
    },
    appleWebApp: { capable: true, title: 'DraftScripts', statusBarStyle: 'default' },
    openGraph: {
        type: 'website',
        siteName: 'DraftScripts',
        title: 'DraftScripts — Modern Web Studio',
        description: SITE_DESC,
        url: SITE_URL,
        images: [{ url: '/logo.svg', width: 720, height: 200, alt: 'DraftScripts logo' }]
    },
    twitter: {
        card: 'summary',
        title: 'DraftScripts — Modern Web Studio',
        description: SITE_DESC,
        images: ['/logo.svg']
    }
};

export const viewport: Viewport = {
    themeColor: '#059669',
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="scroll-smooth" lang="en" suppressHydrationWarning={true}>
            <body suppressHydrationWarning={true}>
                <div className={inter.className}>
                    <NextTopLoader
                        initialPosition={0.08}
                        height={3}
                        showSpinner={false}
                        easing="ease"
                        speed={200}
                        shadow="0 0 10px #059669,0 0 5px #059669"
                    />
                    <ThemeProviders>{children}</ThemeProviders>
                </div>
                <ScriptWrapper />
            </body>
        </html>
    );
}
