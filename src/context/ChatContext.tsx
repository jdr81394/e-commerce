"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("chatIsOpen");
    if (savedState !== null) {
      setIsOpen(savedState === "true");
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever state changes (only after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("chatIsOpen", String(isOpen));
    }
  }, [isOpen, isLoaded]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, toggleChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatBox() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatBox must be used within a ChatProvider");
  }
  return context;
}
