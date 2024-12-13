import { MapPin, Smile, UserIcon } from "lucide-react";

const AddPost = () => {
  return (
    <div className="space-y-4 rounded-lg bg-white p-4 shadow-md">
      {/* User input section */}
      <div className="flex items-center gap-3">
        {/* Profile Picture */}
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <img
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Textarea */}
        <textarea
          className="focus:ring-socialBlue h-14 grow rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2"
          placeholder="What's on your mind, Dawid?"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="mt-2 flex items-center gap-5">
        {/* People Button */}
        <button className="hover:text-socialBlue flex items-center gap-2 text-gray-500 transition">
          <UserIcon strokeWidth={1.5} />
          <span className="hidden md:block">People</span>
        </button>

        {/* Check-in Button */}
        <button className="hover:text-socialBlue flex items-center gap-2 text-gray-500 transition">
          <MapPin strokeWidth={1.5} />
          <span className="hidden md:block">Check in</span>
        </button>

        {/* Mood Button */}
        <button className="hover:text-socialBlue flex items-center gap-2 text-gray-500 transition">
          <Smile strokeWidth={1.5} />
          <span className="hidden md:block">Mood</span>
        </button>

        {/* Share Button */}
        <div className="ml-auto">
          <button className="bg-socialBlue hover:bg-socialBlue-dark rounded-lg px-6 py-2 text-white transition">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
