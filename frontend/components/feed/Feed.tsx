import { Heart, LinkIcon, MessageSquare } from "lucide-react";
import Link from "next/link";

const Feed = () => {
  const feedData = [
    {
      id: 1,
      user: {
        name: "John Doe",
        profileLink: "/profile",
        profilePicture:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
      content: {
        type: "album",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cum cupiditate deleniti ducimus...",
        image:
          "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      timestamp: "2 hours ago",
      interactions: {
        likes: 72,
        comments: 11,
        shares: 4,
      },
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        profileLink: "/profile-jane",
        profilePicture:
          "https://images.unsplash.com/photo-1535720223091-98b362104f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      },
      content: {
        type: "photo",
        description: "Amazing sunset from yesterday!",
        image:
          "https://images.unsplash.com/photo-1528977695562-30afabf3e5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      timestamp: "5 hours ago",
      interactions: {
        likes: 150,
        comments: 24,
        shares: 10,
      },
    },
  ];

  return (
    <div className="mx-auto space-y-6">
      {feedData.map((post) => (
        <div key={post.id} className="space-y-4 rounded-lg bg-white p-4 shadow">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <Link href={post.user.profileLink}>
              <img
                src={post.user.profilePicture}
                alt={post.user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
            </Link>
            <div>
              <Link
                href={post.user.profileLink}
                className="font-semibold hover:underline"
              >
                {post.user.name}
              </Link>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <p className="text-gray-700">{post.content.description}</p>
            <img
              src={post.content.image}
              alt=""
              className="w-full rounded-md object-cover"
            />
          </div>

          {/* Interactions */}
          <div className="flex justify-between text-gray-500">
            <button className="flex items-center gap-2 hover:text-gray-700">
              <Heart strokeWidth={1.5} />
              {post.interactions.likes}
            </button>
            <button className="flex items-center gap-2 hover:text-gray-700">
              <MessageSquare strokeWidth={1.5} />
              {post.interactions.comments}
            </button>
            <button className="flex items-center gap-2 hover:text-gray-700">
              <LinkIcon strokeWidth={1.5} />
              {post.interactions.shares}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
