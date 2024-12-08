const Fanpage = () => {
  return (
    <div className="container flex text-black">
      <aside className="h-screen w-1/4 bg-white p-4 shadow">
        <ul>
          <li className="cursor-pointer rounded px-4 py-2 hover:bg-gray-200">
            About Group
          </li>
          <li className="cursor-pointer rounded px-4 py-2 hover:bg-gray-200">
            Discussions
          </li>
          <li className="cursor-pointer rounded px-4 py-2 hover:bg-gray-200">
            Members
          </li>
          <li className="cursor-pointer rounded px-4 py-2 hover:bg-gray-200">
            Events
          </li>
        </ul>
      </aside>

      <main className="flex-1 px-4">
        <div className="mb-4 rounded bg-white p-4 shadow">
          <h1 className="mb-2 text-2xl font-bold">Welcome to the Group!</h1>
          <p>
            Engage with like-minded individuals and stay updated on group
            activities.
          </p>
        </div>

        <div className="mb-4 rounded bg-white p-4 shadow">
          <h2 className="font-bold">Recent Discussions</h2>
          <p>Topic 1: What's your opinion on the latest update?</p>
          <p>Topic 2: Upcoming event planning ideas.</p>
        </div>

        <div className="rounded bg-white p-4 shadow">
          <h2 className="font-bold">Pinned Post</h2>
          <p>
            Welcome new members! Please introduce yourselves in the comments.
          </p>
        </div>
      </main>

      <aside className="hidden h-screen w-1/4 bg-white p-4 shadow lg:block">
        <h2 className="mb-4 font-bold">Group Members</h2>
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
