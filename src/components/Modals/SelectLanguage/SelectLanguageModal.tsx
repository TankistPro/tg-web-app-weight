'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';

import './selectLanguageModal.scss';
import RadioButton from '@/components/UI/RadioButton/RadioButton';
import { useModal } from '@/context/useModalContext';

const SelectLanguageModal = () => {
    const locale = useLocale();
    const router = useRouter();
    const { togglePopup } = useModal();

    const changeLanguage = (value: 'en' | 'es') => {
        togglePopup(false);
        setTimeout(() => {
            router.push('/welcome-page', { locale: value });
        }, 500);
    };

    return (
        <div className="select-language-modal">
            <h2 className="select-language-modal__title">Select the language</h2>

            <div className="select-language-modal__content">
                <RadioButton
                    value={'en'}
                    id={'ln-en'}
                    name={'select-lang'}
                    text={'English'}
                    checked={locale === 'en'}
                    onChange={changeLanguage}
                />
                <RadioButton
                    value={'es'}
                    id={'ln-es'}
                    name={'select-lang'}
                    text={'Español'}
                    checked={locale === 'es'}
                    onChange={changeLanguage}
                />
                <RadioButton
                    value={'soon'}
                    id={'soon'}
                    name={'select-lang'}
                    text={'Coming soon'}
                    disabled
                    onChange={changeLanguage}
                />
            </div>
        </div>
    );
};

export default SelectLanguageModal;
