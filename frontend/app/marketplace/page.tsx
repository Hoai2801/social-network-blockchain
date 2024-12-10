import NFTCard from "@/components/ui/nft-card";
import Link from "next/link";
import ItemCard from "@/components/ui/new-nft-cart";

const Marketplace = () => {
  const items = [
    {
      imageUrl: "https://shreethemes.in/giglink/landing/assets/images/items/6.jpg",
      title: "Genuine Undead #3902",
      price: 3.5,
      highestBid: 3.55,
      buyLink: "item-detail.html",
    },
    {
      imageUrl: "https://shreethemes.in/giglink/landing/assets/images/items/2.jpg",
      title: "Genuine Undead #1234",
      price: 4.2,
      highestBid: 4.5,
      buyLink: "item-detail.html",
    },
    {
      imageUrl: "https://shreethemes.in/giglink/landing/assets/images/items/3.jpg",
      title: "Genuine Undead #1234",
      price: 4.2,
      highestBid: 4.5,
      buyLink: "item-detail.html",
    },
    {
      imageUrl: "https://shreethemes.in/giglink/landing/assets/images/items/4.jpg",
      title: "Genuine Undead #1234",
      price: 4.2,
      highestBid: 4.5,
      buyLink: "item-detail.html",
    },
    {
      imageUrl: "https://shreethemes.in/giglink/landing/assets/images/items/5.jpg",
      title: "Genuine Undead #1234",
      price: 4.2,
      highestBid: 4.5,
      buyLink: "item-detail.html",
      },
      {
        imageUrl: "https://shreethemes.in/giglink/landing/assets/images/items/6.jpg",
        title: "Genuine Undead #1234",
        price: 4.2,
        highestBid: 4.5,
        buyLink: "item-detail.html",
        },
  ];
  return (
    <div className="container p-5">
      <h1 className="mb-4 text-center text-3xl font-bold">Marketplace</h1>
      <div className="flex gap-4">
        <Link
          href="/marketplace"
          className="rounded-lg bg-gray-700/50 px-5 py-2 text-white"
        >
          All
        </Link>
        <Link
          href="/marketplace/art"
          className="rounded-lg bg-gray-700/50 px-5 py-2 text-white"
        >
          Art
        </Link>
        <Link
          href="/marketplace/gaming"
          className="rounded-lg bg-gray-700/50 px-5 py-2 text-white"
        >
          Gaming
        </Link>
        <Link
          href="/marketplace/membership"
          className="rounded-lg bg-gray-700/50 px-5 py-2 text-white"
        >
          Membership
        </Link>
      </div>
      <div className="mt-5 flex w-full flex-wrap gap-5">
        {items.map((item, index) => (
            <ItemCard
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                highestBid={item.highestBid}
                buyLink={item.buyLink}
            />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
