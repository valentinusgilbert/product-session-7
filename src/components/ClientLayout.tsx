"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "sonner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <>
      <Toaster />
      <Header search={search} setSearch={setSearch} />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {isHome && React.isValidElement(children)
            ? React.cloneElement(children as React.ReactElement, { search, setSearch })
            : children}
        </main>
        <Footer />
      </div>
    </>
  );
} 