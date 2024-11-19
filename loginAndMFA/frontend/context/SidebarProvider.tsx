"use client";

import React, { ReactNode, useState, createContext, useContext } from "react";

interface SidebarContextType {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SidebarContextProviderProps {
  children: ReactNode;
}

const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({
  children,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export default SidebarContextProvider;
