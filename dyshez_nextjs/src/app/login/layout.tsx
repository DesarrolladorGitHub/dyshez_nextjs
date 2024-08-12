import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

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
        <div className="bg-white p-5 md:p-20 flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/3 md:items-start items-center">
            <Image
              src={"/images/logo.png"}
              alt="Dyshez"
              width={194}
              height={50}
            />
            <label className="text-primary text-lg font-bold leading-5 mt-5">
              ¡Bienvenido de vuelta!
            </label>
          </div>
          <div className="w-full md:w-2/3">{children}</div>
        </div>
      </body>
    </html>
  );
}