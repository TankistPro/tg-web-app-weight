'use client';

import React from 'react';
import Stories from 'react-insta-stories';

import './welcomePage.scss';

import StoryItem from './StoryItem/StoryItem';
import { progressContainerStyles, progressStyles, progressWrapperStyles, storyContainerStyles } from './Story.config';
import SelectLanguageButton from '@/components/SelectLanguageButton/SelectLanguageButton';
import { useModal } from '@/context/useModalContext';
import { PopupTypes } from '@/lib/types/ModalContext.type';
import { useTranslations } from 'next-intl';

const WelcomePage = () => {
    const { togglePopup } = useModal();
    const t = useTranslations('WelcomePage');

    return (
        <div className="page welcome-page">
            <SelectLanguageButton
                onClick={(event) => {
                    togglePopup(true, PopupTypes.SelectLanguageModal);
                }}
            />

            <Stories
                loop
                storyContainerStyles={storyContainerStyles}
                progressContainerStyles={progressContainerStyles}
                progressWrapperStyles={progressWrapperStyles}
                progressStyles={progressStyles}
                width={'100%'}
                height={'100%'}
                preloadCount={2}
                stories={[
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-1.svg'} imgAlt={'story-1'}>
                                <div className="story-item__content">
                                    <span className="story-item__day">
                                        <p>{t('story1.value')}</p>
                                    </span>
                                </div>
                            </StoryItem>
                        ),
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
        </div>
    );
};

export default WelcomePage;
