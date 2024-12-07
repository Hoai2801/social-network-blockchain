"use client";

import LeftMenu from "@/components/page/leftMenu/LeftMenu";
import Modal from "@/components/ui/modal";
import useToggle from "@/hooks/use-state-toggle";

export default function Home() {
  const modal = useToggle();
  return (
    <>
      <div className="container flex flex-col">
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
            <button onClick={modal.open}>click me</button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <div>Modal Content</div>
      </Modal>
    </>
  );
}
