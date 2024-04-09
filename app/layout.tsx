import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "./components/provider";
import "@uploadthing/react/styles.css";

const inter = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Learnly - Making Learning Easier",
  description: "A Learning Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Toaster />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
