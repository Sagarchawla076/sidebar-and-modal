import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "../styles/main.scss";
import { AppProvider } from "./Context";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <Home />
        <Sidebar />
        <Modal />
      </div>
    </AppProvider>
  );
};
export default App;
