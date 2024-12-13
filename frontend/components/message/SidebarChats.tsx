"use client";

import formatTime from "@/hooks/use-format-time";
import { create } from "domain";
import React, { useEffect, useState } from "react";

// Type definition for chat item props
interface ChatItemProps {
  id: number;
  participants: [];
  type: string;
  thumbnail: string;
  name: string;
  lastMessage: {
    text: string;
    sentAt: string;
    user: {
      id: string;
      name: string;
      avatar: string;
    };
    isRead: boolean;
  };
  createdAt: string;
  isOnline?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

// Header Component
const SidebarHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <img
        src="https://placehold.co/40x40"
        alt="User profile"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex space-x-4">
        <button className="text-orange-500">
          <i className="fas fa-plus-circle"></i>
        </button>
        <button className="text-orange-500">
          <i className="fas fa-cog"></i>
        </button>
      </div>
    </div>
  );
};

// Search Component
const SearchBar: React.FC = () => {
  return (
    <div className="relative mb-4 px-2">
      <input
        type="text"
        placeholder="Search here...."
        className="w-full rounded-full border bg-gray-50 p-2 pl-10 focus:outline-none"
      />
      <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
    </div>
  );
};

// Chat Item Component
const ChatItem: React.FC<ChatItemProps> = ({
  name,
  participants,
  lastMessage,
  isOnline,
  type,
  thumbnail,
  isActive = false,
  onClick,
}) => {
  const user = {
    id: "999",
    name: "Minh Dat",
    avatar: "",
  };

  const receiver = participants.find(
    (participant) => participant.userId !== user.id,
  );

  return (
    <div
      onClick={onClick}
      className={`flex h-16 cursor-pointer items-center justify-between px-2 ${
        isActive ? "bg-gray-100" : "hover:bg-orange-50"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={
              type == "group"
                ? thumbnail
                : "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034029.jpg"
            }
            alt={receiver?.userId || name}
            className="h-10 w-10 rounded-full"
          />
          {isOnline && (
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
          )}
        </div>
        <div>
          <h2
            className={`text-gray-800 ${lastMessage?.isRead ? "font-medium" : "font-bold"}`}
          >
            {type == "group" ? name : receiver?.userId}
          </h2>
          <p
            className={`line-clamp-1 max-w-48 text-xs ${lastMessage?.isRead ? "text-red-500" : "font-medium text-gray-800"}`}
          >
            {lastMessage?.text}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm text-gray-500">
          {formatTime(lastMessage.sentAt)}
        </span>
      </div>
    </div>
  );
};

// Main Sidebar Component
interface SidebarChatsProps {
  activeChat: any | null;
  setActiveChat: (chat: any) => void;
  chats: any[]; // Pass the chats data as a prop
}
const SidebarChats: React.FC<SidebarChatsProps> = ({
  activeChat,
  setActiveChat,
  chats,
}) => {
  return (
    <div className="h-screen max-w-lg overflow-hidden border-r bg-white">
      <SidebarHeader />
      <div className="">
        <div className="mb-4 flex items-center justify-between px-4 pt-2">
          <h1 className="text-xl font-semibold text-orange-500">Messages</h1>
          <div className="flex space-x-4">
            <button className="text-gray-500">
              <i className="fas fa-pen"></i>
            </button>
            <button className="text-gray-500">
              <i className="fas fa-star"></i>
            </button>
          </div>
        </div>
        <SearchBar />
        <div className="">
          {chats.map((chat) => (
            <ChatItem
              key={chat._id}
              {...chat}
              isActive={chat._id === activeChat?._id}
              onClick={() => setActiveChat(chat)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarChats;
