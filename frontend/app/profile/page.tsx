import NFTCard from "@/components/ui/nft-card";

const Profile = () => {
  const nfts = [
    {
      id: 1,
      image: "https://picsum.photos/200",
      title: "Galaxy Warrior",
      description: "A unique digital warrior from the galaxy collection.",
      price: "0.5",
      isSelling: true,
    },
    {
      id: 2,
      image: "https://picsum.photos/200",
      title: "Cyber Punk 2077",
      description: "Limited edition cyberpunk character NFT.",
      price: "1.2",
      isSelling: false,
    },
    {
      id: 3,
      image: "https://picsum.photos/200",
      title: "Abstract Art #5",
      description: "One of a kind abstract art piece in the digital world.",
      price: "0.75",
      isSelling: true,
    },
    {
      id: 4,
      image: "https://picsum.photos/200",
      title: "Pixelated King",
      description: "Pixel art depiction of a digital king.",
      price: "2.0",
      isSelling: false,
    },
  ];

  return (
    <div className="flex w-full flex-wrap gap-5">
      {nfts.map((nft) => (
        <NFTCard
          key={nft.id}
          image={nft.image}
          title={nft.title}
          price={nft.price}
          isSelling={nft.isSelling}
        />
      ))}
    </div>
  );
};

export default Profile;
