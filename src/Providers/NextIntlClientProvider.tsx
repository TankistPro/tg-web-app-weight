'use client';

import React from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export const NextIntlProvider = ({
    children,
    locale,
    messages,
}: Readonly<{
    children: React.ReactNode;
    locale: string;
    messages: AbstractIntlMessages | undefined;
}>) => {
    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            defaultTranslationValues={{
                span: (text) => <span>${text}</span>,
            }}
        >
            {children}
        </NextIntlClientProvider>
    );
};
