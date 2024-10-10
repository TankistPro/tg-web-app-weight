'use client';

import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Link } from '@/i18n/routing';
import { useRouter } from 'next/navigation';

import './welcomePage.scss';

import { useModal } from '@/context/useModalContext';
import { PopupTypes } from '@/lib/types/ModalContext.type';
import SelectLanguageButton from '@/components/SelectLanguageButton/SelectLanguageButton';

import Button from '@/components/UI/Button/Button';
import Checkbox from '@/components/UI/Checkbox/CheckBox';
import InstaStories from './InstaStories/InstaStories';
import Lenta from './Lenta/Lenta';

interface IWelcomePage {
    showWelcomeStoriesParam: boolean;
}

const WelcomePage: React.FC<IWelcomePage> = ({ showWelcomeStoriesParam = true }) => {
    const router = useRouter();
    const { togglePopup } = useModal();

    const [showWelcomeStories, setShowWelcomeStories] = React.useState<boolean>(showWelcomeStoriesParam);
    const [isConfirmPrivacyAndRule, setIsConfirmPrivacyAndRule] = React.useState(false);

    const onAllStoriesEnd = () => {
        router.push('/welcome-page?showWelcomeStories=false');
        setShowWelcomeStories(false);
    };

    return (
        <div
            className={classNames('page welcome-page')}
            style={{
                padding: !showWelcomeStories ? 'var(--page_padding)' : 0,
            }}
        >
            <SelectLanguageButton
                onClick={(event) => {
                    togglePopup(true, PopupTypes.SelectLanguageModal);
                }}
            />

            {!showWelcomeStories && (
                <Button variant="active" disabled={!isConfirmPrivacyAndRule}>
                    Start!
                </Button>
            )}

            {showWelcomeStories && <InstaStories onAllStoriesEnd={onAllStoriesEnd} />}

            {!showWelcomeStories && (
                <div className="welcome-page__start">
                    <div className="start-container__top">
                        <div className="start-container__logo">
                            <Image src={'/img/logo.svg'} width={115} priority quality={50} height={40} alt="logo" />
                        </div>
                        <div className="start-container__text">
                            <h3>WELCOME</h3>

                            <h2>Ready to get a personal weight loss plan?</h2>

                            <p>Answer 11 questions and we will create a weight loss plan and profit calculation</p>
                        </div>

                        <div className="start-container__checkbox">
                            <Checkbox
                                isChecked={isConfirmPrivacyAndRule}
                                checkHandler={(value) => {
                                    setIsConfirmPrivacyAndRule(value);
                                }}
                            >
                                <p>
                                    I agree to the <Link href={'#'}>Terms</Link> and{' '}
                                    <Link href={'#'}>Privacy Policy</Link>
                                </p>
                            </Checkbox>
                        </div>
                    </div>
                    <div className="start-container__bottom">
                        <Lenta />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WelcomePage;
