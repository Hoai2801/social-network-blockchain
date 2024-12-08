const user = {
  id: "1",
  cover: "/noCover.png",
  avatar: "/noAvatar.png",
  name: "John",
  surname: "Doe",
  username: "johndoe",
  _count: {
    followers: 123,
  },
};
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  // const { userId } = auth();

  if (!user) return null;

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm shadow-md">
      <div className="relative h-20">
        <Image
          src={user.cover || "/noCover.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="absolute -bottom-6 left-0 right-0 z-10 m-auto h-12 w-12 rounded-full object-cover ring-1 ring-white"
        />
      </div>
      <div className="flex h-20 flex-col items-center gap-2">
        <span className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">
            {user._count.followers} Followers
          </span>
        </div>
        <Link href={`/profile/${user.username}`}>
          <button className="rounded-md bg-blue-500 p-2 text-xs text-white">
            My Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
