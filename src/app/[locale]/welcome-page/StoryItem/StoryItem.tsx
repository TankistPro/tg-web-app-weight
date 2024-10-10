import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IStoryItem extends PropsWithChildren {
    imgSrc: string | StaticImport;
    imgAlt: string;
}

const StoryItem: React.FC<IStoryItem> = ({ children, imgSrc, imgAlt }) => {
    return <div className="story-item">{children}</div>;
};

export default StoryItem;
