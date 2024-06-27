import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Block Explorer",
  description: "Data from Etherscan using Moralis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="space-y-4 bg-gray-100 flex flex-col min-h-screen w-screen overflow-x-hidden pb-8">
          {/* Nav */}
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
