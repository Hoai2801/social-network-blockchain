import React, { useEffect, useState } from "react";

const Feed = () => {
    const feedData = [
        {
            id: 1,
            user: {
                name: "John Doe",
                profileLink: "/profile",
                profilePicture:
                    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
            },
            content: {
                type: "album",
                description:
                    "SelfieCats #0078\n" +
                    "\n" +
                    "This exclusive NFT could be yours. You have 24-hours! Submit your bid at 👉 mydesospace.com/bid4nft #NFTAuction #CryptoArt\n" +
                    "\n" +
                    "Boost your influence! Buy $MyDeSoSpace tokens at openfund.com/trade/MyDeSoSpace and take your bids to the next level!",
                image:
                    "https://nzgoxd3convnctpkh1muq4ci-udhcdhabpfr-tkdvewnfvenbvktp3berct6wkb.arweave.net/3AtBEL-MrUZcadKh3cLz0y9QJHUTiy3CGALrQiwLBQk",
            },
            timestamp: "2 hours ago",
            interactions: {
                likes: 72,
                comments: 11,
                shares: 4,
            },
        },
        {
            id: 2,
            user: {
                name: "Jane Smith",
                profileLink: "/profile-jane",
                profilePicture:
                    "https://images.unsplash.com/photo-1535720223091-98b362104f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
            },
            content: {
                type: "photo",
                description: "Amazing sunset from yesterday!",
                image:
                    "https://nzgoxd3convnctpkh1muq4ci-udhcdhabpfr-tkdvewnfvenbvktp3berct6wkb.arweave.net/3AtBEL-MrUZcadKh3cLz0y9QJHUTiy3CGALrQiwLBQk",
            },
            timestamp: "5 hours ago",
            interactions: {
                likes: 150,
                comments: 24,
                shares: 10,
            },
        },
    ];

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {feedData.map((post) => (
                <div
                    key={post.id}
                    className="bg-white shadow rounded-lg p-4 space-y-4"
                >
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                        <a href={post.user.profileLink}>
                            <img
                                src={post.user.profilePicture}
                                alt={post.user.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </a>
                        <div>
                            <a
                                href={post.user.profileLink}
                                className="font-semibold hover:underline"
                            >
                                {post.user.name}
                            </a>
                            <p className="text-sm text-gray-500">{post.timestamp}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        <p className="text-gray-700">{post.content.description}</p>
                        <img
                            src={post.content.image}
                            alt=""
                            className="rounded-md w-full object-cover"
                        />
                    </div>

                    {/* Interactions */}
                    <div className="flex justify-between text-gray-500">
                        <button className="flex items-center gap-2 hover:text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            {post.interactions.likes}
                        </button>
                        <button className="flex items-center gap-2 hover:text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                            </svg>
                            {post.interactions.comments}
                        </button>
                        <button className="flex items-center gap-2 hover:text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                                />
                            </svg>
                            {post.interactions.shares}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
