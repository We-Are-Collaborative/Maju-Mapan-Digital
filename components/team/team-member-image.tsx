'use client';

import React, { useState } from 'react';

interface TeamMemberImageProps {
    src?: string | null;
    alt: string;
    fallbackId: string | number;
    className?: string;
}

export const TeamMemberImage: React.FC<TeamMemberImageProps> = ({
    src,
    alt,
    fallbackId,
    className = "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
}) => {
    const dummyUrl = `https://i.pravatar.cc/600?u=${fallbackId}`;
    const [imgSrc, setImgSrc] = useState(src || dummyUrl);

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            loading="lazy"
            onError={() => {
                if (imgSrc !== dummyUrl) {
                    setImgSrc(dummyUrl);
                }
            }}
        />
    );
};
