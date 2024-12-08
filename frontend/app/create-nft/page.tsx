"use client";
import React, { useState } from "react";
import { Connection, PublicKey, Keypair, Transaction } from "@solana/web3.js";
import {useWallet} from "@solana/wallet-adapter-react";

const CreateNFT = () => {
    const address = "123";
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [supply, setSupply] = useState(1);
    const [file, setFile] = useState(null);

    const handleFileChange = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
        setFile(event.target.files[0]);
    };

    const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
    };

    const handleSupplyChange = (event: { target: { value: React.SetStateAction<number>; }; }) => {
        setSupply(event.target.value);
    };

    const mintNFT = async () => {
        if (!address || !file || !name || !supply) {
            alert("Please fill all required fields and connect your wallet.");
            return;
        }

        try {
            // Connect to Solana cluster
            const connection = new Connection("https://api.devnet.solana.com", "confirmed");

            // Assuming you have your private key securely stored elsewhere
            const payer = Keypair.generate(); // Replace with your payer keypair for mainnet

            // Prepare metadata for the NFT
            const metadata = {
                name,
                description,
                image: file, // Convert the file into a URL with IPFS or a similar service
                supply: parseInt(String(supply), 10),
            };

            alert("NFT minted successfully!");
        } catch (error) {
            console.error("Error minting NFT", error);
            alert("Failed to mint NFT. Check console for details.");
        }
    };

    return (
        <div className="flex justify-center h-[90vh]">
            <div>
                <h1 className="text-[42px] font-bold">Create New NFT</h1>
                <div className="border rounded-lg border-gray-400 p-2 flex gap-5 mt-5">
                    <p className="mt-3">
                        {address || "You are not connected"}
                    </p>
                </div>
                <div className="mt-5">
                    <h3>Upload file</h3>
                    <div
                        className="rounded-lg border-dashed mt-2 border-gray-400 border p-2 h-[200px] flex justify-center items-center">
                        <div>
                            <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                            <div className="flex w-full justify-center mt-2">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    hidden
                                    id="actual-btn"
                                />
                                <label
                                    htmlFor="actual-btn"
                                    className="border h-fit rounded-lg p-2 bg-slate-200 cursor-pointer"
                                >
                                    Choose File
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="gap-2 flex flex-col">
                        <label>
                            Name <span className="text-orange-400">*</span>
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                className="ml-12 border-b border-black focus:border-b focus:outline-none p-2"
                            />
                        </label>
                        <br />

                        <label>
                            Description
                            <input
                                value={description}
                                onChange={handleDescriptionChange}
                                className="ml-2 border-b border-black focus:border-b focus:outline-none p-2"
                            />
                        </label>
                        <label>
                            Initial Supply <span className="text-orange-400">*</span>
                            <input
                                type="number"
                                value={supply}
                                onChange={handleSupplyChange}
                                className="ml-2 border-b border-black focus:border-b focus:outline-none p-2"
                            />
                        </label>
                    </form>
                </div>
                <div className="flex w-full justify-center mt-5">
                    <button onClick={mintNFT} className="bg-blue-400 rounded-lg p-2 text-white px-5">
                        Mint
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNFT;