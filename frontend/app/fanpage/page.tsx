import React from 'react';

const Fanpage = () => {
    return (
        <div className="flex text-black">
            <aside className="w-1/4 bg-white p-4 h-screen shadow">
                <ul>
                    <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">About Group</li>
                    <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Discussions</li>
                    <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Members</li>
                    <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">Events</li>
                </ul>
            </aside>

            <main className="flex-1 p-4">
                <div className="bg-white p-4 rounded shadow mb-4">
                    <h1 className="text-2xl font-bold mb-2">Welcome to the Group!</h1>
                    <p>Engage with like-minded individuals and stay updated on group activities.</p>
                </div>

                <div className="bg-white p-4 rounded shadow mb-4">
                    <h2 className="font-bold">Recent Discussions</h2>
                    <p>Topic 1: What's your opinion on the latest update?</p>
                    <p>Topic 2: Upcoming event planning ideas.</p>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold">Pinned Post</h2>
                    <p>Welcome new members! Please introduce yourselves in the comments.</p>
                </div>
            </main>

            <aside className="w-1/4 bg-white p-4 h-screen shadow hidden lg:block">
                <h2 className="font-bold mb-4">Group Members</h2>
                <ul>
                    <li className="py-2">Member 1</li>
                    <li className="py-2">Member 2</li>
                    <li className="py-2">Member 3</li>
                </ul>
            </aside>
        </div>
    );
};

export default Fanpage;
