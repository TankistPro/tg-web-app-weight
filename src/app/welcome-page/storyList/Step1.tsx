import Image from 'next/image';
import React from 'react';

const Step1 = () => {
    return (
        <div className="story-item">
            <div className="story-item__content">
                <span className="story-item__day">
                    <p>1 day</p>
                </span>
            </div>

            <Image
                src={'/img/welcome-stories/story-1.png'}
                width={390}
                height={840}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                priority
                alt={'story-1'}
            />
        </div>
    );
};

export default Step1;
