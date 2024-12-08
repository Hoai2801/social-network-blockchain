"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname, useRouter} from "next/navigation";

const Layout = ({
                    children, // will be a page or nested layout
                }: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();

    return (
        <div>
            <section className="relative bg-gray-300 h-48">
                <img
                    src="https://via.placeholder.com/1920x200"
                    alt="Profile Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-[180px] transform translate-y-1/2 object-cover">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                        alt="User Avatar"
                        className="rounded-full border-4 border-white w-[180px] h-[180px] object-cover"
                    />
                </div>
            </section>

            <section className="mt-6">
                <div className="container mx-auto flex justify-between items-center pl-[200px]">
                    <div>
                        <h2 className="text-4xl font-bold">Username</h2>
                        <p className="text-gray-600">@username123</p>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Follow
                            </button>
                        </div>
                        <div>
                            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded hover:bg-gray-300">
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
                        <li className="mr-6">
                            <Link
                                href="/profile"
                                className={`inline-block py-2 px-4 ${
                                    pathname === '/profile'
                                        ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                Collected
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                href="/profile/favorite"
                                className={`inline-block py-2 px-4 ${
                                    pathname === '/profile/favorite'
                                        ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                Favorited
                            </Link>
                        </li>
                        <li className="mr-6">
                            <Link
                                href="/profile/project"
                                className={`inline-block py-2 px-4 ${
                                    pathname === '/profile/project'
                                        ? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                Project
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mt-8 px-6">
                <div className="container mx-auto">
                    {children}
                </div>
            </section>
        </div>
    );
};

export default Layout;
