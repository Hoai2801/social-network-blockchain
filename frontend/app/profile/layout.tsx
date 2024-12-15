"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <div className="container">
      <section className="relative h-48 bg-gray-300">
        <Image
          src="https://via.placeholder.com/1920x200"
          alt="Profile Banner"
          className="h-full w-full object-cover"
          width={1920}
          height={200}
        />
        <div className="absolute bottom-0 left-[180px] translate-y-1/2 transform object-cover">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            alt="User Avatar"
            className="h-[180px] w-[180px] rounded-full border-4 border-white object-cover"
            width={180}
            height={180}
          />
        </div>
      </section>

      <section className="mt-6">
        <div className="container mx-auto flex items-center justify-between pl-[380px]">
          <div>
            <h2 className="text-4xl font-bold">Username</h2>
            <p className="text-gray-600">@username123</p>
          </div>
          <div className="flex space-x-4">
            <div>
              <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Follow
              </button>
            </div>
            <div>
              <button className="rounded bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300">
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <p className="text-gray-600">Bio</p>
        </div>
      </section>

      <section className="mt-8 px-6">
        <div className="container mx-auto">
          <ul className="flex border-b">
            {[
              { href: "/profile", label: "Collected" },
              { href: "/profile/favorite", label: "Favorited" },
              { href: "/profile/project", label: "Project" },
            ].map((item) => (
              <li key={item.href} className="mr-6">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-block px-4 py-2",
                    pathname === item.href
                      ? "border-b-2 border-blue-600 font-semibold text-blue-600"
                      : "text-gray-600 hover:text-blue-600",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 px-6">
        <div className="container mx-auto">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </section>
    </div>
  );
};

export default Layout;
