"use client";

import AddPost from "@/components/feed/AddPost";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/page/left-menu/left-menu";
import ProfileCard from "@/components/page/left-menu/profile-card";
import Modal from "@/components/ui/modal";
import useToggle from "@/hooks/use-state-toggle";

export default function Home() {
  const modal = useToggle();
  return (
    <>
      <div className="container flex flex-col">
        <div className="flex min-h-screen justify-center gap-6 pt-6">
          <div className="hidden w-[20%] xl:block">
            <LeftMenu />
          </div>
          <div className="w-full max-w-3xl lg:w-[70%] xl:w-[60%]">
            <div className="flex flex-col gap-6">
              <AddPost />
              <Feed />
            </div>
          </div>
          <div className="w-[20%] lg:block">
            <ProfileCard />
          </div>
        </div>
      </div>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <div>Modal Content</div>
      </Modal>
    </>
  );
}
