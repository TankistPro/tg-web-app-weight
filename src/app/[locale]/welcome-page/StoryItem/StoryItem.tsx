import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

interface IStoryItem extends PropsWithChildren {
    imgSrc: string;
    imgAlt: string;
}

const StoryItem: React.FC<IStoryItem> = ({ children, imgSrc, imgAlt }) => {
    return (
        <div className="story-item">
            {children}

            <Image
                src={imgSrc}
                width={390}
                height={840}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: '100%',
                }}
                priority
                alt={imgAlt}
            />
        </div>
    );
};

export default StoryItem;
