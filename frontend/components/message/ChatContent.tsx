"use client";

import {
  getCurrentUser,
  saveUserToLocalStorage,
} from "@/app/message/fakeLogin";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import ChatComponent from "./Message";

interface ChatContentProps {
  chat: {
    _id: string;
    participants: { userId: string }[];
    name: string;
    type: string;
    createdAt: string;
    thumbnail: string;
    isOnline?: boolean;
  };
}
interface User {
  id: string;
  name: string;
  avatar: string;
}

export default function ChatContent({ chat }: ChatContentProps) {
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State to manage popup visibility
  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser()); // Get user from localStorage
  const [message, setMessage] = useState(""); // State to hold the input value
  const [receiverId, setReceiverId] = useState(""); // Receiver's address
  const [amount, setAmount] = useState<number>(0); // Payment amount
  const [socketClient, setSocketClient] = useState<Socket | null>(null); // Initialize with `null` instead of undefined

  const [messages, setMessages] = useState<any[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [convertedPrice, setConvertedPrice] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);

  const handleIconClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handlePayment = async () => {
    if (!currentUser) {
      setShowLoginPopup(true); // Show the login popup
      return;
    }
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    // Create a new message object
    const newMessage = {
      conversationId: chat._id,
      senderId: currentUser.id,
      messageType: "transaction",
      text: message,
      transaction: {
        assetType: "SOL",
        amount: amount,
        transactionHash: "abcdefhsda",
        receiverAddress: receiverId,
      },
    };
    try {
      // API Call
      const response = await fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      console.log(response);
      console.log(newMessage);

      if (!response.ok) {
        const errorDetails = await response.json(); // Get error details
        throw new Error(
          `Failed to send message: ${errorDetails.message || "Unknown error"}`,
        );
      }

      // Update the local state with the new message
      socketClient?.emit("newMessage", {
        text: newMessage,
        participants: chat.participants,
      });

      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message." + error);
    }
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:8088", {
      query: { userId: currentUser?.id },
    });

    setSocketClient(newSocket);

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
    });

    return () => {
      console.log("Socket disconnected:", newSocket.id);
      newSocket.disconnect();
    };
  }, [currentUser?.id]); // Giảm thiểu render không cần thiết

  const fetchConversionRate = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT",
      );
      const data = await response.json();

      const price = parseFloat(data.price);
      setConvertedPrice(price);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
      setLoading(false);
    }
  };

  const fetchChats = async () => {
    try {
      const response = await fetch(
        `http://localhost:8088/messages/history/${chat._id}`,
      ); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch chats");
      }
      const data = await response.json();
      setMessages(data); // Assuming the response contains the chat array
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };
  useEffect(() => {
    fetchChats();
    fetchConversionRate();
    if (socketClient) {
      const handleMessage = (message: any) => {
        console.log("New message received:", message);
        setMessages((prevMessages) => [...prevMessages, message.text]);
      };

      // Đảm bảo xóa listener trước khi đăng ký mới
      socketClient.on("message", handleMessage);
    }

    return () => {
      if (socketClient) {
        socketClient.off("message"); // Xóa tất cả listener khi component unmount
      }
    };
  }, [chat._id]);

  const receivers = chat.participants.filter(
    (participant) => participant?.userId !== currentUser?.id,
  );
  const handleLogin = (user: User) => {
    saveUserToLocalStorage(user);
    setCurrentUser(user); // Update current user
    setShowLoginPopup(false); // Close the popup
  };

  const handleSendMessage = async () => {
    if (!currentUser) {
      setShowLoginPopup(true); // Show the login popup
      return;
    }
    if (!message.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    // Create a new message object
    const newMessage = {
      conversationId: chat._id,
      senderId: currentUser.id,
      messageType: "text",
      text: message,
      isRead: false,
      readBy: [],
      transaction: undefined,
    };
    try {
      // API Call
      const response = await fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      const savedMessage = await response.json();

      // Update the local state with the new message
      socketClient?.emit("newMessage", {
        text: newMessage,
        participants: chat.participants,
      });

      // Clear the input field
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send the message.");
    }
  };

  useEffect(() => {
    if (socketClient) {
      const handleMessage = (message: any) => {
        // console.log("New message received:", message);
        // setMessages((prevMessages) => [...prevMessages, message.text]);
        fetchChats();
      };

      // Đảm bảo xóa listener trước khi đăng ký mới
      socketClient.on("message", handleMessage);
    }

    return () => {
      if (socketClient) {
        socketClient.off("message"); // Xóa tất cả listener khi component unmount
      }
    };
  }, [socketClient]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value); // Update state with input value
  };

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Header Section */}
      <div className="flex items-center border-b border-gray-300 bg-white p-3">
        <div className="relative">
          <img
            src="https://placehold.co/40x40"
            alt="Profile picture of Brooklyn Simmons"
            className="h-10 w-10 rounded-full"
          />
          {chat.isOnline && (
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
          )}
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">
            {chat.type === "group" ? chat.name : receivers[0]?.userId}
          </h2>
          <p className="text-sm text-gray-500">
            {chat.isOnline ? (
              chat.type === "group" ? (
                <>
                  {/* Show the first 3 receiver names */}
                  {receivers.slice(0, 3).map((receiver, index) => (
                    <span key={index}>
                      {receiver.userId}
                      {index < receivers.slice(0, 3).length - 1 && ", "}
                    </span>
                  ))}

                  {/* If there are more than 3 receivers, show '+ X more' */}
                  {receivers.length > 3 && (
                    <span>... +{receivers.length - 3}</span>
                  )}
                </>
              ) : (
                "Online"
              )
            ) : (
              "Offline"
            )}
          </p>
        </div>
        {/* <span className="ml-auto text-sm text-orange-500 hover:cursor-pointer">
          Visit 2
        </span>
        <i className="fas fa-ellipsis-h ml-4 text-gray-500 hover:cursor-pointer"></i> */}
      </div>

      {/* Chat Messages Section */}
      <ChatComponent
        currentUser={currentUser}
        messages={messages}
        receivers={receivers}
      />
      {/* <div className="flex-grow overflow-y-auto p-4">
        {messages?.map((message, index) => {
          const isSentByUser = message.senderId === currentUser?.id;

          return (
            <div
              key={index}
              className={`mb-4 flex items-start ${isSentByUser ? "justify-end" : ""}`}
            >
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
      </div> */}

      {/* Input Section */}
      <div className="flex items-center gap-2 p-4">
        <div className="flex w-full items-center rounded-full border border-gray-300 p-3">
          <input
            type="text"
            placeholder="Type a Message"
            value={message}
            onChange={handleInputChange}
            className="flex-grow border-r border-gray-400 px-4 text-gray-600 outline-none"
          />
          <FontAwesomeIcon
            icon={faCreditCard}
            onClick={handleIconClick}
            className="mx-2 h-6 text-gray-500 hover:cursor-pointer hover:text-gray-400"
          />
        </div>
        <div
          onClick={handleSendMessage}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-orange-500" />
        </div>
      </div>

      {/* Fake Login */}
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-80 rounded bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Login</h2>
            <input
              type="text"
              placeholder="Enter your name"
              className="mb-2 w-full rounded border p-2"
              id="userName"
            />
            <input
              type="text"
              placeholder="Enter your id"
              className="mb-2 w-full rounded border p-2"
              id="userId"
            />
            <button
              className="mt-2 w-full rounded bg-blue-500 p-2 text-white"
              onClick={() => {
                const name = (
                  document.getElementById("userName") as HTMLInputElement
                ).value;
                const id = (
                  document.getElementById("userId") as HTMLInputElement
                ).value;

                if (name) {
                  handleLogin({
                    id, // Example ID, replace with your logic
                    name,
                    avatar: "",
                  });
                } else {
                  alert("Name is required!");
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Popup Payment */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Confirm NFT Payment
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              You're about to make a payment for this NFT. Please confirm your
              transaction.
            </p>

            {/* Cryptocurrency Type */}
            <div className="flex items-center rounded-lg bg-gradient-to-r from-purple-500 via-teal-400 to-blue-500 p-4 shadow-md">
              <div className="flex-shrink-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtKrt373alFbi2z2nB_kicPJLVA68FzTE5A&s"
                  alt="Solana Logo"
                  className="h-12 w-12 rounded-full bg-white"
                />
              </div>
              <div className="ml-4 flex-grow">
                <div className="text-lg font-semibold text-white">Solana</div>
                <div className="text-sm text-gray-200">Solana payment.</div>
              </div>

              <div className="text-right">
                <div className="text-lg font-semibold text-white">{`$${convertedPrice?.toFixed(2)}`}</div>
                <div className="text-sm text-gray-200">From Binance</div>
              </div>
            </div>

            {/* Receiver's Address */}
            <div className="mb-4 mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Receiver's Address
              </label>
              <select
                value={receiverId}
                onChange={(e) => setReceiverId(e.target.value)}
                className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  -- Select a User --
                </option>
                {receivers.map((user) => (
                  <option key={user.userId} value={user.userId}>
                    {user.userId}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter Amount
              </label>
              <input
                type="number"
                value={amount}
                min={0}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                placeholder="Enter amount (e.g., 1.23)"
                className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                value={message}
                min={0}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Description (...)"
                className="mt-1 w-full rounded border px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                className="rounded bg-black px-4 py-2 text-sm font-semibold text-white"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
              <button
                className="rounded bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
