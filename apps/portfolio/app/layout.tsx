import { ThemeProviders } from '@repo/shared';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kamruzzaman | Software Engineer',
    description: 'Professional portfolio showcasing frontend development projects and skills'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
                <ThemeProviders>{children}</ThemeProviders>
            </body>
        </html>
    );
}

