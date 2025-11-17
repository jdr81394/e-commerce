"use client";

import { useState, useRef, useEffect } from "react";
import { useChatBox } from "@/context/ChatContext";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatBox() {
  const { isOpen, setIsOpen } = useChatBox();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.map((msg: Message) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error("Failed to load chat messages:", error);
        // Set default welcome message if loading fails
        setMessages([
          {
            id: 1,
            text: "Hi! I'm your shopping assistant. I can help you find products, answer questions about our catalog, and provide recommendations. How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }
    } else {
      // Set default welcome message if no saved messages
      setMessages([
        {
          id: 1,
          text: "Hi! I'm your shopping assistant. I can help you find products, answer questions about our catalog, and provide recommendations. How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
    setIsLoaded(true);
  }, []);

  // Save messages to localStorage whenever they change (only after initial load)
  useEffect(() => {
    if (isLoaded && messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages, isLoaded]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      // Prepare conversation history for OpenAI
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));

      // Call OpenAI API through our backend
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.message,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const clearChat = () => {
    const welcomeMessage: Message = {
      id: 1,
      text: "Hi! I'm your shopping assistant. I can help you find products, answer questions about our catalog, and provide recommendations. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
    localStorage.setItem("chatMessages", JSON.stringify([welcomeMessage]));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="mb-4 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 animate-slideUp">
          {/* Header */}
          <div className="bg-gray-900 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <i className="fa fa-headset text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">Chat Support</h3>
                <p className="text-xs text-gray-300">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-white hover:text-gray-300 transition cursor-pointer"
                title="Clear chat history"
              >
                <i className="fa fa-trash text-sm"></i>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 transition cursor-pointer"
              >
                <i className="fa fa-times text-xl"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 bg-white border-t border-gray-200 rounded-b-lg"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              />
              <button
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition cursor-pointer"
              >
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 hover:bg-gray-800 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
      >
        {isOpen ? (
          <i className="fa fa-times text-xl"></i>
        ) : (
          <i className="fa fa-comment-dots text-xl"></i>
        )}
      </button>

      {/* Unread Badge (optional) */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          1
        </div>
      )}
    </div>
  );
}
