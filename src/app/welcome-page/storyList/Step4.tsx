import React from 'react';
import Image from 'next/image';

const Step4 = () => {
    return (
        <div className="story-item">
            <div className="story-item__content">
                <p className="story-item__text">
                    Lacking motivation? Don't want to go on a strict diet and exhaust yourself with workouts?
                </p>
            </div>
            <Image
                src={'/img/welcome-stories/story-4.png'}
                width={390}
                height={840}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                priority
                alt={'story-2'}
            />
        </div>
    );
};

export default Step4;
