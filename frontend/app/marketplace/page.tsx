import NFTCard from "@/components/ui/nft-card";
import Link from "next/link";

const Marketplace = () => {
  const nfts = [
    {
      id: 1,
      image: "https://picsum.photos/200",
      title: "Galaxy Warrior",
      description: "A unique digital warrior from the galaxy collection.",
      price: "0.5",
    },
    {
      id: 2,
      image: "https://picsum.photos/200",
      title: "Cyber Punk 2077",
      description: "Limited edition cyberpunk character NFT.",
      price: "1.2",
    },
    {
      id: 3,
      image: "https://picsum.photos/200",
      title: "Abstract Art #5",
      description: "One of a kind abstract art piece in the digital world.",
      price: "0.75",
    },
    {
      id: 4,
      image: "https://picsum.photos/200",
      title: "Pixelated King",
      description: "Pixel art depiction of a digital king.",
      price: "2.0",
    },
  ];
  return (
    <div className="container p-5">
      <h1 className="mb-4 text-center text-3xl font-bold">Marketplace</h1>
      <div className="flex gap-4">
        {["All", "Art", "Gaming", "Membership"].map((category) => (
          <Link
            key={category}
            href={`/marketplace/${category.toLowerCase()}`}
            className="rounded-lg bg-gray-700/50 px-5 py-2 text-white"
          >
            {category}
          </Link>
        ))}
      </div>
      <div className="mt-5 flex w-full flex-wrap gap-5">
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
