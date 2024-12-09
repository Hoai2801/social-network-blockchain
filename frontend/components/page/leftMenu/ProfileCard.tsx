// const user = {
//   id: "1",
//   cover: "/noCover.png",
//   avatar: "/noAvatar.png",
//   name: "John",
//   surname: "Doe",
//   username: "johndoe",
//   _count: {
//     followers: 123,
//   },
// };
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useWallet} from "@solana/wallet-adapter-react";

// const User = {
//   "id": "0a2c07fa-6f73-4b6a-b7cf-77370951cb3e",
//   "publicKey": "AsSZQMzXDr9htPimXijukJMSXGyBCPsGXXxM29RnBzGa",
//   "username": "unknown",
//   "images": null,
//   "email": "",
//   "createdAt": "2024-12-08T15:16:49.651008",
//   "updatedAt":
// }

const ProfileCard = () => {
  // const { userId } = auth();
  const [user, setUser] = useState(null);
  const publicKey = useWallet().publicKey;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          publicKey: publicKey,
          username: "",
          password: "",
        }),
      });
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [user])
  if (!user) return null;

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm shadow-md">
      <div className="relative h-20">
        <Image
          src={"/noCover.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={"/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="absolute -bottom-6 left-0 right-0 z-10 m-auto h-12 w-12 rounded-full object-cover ring-1 ring-white"
        />
      </div>
      <div className="flex h-20 flex-col items-center gap-2">
        <span className="font-semibold">
          {user?.username}
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
            12 Followers
          </span>
        </div>
        <Link href={`/profile`}>
          <button className="rounded-md bg-blue-500 p-2 text-xs text-white">
            My Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
