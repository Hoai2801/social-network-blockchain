"use client";

import React from "react";

type NFTCardProps = {
    image: string,
    title: string,
    price: string,
    isSelling: boolean,
};

const NFTCard: React.FC<NFTCardProps> = ({
                                             image,
                                             title,
                                             price,
                                             isSelling,
                                         }) => {
    return (
        <div className="w-[250px] overflow-hidden rounded bg-gray-800 text-white shadow-lg">
            <div className="h-64 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover"/>
            </div>
            <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{price} ETH</span>
                    {isSelling ? (
                        <button className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
                            Buy Now
                        </button>
                    ) : (
                        <button className="rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700">
                            Sell
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
