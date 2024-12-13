"use client";

import AddPost from "@/components/feed/add-post";
import Feed from "@/components/feed/feed";
import LeftMenu from "@/components/feed/left-menu";
import ProfileCard from "@/components/feed/profile-card";
import Modal from "@/components/ui/modal";
import useToggle from "@/hooks/use-state-toggle";

export default function Home() {
  const modal = useToggle();
  return (
    <>
      <div className="container flex flex-col">
        <div className="flex min-h-screen justify-center gap-6 pt-6">
          <div className="w-[20%]">
            <LeftMenu />
          </div>
          <div className="w-[60%] max-w-3xl">
            <div className="flex flex-col gap-6">
              <AddPost />
              <Feed />
            </div>
          </div>
          <div className="w-[20%]">
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
