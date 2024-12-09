"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useCallback } from "react";
import ReactDOM from "react-dom";

interface sidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<sidebarProps> = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
        >
          <div
            className="container mt-[80px] flex h-full w-full justify-end"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative flex h-fit w-[250px] items-center justify-center rounded border bg-white shadow-lg"
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

Sidebar.displayName = "Sidebar";

export default dynamic(() => Promise.resolve(React.memo(Sidebar)), {
  ssr: false,
});
