import React from 'react';
import Image from 'next/image';

const Step5 = () => {
    return (
        <div className="story-item">
            <div className="story-item__content">
                <p className="story-item__text">
                    There is a way out! App <span>Slim</span>$N$<span>Rich</span>!
                </p>
            </div>

            <Image
                src={'/img/welcome-stories/story-5.png'}
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

export default Step5;
