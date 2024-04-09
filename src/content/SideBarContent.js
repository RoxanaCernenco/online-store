import React, { useState, createContext } from "react";

export const SideBarContent = createContext();

const SideBarProvider = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContent.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContent.Provider>
  );
};

export default SideBarProvider;
