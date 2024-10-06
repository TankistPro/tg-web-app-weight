import type { Metadata } from 'next';

import '../scss/global.scss';

import { ManropeFonts } from './fonts/font';

export const metadata: Metadata = {
    title: 'App weight',
    description: 'Telegram App weight',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ManropeFonts.className}`}>{children}</body>
        </html>
    );
}
