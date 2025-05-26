import { authorName, description } from '@/app/metadata';
import ScriptWrapper from '@/components/script-wrapper';
import { ThemeProviders } from '@/components/theme-providers';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import '../styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className="scroll-smooth" lang="en" suppressHydrationWarning={true}>
            <head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/icons/base-icon.png" />
                <meta name="theme-color" content="#009EF7" />
                <meta name="apple-mobile-web-app-status-bar" content="#009EF7" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content={authorName} />
                <meta name="application-name" content={authorName} />
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="kzamanbd, kzaman, kamruzzaman, software engineer, problem solving, draftscripts, draft scripts, scripts"
                />
                <meta name="author" content={authorName} />
                <meta name="theme-color" content="#009EF7" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://kzaman.me" />
                <meta name="twitter:title" content={authorName} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="/images/banner-image.png" />
                <meta name="twitter:creator" content="@kzaman" />
                <meta name="title" property="og:title" content={authorName} key="title" />
                <meta
                    name="description"
                    property="og:description"
                    content={description}
                    key="desc"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={authorName} />
                <meta property="og:url" content="https://kzaman.me" />
                <meta property="og:image" content="/images/banner-image.png" />
            </head>
            <body suppressHydrationWarning={true}>
                <div className={inter.className}>
                    <NextTopLoader
                        initialPosition={0.08}
                        height={3}
                        showSpinner={false}
                        easing="ease"
                        speed={200}
                        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                    />
                    <ThemeProviders>{children}</ThemeProviders>
                </div>
                <ScriptWrapper />
            </body>
        </html>
    );
}
