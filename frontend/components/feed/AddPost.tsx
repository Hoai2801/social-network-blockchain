import React from 'react';

const AddPost = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            {/* User input section */}
            <div className="flex items-center gap-3">
                {/* Profile Picture */}
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Textarea */}
                <textarea
                    className="grow p-3 h-14 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-socialBlue"
                    placeholder="What's on your mind, Dawid?"
                ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 mt-2">
                {/* People Button */}
                <button className="flex items-center gap-2 text-gray-500 hover:text-socialBlue transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                    <span className="hidden md:block">People</span>
                </button>

                {/* Check-in Button */}
                <button className="flex items-center gap-2 text-gray-500 hover:text-socialBlue transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                    </svg>
                    <span className="hidden md:block">Check in</span>
                </button>

                {/* Mood Button */}
                <button className="flex items-center gap-2 text-gray-500 hover:text-socialBlue transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                    </svg>
                    <span className="hidden md:block">Mood</span>
                </button>

                {/* Share Button */}
                <div className="ml-auto">
                    <button className="bg-socialBlue text-white px-6 py-2 rounded-lg hover:bg-socialBlue-dark transition">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPost;