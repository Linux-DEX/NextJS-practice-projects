'use client'

import React, { ReactNode, useState } from "react";
import SidebarContext from "./useContext";

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

export default SidebarContextProvider;
