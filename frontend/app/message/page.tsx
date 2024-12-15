"use client";
import ChatContent from "@/components/message/ChatContent";
import SidebarChats from "@/components/message/SidebarChats";
import { useState, useEffect } from "react";

export default function Message() {
  const [activeChat, setActiveChat] = useState<any | null>(null);
  const [chats, setChats] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchChats = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:8088/conversations/user/999",
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch chats");
        }
        const data = await response.json();
        setChats(data); // Assuming the response contains the chat array
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  console.log(chats);

  return (
    <div className="flex">
      <div className="w-[500px]">
        {loading ? (
          <div className="flex h-full items-center justify-center text-gray-400">
            Loading chats...
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <SidebarChats
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            chats={chats}
          />
        )}
      </div>
      <div className="w-full">
        {activeChat ? (
          <ChatContent chat={activeChat} />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
