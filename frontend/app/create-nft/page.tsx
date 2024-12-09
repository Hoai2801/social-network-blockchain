"use client";
import axios from "axios";
import React, { useState } from "react";

const CreateNFTPage = () => {
  const [traits, setTraits] = useState([{ key: "abc", value: "2" }]);
  const [formData, setFormData] = useState({
    name: "",
    supply: "1",
    description: "",
    externalUrl: "",
    image: null as File | null,
  });

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
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const mintNFT = async () => {
    const YOUR_WALLET_ADDRESS = "CDXLgstdVZJ7qUh3DC1mAGuCmTM3UiS1M24m44t3UViS";
    const network = "devnet";

    try {
      const attributes = traits.map((trait) => ({
        trait_type: trait.key,
        value: trait.value,
      }));

      const nftFormData = new FormData();
      nftFormData.append("network", network);
      nftFormData.append("creator_wallet", YOUR_WALLET_ADDRESS);
      nftFormData.append("name", formData.name);
      nftFormData.append("symbol", "SYMBOL"); // Replace with your symbol
      nftFormData.append("description", formData.description);
      nftFormData.append("attributes", JSON.stringify(attributes));
      nftFormData.append("external_url", formData.externalUrl);
      if (formData.image) {
        nftFormData.append("image", formData.image);
      }
      nftFormData.append("fee_payer", YOUR_WALLET_ADDRESS);

      const response = await axios.post(
        "https://api.shyft.to/sol/v2/nft/create",
        nftFormData,
        {
          headers: {
            "x-api-key": process.env.SHYFT_API_KEY || "YOUR_API_KEY", // Replace YOUR_API_KEY with your Shyft API Key
          },
        },
      );

      console.log("NFT minted successfully:", response.data);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
      <div className="w-full max-w-4xl">
        <h1 className="mb-4 text-2xl font-bold">Create an NFT</h1>
        <p className="mb-8 text-gray-400">
          Once your item is minted you will not be able to change any of its
          information.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Media Upload */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 p-6">
            <p className="text-center">Drag and drop media</p>
            <p className="text-center text-sm text-gray-400">Max size: 50MB</p>
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
              <label className="mb-2 block text-sm font-medium">Supply *</label>
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
                    onChange={(e) => updateTrait(index, "key", e.target.value)}
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
        <button
          className="mt-6 w-full rounded bg-blue-600 p-2"
          onClick={mintNFT}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateNFTPage;
