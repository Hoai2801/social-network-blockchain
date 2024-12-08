"use client";
import { Connection, Keypair } from "@solana/web3.js";
import React, { useState } from "react";
import { toast } from "sonner";

const CreateNFT = () => {
  const address = "123";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [supply, setSupply] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setFile(event.target.files[0]);
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };
  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };

  const handleSupplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSupply(Number(event.target.value));
  };

  const mintNFT = async () => {
    if (!address || !file || !name || !supply) {
      // alert("Please fill all required fields and connect your wallet.");
      toast.error("Please fill all required fields and connect your wallet.");
      return;
    }

    try {
      // Connect to Solana cluster
      const connection = new Connection(
        "https://api.devnet.solana.com",
        "confirmed",
      );

      // Assuming you have your private key securely stored elsewhere
      const payer = Keypair.generate(); // Replace with your payer keypair for mainnet

      // Prepare metadata for the NFT
      const metadata = {
        name,
        description,
        image: file, // Convert the file into a URL with IPFS or a similar service
        supply: parseInt(String(supply), 10),
      };

      // alert("NFT minted successfully!");
      toast.success("NFT minted successfully!");
    } catch (error) {
      console.error("Error minting NFT", error);
      // alert("Failed to mint NFT. Check console for details.");
      toast.error("Failed to mint NFT. Check console for details.");
    }
  };

  return (
    <div className="flex h-[90vh] justify-center">
      <div>
        <h1 className="text-[42px] font-bold">Create New NFT</h1>
        <div className="mt-5 flex gap-5 rounded-lg border border-gray-400 p-2">
          <p className="mt-3">{address || "You are not connected"}</p>
        </div>
        <div className="mt-5">
          <h3>Upload file</h3>
          <div className="mt-2 flex h-[200px] items-center justify-center rounded-lg border border-dashed border-gray-400 p-2">
            <div>
              <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
              <div className="mt-2 flex w-full justify-center">
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  id="actual-btn"
                />
                <label
                  htmlFor="actual-btn"
                  className="h-fit cursor-pointer rounded-lg border bg-slate-200 p-2"
                >
                  Choose File
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-2">
            <label>
              Name <span className="text-orange-400">*</span>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="ml-12 border-b border-black p-2 focus:border-b focus:outline-none"
              />
            </label>
            <br />

            <label>
              Description
              <input
                value={description}
                onChange={handleDescriptionChange}
                className="ml-2 border-b border-black p-2 focus:border-b focus:outline-none"
              />
            </label>
            <label>
              Initial Supply <span className="text-orange-400">*</span>
              <input
                type="number"
                value={supply}
                onChange={handleSupplyChange}
                className="ml-2 border-b border-black p-2 focus:border-b focus:outline-none"
              />
            </label>
          </form>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <button
            onClick={mintNFT}
            className="rounded-lg bg-blue-400 p-2 px-5 text-white"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
