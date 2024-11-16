import SidebarContextProvider from "@/context/sidebarContext/useSidebarContext";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";

const ItemSidebar = [
  {
    to: "/",
    text: "Home",
    icon: "https://cdn-icons-png.flaticon.com/128/1946/1946436.png",
  },
  {
    to: "/dashboard",
    text: "Dashboard",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828791.png",
  },
];

const Navbar = () => {
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
                // active={location.pathname === item.to}
              />
            ))}
          </Sidebar>
        </main>
      </SidebarContextProvider>
    </>
  );
};

export default Navbar;
