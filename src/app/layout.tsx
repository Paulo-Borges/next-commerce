import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";


export const metadata: Metadata = {
  title: "next E-commerce 13",
  description: "Generated by Dev Paulo Borges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
      <body className={clsx(inter.className, "bg-slate-700")}>
            <Navbar />
        <main className=" h-screen p-16">
        {children}
        </main>
        <nav className="fixed bottom-0 w-full flex items-center justify-center py-2 px-8 z-50 bg-slate-800 text-gray-200">
            <Footer />
        </nav>
        </body>
    </html>

    </ClerkProvider>
    
  );
}
