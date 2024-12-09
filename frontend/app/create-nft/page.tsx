"use client"
import React, { useState } from "react";
import axios from "axios";

const CreateNFTPage = () => {
  const [traits, setTraits] = useState([{ key: "abc", value: "2" }]);
  const [formData, setFormData] = useState({
    name: "",
    supply: "1",
    description: "",
    externalUrl: "",
    image: null,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const attributes = traits.map((trait) => ({ trait_type: trait.key, value: trait.value }));

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
          }
      );

      console.log("NFT minted successfully:", response.data);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-4">Create an NFT</h1>
          <p className="text-gray-400 mb-8">
            Once your item is minted you will not be able to change any of its information.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Media Upload */}
            <div className="border-2 border-dashed border-gray-500 p-6 flex flex-col items-center justify-center">
              <p className="text-center">Drag and drop media</p>
              <p className="text-center text-sm text-gray-400">Max size: 50MB</p>
              <p className="text-center text-sm text-gray-400">JPG, PNG, GIF, SVG, MP4</p>
              <input type="file" className="mt-4" onChange={handleFileChange} />
            </div>

            {/* Form */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Collection *</label>
                <button className="w-full bg-gray-800 border border-gray-700 rounded p-2">Create a new collection</button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                    placeholder="Name your NFT"
                    value={formData.name}
                    onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Supply *</label>
                <input
                    type="number"
                    name="supply"
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                    placeholder="1"
                    value={formData.supply}
                    onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                    name="description"
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                    placeholder="Enter a description"
                    value={formData.description}
                    onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">External link</label>
                <input
                    type="url"
                    name="externalUrl"
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                    placeholder="https://collection.io/item/123"
                    value={formData.externalUrl}
                    onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Traits</label>
                {traits.map((trait, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <input
                          type="text"
                          className="flex-1 bg-gray-800 border border-gray-700 rounded p-2"
                          placeholder="Key"
                          value={trait.key}
                          onChange={(e) => updateTrait(index, "key", e.target.value)}
                      />
                      <input
                          type="text"
                          className="flex-1 bg-gray-800 border border-gray-700 rounded p-2"
                          placeholder="Value"
                          value={trait.value}
                          onChange={(e) => updateTrait(index, "value", e.target.value)}
                      />
                      <button
                          className="bg-red-600 p-2 rounded"
                          onClick={() => removeTrait(index)}
                      >
                        ✕
                      </button>
                    </div>
                ))}
                <button
                    className="w-full bg-gray-800 border border-gray-700 rounded p-2 mt-2"
                    onClick={addTrait}
                >
                  + Add trait
                </button>
              </div>
            </div>
          </div>
          <button
              className="w-full bg-blue-600 rounded p-2 mt-6"
              onClick={mintNFT}
          >
            Create
          </button>
        </div>
      </div>
  );
};

export default CreateNFTPage;
