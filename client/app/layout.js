import "./globals.css";
import React from "react";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAFAFA]">
        <div className="flex">
          <Sidebar />
          <div className="flex-grow pl-64">
            <Header />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
