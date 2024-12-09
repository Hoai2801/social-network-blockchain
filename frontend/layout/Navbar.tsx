"use client";
import {useWallet} from "@solana/wallet-adapter-react";
import Link from "next/link";
import {useEffect, useState} from "react";

const Navbar = () => {
    const {select, wallets, publicKey, disconnect} = useWallet();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleConnectWalletClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleGmailClick = () => {
        alert("Gmail authentication coming soon!"); // Replace with Gmail auth logic when available.
    };

    useEffect(() => {
        if (!publicKey) {
            return;
        }
        fetch('http://localhost:8080/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                publicKey: publicKey?.toBase58(),
                username: "",
                password: "",
                images: "",
                email: ""
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then((data) => {
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    }, [publicKey]);


    return (
        <div className="fixed top-0 z-50 w-full bg-gray-800 py-4">
            <div className="container flex items-center justify-between text-white shadow-md">
                <Link href="/">
                    <h1 className="text-2xl font-bold">SecMarket-ing</h1>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/create-nft" className="bg-black/30 px-4 py-2 rounded">
                        Create NFT
                    </Link>
                    <button
                        onClick={handleConnectWalletClick}
                        className="px-4 py-2 bg-gray-900 rounded hover:bg-gray-700"
                    >
                        {publicKey ? (
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                    alt="User Avatar"
                                    className="h-6 w-6 rounded-full"
                                />
                                <span className="text-sm">{publicKey.toBase58().slice(0, 6)}</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                    alt="User Avatar"
                                    className="h-6 w-6 rounded-full"
                                />
                                <span className="text-sm">Connect Wallet</span>
                            </div>
                        )}
                    </button>
                </div>

            </div>
            {isDialogOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleCloseDialog}
                >
                    <div
                        className="bg-white p-6 rounded shadow-lg text-black w-96 h-96 flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">Choose a Wallet</h2>
                        {publicKey === null ? (
                            <div className="space-y-4">
                                {wallets.filter((wallet) => wallet.readyState === "Installed").length > 0 ? (
                                    wallets
                                        .filter((wallet) => wallet.readyState === "Installed")
                                        .map((wallet) => (
                                            <button
                                                key={wallet.adapter.name}
                                                onClick={() => select(wallet.adapter.name)}
                                                className="w-64 flex items-center gap-2 px-4 py-2 border rounded text-md"
                                            >
                                                <img
                                                    src={wallet.adapter.icon}
                                                    alt={wallet.adapter.name}
                                                    className="h-6 w-6"
                                                />
                                                {wallet.adapter.name}
                                            </button>
                                        ))
                                ) : (
                                    <p>No wallet found. Please download a supported Solana wallet.</p>
                                )}
                                <button
                                    onClick={handleGmailClick}
                                    className="w-64 flex items-center gap-2 px-4 py-2 border rounded text-md"
                                >
                                    <img
                                        src="https://applecenter.com.vn/uploads/image/images/gmail-2.jpg"
                                        alt="Gmail"
                                        className="h-6 w-6"
                                    />
                                    Sign in with Gmail
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <button
                                    onClick={disconnect}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Disconnect Wallet
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
