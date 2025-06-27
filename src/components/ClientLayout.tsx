"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "sonner";
import { SearchProvider } from "./SearchContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <SearchProvider>
      <Toaster />
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </SearchProvider>
  );
} 