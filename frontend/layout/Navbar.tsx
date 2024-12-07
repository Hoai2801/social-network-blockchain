"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md fixed w-full top-0 z-50">
            {/*sticky not working*/}
            <h1 className="text-2xl font-bold">SecMarket-ing</h1>
            <WalletMultiButton className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300" />
        </div>
    );
};

export default Navbar;
