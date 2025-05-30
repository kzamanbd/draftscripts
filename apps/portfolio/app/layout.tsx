import { ThemeProviders, userMeta } from '@repo/shared';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kamruzzaman | Software Engineer',
    description: userMeta.description
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
            </head>
            <body
                className={`${inter.className} bg-white antialiased transition-colors duration-300 dark:bg-gray-900`}
                suppressHydrationWarning={true}>
                <ThemeProviders>{children}</ThemeProviders>
            </body>
        </html>
    );
}

