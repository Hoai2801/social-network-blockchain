"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import React, { useState } from "react";
const PINATA_API_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;

const CreateNFTPage = () => {
  console.log(PINATA_API_KEY);
  const [traits, setTraits] = useState([{ key: "abc", value: "2" }]);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    attributes: traits,
    externalUrl: "",
    symbol: "",
    sellerFeeBasisPoints: 0,
    supply: 1, // Initialize the supply to 1
  });

  const wallet = useWallet();

  const uploadImageToIPFS = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(PINATA_API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
        },
      });

      // Get the IPFS URL for the uploaded file
      const imageUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log("Image uploaded to IPFS:", imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Error uploading file to IPFS:", error);
      throw new Error("IPFS upload failed");
    }
  };

  const createNft = async () => {
    if (!formData.imageUrl) {
      console.error("No image URL selected.");
      return;
    }

    try {
      // Upload the image to IPFS first
      if (!file) {
        console.error("No file selected.");
        return;
      }
      const imageUrl = await uploadImageToIPFS(file);
      // Prepare metadata
      const attributes = traits.map((trait) => ({
        trait_type: trait.key,
        value: trait.value,
      }));
      const request = {
        jsonrpc: "2.0",
        id: "helius-test",
        method: "mintCompressedNft",
        params: {
          name: formData.name,
          symbol: formData.symbol,
          owner: wallet.publicKey,
          description: formData.description,
          attributes,
          imageUrl: imageUrl,
          externalUrl: formData.externalUrl,
          sellerFeeBasisPoints: formData.sellerFeeBasisPoints,
        },
      };
      console.log(request);

      // Make Helius API request to mint the NFT
      const response = await fetch(
        `https://devnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIOUS_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        },
      );
      const { result } = await response.json();
      console.log("Minted asset: ", result.assetId);

      // console.log('Minted asset: ', heliusResponse.data.result.assetId);
    } catch (error) {
      console.error("Error creating NFT:", error);
    }
  };

  const addTrait = () => {
    setTraits([...traits, { key: "", value: "" }]);
  };

  const updateTrait = (index: number, field: string, value: string) => {
    const updatedTraits = [...traits];
    updatedTraits[index] = { ...updatedTraits[index], [field]: value };
    setTraits(updatedTraits);
  };

  const removeTrait = (index: number) => {
    setTraits(traits.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      // Assuming you need to upload this file, create a file upload functionality
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFormData({ ...formData, imageUrl });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNft();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
      <div className="w-full max-w-4xl">
        <h1 className="mb-4 text-2xl font-bold">Create an NFT</h1>
        <p className="mb-8 text-gray-400">
          Once your item is minted you will not be able to change any of its
          information.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Media Upload */}
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 p-6">
              <p className="text-center">Drag and drop media</p>
              <p className="text-center text-sm text-gray-400">
                Max size: 50MB
              </p>
              <p className="text-center text-sm text-gray-400">
                JPG, PNG, GIF, SVG, MP4
              </p>
              <input type="file" className="mt-4" onChange={handleFileChange} />
            </div>

            {/* Form */}
            <div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Collection *
                </label>
                <button className="w-full rounded border border-gray-700 bg-gray-800 p-2">
                  Create a new collection
                </button>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded border border-gray-700 bg-gray-800 p-2"
                  placeholder="Name your NFT"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Supply *
                </label>
                <input
                  type="number"
                  name="supply"
                  className="w-full rounded border border-gray-700 bg-gray-800 p-2"
                  placeholder="1"
                  value={formData.supply}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full rounded border border-gray-700 bg-gray-800 p-2"
                  placeholder="Enter a description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium">
                  External link
                </label>
                <input
                  type="url"
                  name="externalUrl"
                  className="w-full rounded border border-gray-700 bg-gray-800 p-2"
                  placeholder="https://collection.io/item/123"
                  value={formData.externalUrl}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Traits</label>
                {traits.map((trait, index) => (
                  <div key={index} className="mb-2 flex items-center gap-2">
                    <input
                      type="text"
                      className="flex-1 rounded border border-gray-700 bg-gray-800 p-2"
                      placeholder="Key"
                      value={trait.key}
                      onChange={(e) =>
                        updateTrait(index, "key", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="flex-1 rounded border border-gray-700 bg-gray-800 p-2"
                      placeholder="Value"
                      value={trait.value}
                      onChange={(e) =>
                        updateTrait(index, "value", e.target.value)
                      }
                    />
                    <button
                      className="rounded bg-red-600 p-2"
                      onClick={() => removeTrait(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  className="mt-2 w-full rounded border border-gray-700 bg-gray-800 p-2"
                  onClick={addTrait}
                >
                  + Add trait
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded bg-blue-600 p-2">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFTPage;
