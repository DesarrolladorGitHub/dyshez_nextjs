import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dyshez App",
  description: "Aplicacion nextjs Dyshez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-28 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 flex justify-center overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Menu />
          </div>
        </aside>

        <div className="p-4 sm:ml-28">
          <div className="p-4 rounded-lg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
