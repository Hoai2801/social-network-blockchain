"use client";

import NFTCard from "@/components/ui/nft-card";
import { sendTransaction } from "@/hooks/sendTransaction";
import { dasApi } from "@metaplex-foundation/digital-asset-standard-api";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"; // Assuming this is correctly implemented
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import { useEffect, useState } from "react";

const Profile = () => {
  const umi = createUmi("https://api.devnet.solana.com").use(dasApi());
  const wallet = useWallet();
  const owner = wallet.publicKey as PublicKey;
  interface Asset {
    id: string;
    content: {
      metadata: {
        name: string;
        attributes: { trait_type: string; value: string }[];
      };
      links: {
        image: string;
      };
    };
  }

  const [assets, setAssets] = useState<Asset[]>([]);
  const [isListing, setIsListing] = useState(false); // Manage loading state during the listing process
  const [price, setPrice] = useState(""); // Store price input
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed",
  );

  const fetchAssets = async () => {
    try {
      const fetchedAssets = await umi.rpc.getAssetsByOwner({
        owner,
        limit: 10,
      });
      setAssets(fetchedAssets.items);
      console.log("Fetched Assets:", fetchedAssets);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  useEffect(() => {
    if (owner) {
      fetchAssets();
    }
  }, [owner]);

  const listNftForSale = async (nftId: string) => {
    if (!wallet || !wallet.connected || !owner) {
      alert("Please connect your wallet.");
      return;
    }

    if (!price || isNaN(parseFloat(price))) {
      alert("Please enter a valid price.");
      return;
    }

    setIsListing(true);

    try {
      // Replace with actual program ID
      const programId = new PublicKey(
        "H575R3gG2tnTFF8Z658UkqSvtgTY86yRc5c7KVCStRBd",
      );

      // Replace with actual vault public key (you need to create a vault account separately)
      const vaultPublicKey = new PublicKey("VAULT_PUBLIC_KEY");

      // Fetch the NFT token account associated with the owner and NFT mint
      const nftMint = new PublicKey(nftId);
      const nftTokenAccount = await umi.rpc.getAssociatedTokenAddress({
        mint: nftMint,
        owner: owner,
      });

      // Construct the transaction
      const transaction = new Transaction().add(
        await umi.rpc.methods
          .listNft(new anchor.BN(parseFloat(price) * 1e9)) // Price in lamports
          .accounts({
            seller: owner,
            nftAccount: nftTokenAccount,
            vault: vaultPublicKey,
            tokenProgram: TOKEN_PROGRAM_ID,
          })
          .instruction(), // Add instruction to the transaction
      );

      // Send the transaction
      const signature = await sendTransaction(wallet, connection, transaction);
      console.log("Transaction signature:", signature);

      // Notify success
      alert("NFT listed for sale successfully!");
      setIsListing(false);

      // Refresh the asset list (if needed)
      fetchAssets();
    } catch (error) {
      console.error("Error listing NFT:", error);
      alert("Failed to list NFT for sale.");
      setIsListing(false);
    }
  };

  // Map assets to the format expected by NFTCard
  const nfts = assets.map((asset) => {
    const metadata = asset.content.metadata;
    const links = asset.content.links;

    return {
      id: asset.id,
      image: links.image || "", // Provide a fallback if the image URL is missing
      title: metadata.name || "Unknown NFT",
      price:
        metadata.attributes.find((attr) => attr.trait_type === "Rarity")
          ?.value || "N/A",
      isSelling: false, // Update this as needed
    };
  });

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-5">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price in SOL"
          className="rounded border p-2"
        />
      </div>

      <div className="flex w-full flex-wrap gap-5">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            onClick={() => listNftForSale(nft.id)} // Trigger the sell function on click
            className="cursor-pointer"
          >
            <NFTCard
              image={nft.image}
              title={nft.title}
              price={nft.price}
              isSelling={nft.isSelling}
            />
          </div>
        ))}
      </div>

      {isListing && (
        <div className="mt-5 text-center text-xl text-blue-500">
          Listing your NFT for sale...
        </div>
      )}
    </div>
  );
};

export default Profile;
