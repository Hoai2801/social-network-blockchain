import Image from "next/image";
import Link from "next/link";
import Ad from "./ad";

const menuItems = [
  { href: "/", src: "/posts.png", label: "My Posts" },
  { href: "/", src: "/activity.png", label: "Activity" },
  { href: "/marketplace", src: "/market.png", label: "Marketplace" },
  { href: "/", src: "/events.png", label: "Events" },
  { href: "/", src: "/albums.png", label: "Albums" },
  { href: "/", src: "/videos.png", label: "Videos" },
  { href: "/", src: "/news.png", label: "News" },
  { href: "/", src: "/courses.png", label: "Courses" },
  { href: "/", src: "/lists.png", label: "Lists" },
  { href: "/", src: "/settings.png", label: "Settings" },
];

const MenuItem = ({
  href,
  src,
  label,
}: {
  href: string;
  src: string;
  label: string;
}) => (
  <>
    <Link
      href={href}
      className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
    >
      <Image src={src} alt={label} width={20} height={20} />
      <span>{label}</span>
    </Link>
    <hr className="border-t-1 w-36 self-center border-gray-50" />
  </>
);

const LeftMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 rounded-lg bg-white p-4 text-sm text-gray-500 shadow-md">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
