import type { Metadata } from 'next';

import '../../scss/global.scss';

import { ManropeFonts } from '../fonts/font';
import ContextProvider from '@/hoc/ContextProvider';

import { getMessages } from 'next-intl/server';
import { NextIntlProvider } from '@/Providers/NextIntlClientProvider';

export const metadata: Metadata = {
    title: 'App weight',
    description: 'Telegram App weight',
};

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${ManropeFonts.className}`}>
                <NextIntlProvider locale={locale} messages={messages}>
                    <ContextProvider>{children}</ContextProvider>
                </NextIntlProvider>
            </body>
        </html>
    );
}
