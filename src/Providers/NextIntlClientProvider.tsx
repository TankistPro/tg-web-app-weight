'use client';

import React from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export const NextIntlProvider = ({
    children,
    locale,
    messages,
    timeZone,
}: Readonly<{
    children: React.ReactNode;
    locale: string;
    messages: AbstractIntlMessages | undefined;
    timeZone: any;
}>) => {
    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            defaultTranslationValues={{
                span: (text) => <span>{text}</span>,
            }}
            timeZone={timeZone}
        >
            {children}
        </NextIntlClientProvider>
    );
};
