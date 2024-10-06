'use client';

import React from 'react';
import Stories from 'react-insta-stories';

import './welcomePage.scss';

import Step2 from './storyList/Step2';
import Step1 from './storyList/Step1';
import Step3 from './storyList/Step3';
import Step4 from './storyList/Step4';
import Step5 from './storyList/Step5';
import Step6 from './storyList/Step6';

const WelcomePage = () => {
    return (
        <div className="page welcome-page">
            <Stories
                loop
                storyContainerStyles={{
                    background: 'var(--bg_light_color)',
                }}
                progressContainerStyles={{
                    width: '97%',
                    filter: 'none',
                    paddingTop: '20px',
                }}
                progressWrapperStyles={{
                    height: '5px',
                    background: '#BFBFFF',
                    borderRadius: '100px',
                    overflow: 'hidden',
                }}
                progressStyles={{
                    background: '#8000FF',
                    borderRadius: '100px',
                    overflow: 'hidden',
                }}
                width={'100%'}
                height={'100%'}
                stories={[
                    {
                        content: (props) => <Step1 />,
                    },
                    {
                        content: (props) => <Step2 />,
                    },
                    {
                        content: (props) => <Step3 />,
                    },
                    {
                        content: (props) => <Step4 />,
                    },
                    {
                        content: (props) => <Step5 />,
                    },
                    {
                        content: (props) => <Step6 />,
                    },
                ]}
                defaultInterval={3000}
            />
        </div>
    );
};

export default WelcomePage;
