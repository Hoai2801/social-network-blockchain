import React from 'react';

const ItemCard = ({ imageUrl, title, price, highestBid, buyLink }) => {
    return (
        <div
            className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white border border-gray-100 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
            <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg p-2">
                    <img
                        src={imageUrl}
                        className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                        alt={title}
                    />
                </div>

                <div
                    className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                    <a
                        href={buyLink}
                        className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white">
                        <i className="mdi mdi-lightning-bolt"></i> Buy Now
                    </a>
                </div>

                <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                        className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white">
                        <i className="mdi mdi-plus"></i>
                    </button>
                </div>
            </div>

            <div className="mt-3">
                <div className="my-3">
                    <a href={buyLink} className="font-semibold hover:text-violet-600">{title}</a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 rounded-lg shadow dark:shadow-gray-700">
                    <div>
                        <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                        <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> {price} ETH</span>
                    </div>

                    <div>
                        <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                        <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> {highestBid} ETH</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;