"use client";
import Sidebar from "@/components/ui/sidebar";
import useToggle from "@/hooks/use-state-toggle";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Menu } from "lucide-react";
import Link from "next/link";
import "./style.css";

const Navbar = () => {
  const sidebar = useToggle();
  return (
    // <div className="fixed top-0 z-50 w-full bg-gray-800 py-4">
    //   <div className="container flex items-center justify-between text-white shadow-md">
    //     {/*sticky not working*/}
    //     <Link href="/">
    //       <h1 className="text-2xl font-bold">SecMarket-ing</h1>
    //     </Link>
    //     <WalletMultiButton className="rounded bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700" />
    //   </div>
    // </div>
    <>
      <div className="fixed z-50 h-[66px] w-full border-b bg-white px-5 py-4">
        <div className="container flex w-full justify-between">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">SecMarket-ing</h1>
          </Link>
          <div
            className="group relative flex h-[35px] w-10 cursor-pointer items-center justify-center rounded-lg border border-[#ededed] bg-[#ededed] transition-colors hover:border-sky-500"
            onClick={sidebar.toggle}
          >
            <span className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 filter transition-all duration-200 ease-out group-hover:blur-[8px]" />
            <span className="relative">
              <Menu size={18} />
            </span>
          </div>
        </div>
      </div>
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close}>
        <div className="flex w-full flex-col">
          <div className="flex flex-col">
            <p className="bg-[#ebeff8] p-2.5 pl-6 text-sm">Wallet</p>
            <div className="flex items-center gap-3.5 p-2.5 pl-6 transition-colors hover:bg-[#f2f3f5]">
              <WalletMultiButton className="a bg-transparent p-0 text-black" />
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Navbar;
