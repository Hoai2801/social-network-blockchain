"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/Link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-gray-800 py-4">
      <div className="container flex items-center justify-between text-white shadow-md">
        {/*sticky not working*/}
        <Link href="/">
          <h1 className="text-2xl font-bold">SecMarket-ing</h1>
        </Link>
        <WalletMultiButton className="rounded bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700" />
      </div>
    </div>
  );
};

export default Navbar;
