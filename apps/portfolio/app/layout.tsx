import { JsonLdScript } from '@/components/json-ld-script';
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProviders } from '@repo/shared';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const googleTagManagerId = 'G-NB5NCE8041';

import { authorName, description, siteKeywords, siteName, siteURL } from '@repo/shared/metadata';

export const metadata: Metadata = {
    metadataBase: new URL(siteURL),
    title: {
        default: 'Kamruzzaman - Software Engineer',
        template: '%s | Kamruzzaman'
    },
    description,
    openGraph: {
        title: authorName,
        description,
        url: siteURL,
        siteName,
        locale: 'en_US',
        type: 'website',
        images: '/opengraph-image.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: authorName,
        description,
        creator: '@_kzamanbd'
    },
    creator: authorName,
    applicationName: siteName,
    publisher: authorName,
    keywords: siteKeywords,
    category: 'portfolio',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    icons: {
        icon: '/kzaman-icon-192x192.png',
        apple: '/kzaman-icon-192x192.png',
        shortcut: '/kzaman-icon-192x192.png'
    }
};

export const viewport: Viewport = {
    themeColor: 'white'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Kamruzzaman " />
                <JsonLdScript />
            </head>
            <GoogleTagManager gtmId={googleTagManagerId} />
            <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
                <ThemeProviders>{children}</ThemeProviders>
            </body>
        </html>
    );
}

