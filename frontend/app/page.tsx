"use client";

import LeftMenu from "@/components/page/leftMenu/LeftMenu";

export default function Home() {
  return (
    <div className="container flex flex-col">
      <div className="h-24 w-full bg-teal-500"></div>
      <div className="flex min-h-screen gap-6 pt-6">
        <div className="hidden w-[20%] xl:block">
          <LeftMenu type="home" />
        </div>
        <div className="w-full bg-red-500 lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            {/* <Stories /> */}
            {/* <AddPost /> */}
            {/* <Feed /> */}
          </div>
        </div>
        <div className="hidden w-[30%] bg-sky-500 lg:block">
          {/* <RightMenu /> */}
        </div>
      </div>
    </div>
  );
}
