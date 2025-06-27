import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "Productify",
  description: "Temukan produk terbaik di Productify!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
