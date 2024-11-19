"use client";

import SidebarContextProvider from "@/context/SidebarProvider";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import { usePathname } from "next/navigation";

const ItemSidebar = [
  {
    to: "/dashboard",
    text: "Dashboard",
    // icon: "https://cdn-icons-png.flaticon.com/128/1828/1828791.png",
    icon: "/icons/dashboard.png",
  },
  {
    to: "/todo",
    text: "Todo",
    // icon: "https://cdn-icons-png.flaticon.com/128/1946/1946436.png",
    icon: "/icons/todo.png",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <SidebarContextProvider>
        <main className="App">
          <Sidebar>
            {ItemSidebar.map((item, index) => (
              <SidebarItem
                key={index}
                to={item.to}
                text={item.text}
                icon={item.icon}
                active={pathname === item.to}
              />
            ))}
          </Sidebar>
        </main>
      </SidebarContextProvider>
    </>
  );
};

export default Navbar;
