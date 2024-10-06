import React from 'react';
import Image from 'next/image';

const Step2 = () => {
    return (
        <div className="story-item">
            <div className="story-item__content">
                <span className="story-item__day">
                    <p>2 weeks</p>
                </span>

                <p className="story-item__text">Strict diet</p>
            </div>

            <Image
                src={'/img/welcome-stories/story-2.png'}
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

export default Step2;
