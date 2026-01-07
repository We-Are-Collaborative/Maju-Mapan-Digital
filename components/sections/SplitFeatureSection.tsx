import React from 'react';

export default function SplitFeatureSection({ title, leftBullets, rightBullets, image }: any) {
    return (
        <div className="flex gap-4 p-4 text-white">
            <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <ul className="list-disc pl-5">
                    {leftBullets?.map((b: string, i: number) => <li key={i}>{b}</li>)}
                </ul>
            </div>
            <div className="w-1/2">
                <img src={image?.src || "/placeholder.jpg"} alt={image?.alt} className="w-full rounded" />
            </div>
        </div>
    );
}
