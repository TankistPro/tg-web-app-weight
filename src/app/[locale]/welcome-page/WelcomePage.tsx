'use client';

import React from 'react';
import Image from 'next/image';
import Stories from 'react-insta-stories';
import { useTranslations } from 'next-intl';

import './welcomePage.scss';

import StoryItem from './StoryItem/StoryItem';
import { useModal } from '@/context/useModalContext';
import { PopupTypes } from '@/lib/types/ModalContext.type';
import SelectLanguageButton from '@/components/SelectLanguageButton/SelectLanguageButton';

import { progressContainerStyles, progressStyles, progressWrapperStyles, storyContainerStyles } from './Story.config';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import Button from '@/components/UI/Button/Button';
import Checkbox from '@/components/UI/Checkbox/CheckBox';
import { Link } from '@/i18n/routing';

interface IWelcomePage {
    showWelcomeStoriesParam: boolean;
}

const WelcomePage: React.FC<IWelcomePage> = ({ showWelcomeStoriesParam = true }) => {
    const router = useRouter();
    const { togglePopup } = useModal();
    const t = useTranslations('WelcomePage');

    const [showWelcomeStories, setShowWelcomeStories] = React.useState<boolean>(showWelcomeStoriesParam);

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

            {!showWelcomeStories && <Button variant="active">Start!</Button>}

            {showWelcomeStories && (
                <>
                    <Stories
                        loop
                        storyContainerStyles={storyContainerStyles}
                        progressContainerStyles={progressContainerStyles}
                        progressWrapperStyles={progressWrapperStyles}
                        progressStyles={progressStyles}
                        width={'100%'}
                        height={'100%'}
                        preloadCount={2}
                        onAllStoriesEnd={onAllStoriesEnd}
                        stories={[
                            {
                                content: (props) => {
                                    return (
                                        <StoryItem imgSrc={'/img/welcome-stories/story-1.svg'} imgAlt={'story-1'}>
                                            <div className="story-item__content">
                                                <span className="story-item__day">
                                                    <p>{t('story1.value')}</p>
                                                </span>
                                            </div>
                                        </StoryItem>
                                    );
                                },
                            },
                            {
                                content: (props) => (
                                    <StoryItem imgSrc={'/img/welcome-stories/story-2.svg'} imgAlt={'story-2'}>
                                        <div className="story-item__content">
                                            <span className="story-item__day">
                                                <p>{t('story2.value')}</p>
                                            </span>

                                            <p className="story-item__text">{t('story2.text')}</p>
                                        </div>
                                    </StoryItem>
                                ),
                            },
                            {
                                content: (props) => (
                                    <StoryItem imgSrc={'/img/welcome-stories/story-3.svg'} imgAlt={'story-3'}>
                                        <div className="story-item__content">
                                            <span className="story-item__day">
                                                <p>{t('story3.value')}</p>
                                            </span>

                                            <p className="story-item__text">{t('story3.text')}</p>
                                        </div>
                                    </StoryItem>
                                ),
                            },
                            {
                                content: (props) => (
                                    <StoryItem imgSrc={'/img/welcome-stories/story-4.svg'} imgAlt={'story-4'}>
                                        <div className="story-item__content">
                                            <p className="story-item__text">{t('story4.text')}</p>
                                        </div>
                                    </StoryItem>
                                ),
                            },
                            {
                                content: (props) => (
                                    <StoryItem imgSrc={'/img/welcome-stories/story-5.svg'} imgAlt={'story-5'}>
                                        <div className="story-item__content">
                                            <p className="story-item__text">{t.rich('story5.text')}</p>
                                        </div>
                                    </StoryItem>
                                ),
                            },
                            {
                                content: (props) => (
                                    <StoryItem imgSrc={'/img/welcome-stories/story-6.svg'} imgAlt={'story-6'}>
                                        <div className="story-item__content">
                                            <span className="story-item__day">
                                                <p>{t('story6.value')}</p>
                                            </span>

                                            <p className="story-item__text">{t('story6.text')}</p>
                                        </div>
                                    </StoryItem>
                                ),
                            },
                        ]}
                        defaultInterval={3000}
                    />
                </>
            )}

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
                            <Checkbox isChecked={false} checkHandler={() => {}}>
                                <p>
                                    I agree to the <Link href={'#'}>Terms</Link> and
                                    <Link href={'#'}>Privacy Policy</Link>
                                </p>
                            </Checkbox>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WelcomePage;
