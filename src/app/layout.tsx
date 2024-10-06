import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../scss/global.scss';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});

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
            <body className={`${geistSans.variable}`}>{children}</body>
        </html>
    );
}
