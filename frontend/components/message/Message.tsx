import React, { useEffect, useRef } from "react";
import TransactionMessage from "./TransactionMessage ";

// Define the types for the props
interface Message {
  senderId: string;
  messageType: string;
  text: string;
  sentAt?: string;
  transaction?: any;
}

interface ChatProps {
  messages: Message[];
  currentUser: any;
  receivers: { userId: string }[];
}

const Message: React.FC<ChatProps> = ({ messages, currentUser, receivers }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to the end of the messages container

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Triggered every time messages change

  return (
    <div className="flex-grow overflow-y-auto p-4">
      {/* Mapping through the messages */}
      {messages?.map((message, index) => {
        const isSentByUser = message.senderId === currentUser?.id;

        return (
          <div
            key={index}
            className={`mb-4 flex items-start ${isSentByUser ? "justify-end" : ""}`}
          >
            {/* If message is sent by user */}
            {isSentByUser ? (
              <>
                <div className="ml-auto">
                  {message?.messageType === "transaction" ? (
                    <TransactionMessage
                      message={message}
                      receiverName={
                        isSentByUser
                          ? receivers?.[0]?.userId
                          : currentUser?.name
                      }
                    />
                  ) : (
                    <div className="rounded-lg bg-orange-400 p-3 text-white">
                      <p className="max-w-96 text-sm">{message?.text}</p>
                    </div>
                  )}

                  <p className="mt-1 text-right text-xs text-gray-500">
                    {message?.sentAt
                      ? new Date(message.sentAt).toLocaleTimeString()
                      : "N/A"}
                  </p>
                </div>
                <img
                  src={currentUser?.avatar || "https://placehold.co/40x40"}
                  alt={`Profile picture of ${currentUser?.name}`}
                  className="ml-3 h-10 w-10 rounded-full"
                />
              </>
            ) : (
              /* If message is received */
              <>
                <img
                  src={"https://placehold.co/40x40"}
                  alt={`Profile picture of ${receivers[0]?.userId}`}
                  className="mr-3 h-10 w-10 rounded-full"
                />
                <div>
                  {message?.messageType === "transaction" ? (
                    <TransactionMessage
                      message={message}
                      receiverName={
                        isSentByUser
                          ? receivers?.[0]?.userId
                          : currentUser?.name
                      }
                    />
                  ) : (
                    <div className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm">{message?.text}</p>
                    </div>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {message?.sentAt
                      ? new Date(message.sentAt).toLocaleTimeString()
                      : "N/A"}
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}

      {/* The div at the bottom of the messages container to scroll into view */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Message;
