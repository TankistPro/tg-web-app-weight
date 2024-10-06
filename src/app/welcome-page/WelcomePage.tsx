'use client';

import React from 'react';
import Stories from 'react-insta-stories';

import './welcomePage.scss';

import StoryItem from './StoryItem/StoryItem';
import { progressContainerStyles, progressStyles, progressWrapperStyles, storyContainerStyles } from './Story.config';
import SelectLanguageButton from '@/components/SelectLanguageButton/SelectLanguageButton';

const WelcomePage = () => {
    return (
        <div className="page welcome-page">
            <SelectLanguageButton
                onClick={(event) => {
                    event.stopPropagation();
                    console.log('Click');
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
                onPrevious={() => console.log('prev')}
                onNext={() => console.log('next')}
                preloadCount={2}
                stories={[
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-1.png'} imgAlt={'story-1'}>
                                <div className="story-item__content">
                                    <span className="story-item__day">
                                        <p>1 day</p>
                                    </span>
                                </div>
                            </StoryItem>
                        ),
                    },
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-2.png'} imgAlt={'story-2'}>
                                <div className="story-item__content">
                                    <span className="story-item__day">
                                        <p>2 weeks</p>
                                    </span>

                                    <p className="story-item__text">Strict diet</p>
                                </div>
                            </StoryItem>
                        ),
                    },
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-3.png'} imgAlt={'story-3'}>
                                <div className="story-item__content">
                                    <span className="story-item__day">
                                        <p>3 weeks</p>
                                    </span>

                                    <p className="story-item__text">Can't lose weight?</p>
                                </div>
                            </StoryItem>
                        ),
                    },
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-4.png'} imgAlt={'story-4'}>
                                <div className="story-item__content">
                                    <p className="story-item__text">
                                        Lacking motivation? Don't want to go on a strict diet and exhaust yourself with
                                        workouts?
                                    </p>
                                </div>
                            </StoryItem>
                        ),
                    },
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-5.png'} imgAlt={'story-5'}>
                                <div className="story-item__content">
                                    <p className="story-item__text">
                                        There is a way out! App <span>Slim</span>$N$<span>Rich</span>!
                                    </p>
                                </div>
                            </StoryItem>
                        ),
                    },
                    {
                        content: (props) => (
                            <StoryItem imgSrc={'/img/welcome-stories/story-6.png'} imgAlt={'story-6'}>
                                <div className="story-item__content">
                                    <span className="story-item__day">
                                        <p>3 weeks</p>
                                    </span>

                                    <p className="story-item__text">Results without diets and workouts!</p>
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
