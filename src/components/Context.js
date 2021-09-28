import React, { useState, useContext } from "react";

const Context = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <Context.Provider
      value={{
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        showModal,
        showSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
