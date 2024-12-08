import React from 'react';
import Link from "next/link";
import NFTCard from "@/components/ui/nft-card";

const Marketplace = () => {
    const nfts = [
        {
            "id": 1,
            "image": "https://picsum.photos/200",
            "title": "Galaxy Warrior",
            "description": "A unique digital warrior from the galaxy collection.",
            "price": "0.5"
        },
        {
            "id": 2,
            "image": "https://picsum.photos/200",
            "title": "Cyber Punk 2077",
            "description": "Limited edition cyberpunk character NFT.",
            "price": "1.2"
        },
        {
            "id": 3,
            "image": "https://picsum.photos/200",
            "title": "Abstract Art #5",
            "description": "One of a kind abstract art piece in the digital world.",
            "price": "0.75"
        },
        {
            "id": 4,
            "image": "https://picsum.photos/200",
            "title": "Pixelated King",
            "description": "Pixel art depiction of a digital king.",
            "price": "2.0"
        }
    ]
    return (
        <div className="p-5">
                <h1 className="text-center text-3xl font-bold mb-4">Marketplace</h1>
            <div className="flex gap-4">
                <Link href="/marketplace" className="bg-gray-400/50 py-2 px-5 rounded-lg text-white">
                    All
                </Link>
                <Link href="/marketplace/art" className="bg-gray-900/50 py-2 px-5 rounded-lg text-white">
                    Art
                </Link>
                <Link href="/marketplace/gaming" className="bg-gray-700/50 py-2 px-5 rounded-lg text-white">
                    Gaming
                </Link>
                <Link href="/marketplace/membership" className="bg-gray-700/50 py-2 px-5 rounded-lg text-white">
                    Membership
                </Link>
            </div>
            <div className="flex flex-wrap w-full gap-5 mt-5">
                {nfts.map((nft) => (
                    <NFTCard
                        key={nft.id}
                        image={nft.image}
                        title={nft.title}
                        price={nft.price}
                        isSelling={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
