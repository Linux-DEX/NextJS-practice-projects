import Navbar from "@/components/navSidebar/navbar";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-gray-800">
        <Navbar />
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
