"use client";

import React from "react";

type NFTCardProps = {
    image: string;
    title: string;
    price: string;
    isSelling: boolean;
};

const NFTCard: React.FC<NFTCardProps> = ({ image, title, price, isSelling}) => {
    return (
        <div className="w-[250px] rounded overflow-hidden shadow-lg bg-gray-800 text-white">
            <div className="h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{price} ETH</span>
                    {
                        isSelling ? (
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Buy Now
                            </button>
                        ) : (
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Sell
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default NFTCard;



