import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { CartProvider } from "@/context/CartContext";
import { ChatProvider } from "@/context/ChatContext";
import ChatBox from "@/components/ChatBox";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashion",
  description: "Ashion - Next.js E-commerce Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <ChatProvider>
            {children}
            <ChatBox />
            <Toaster position="top-right" />
          </ChatProvider>
        </CartProvider>
      </body>
    </html>
  );
}
