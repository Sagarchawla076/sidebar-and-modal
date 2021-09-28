import React from "react";
import { FaBars } from "react-icons/fa";
import Context from "./Context";
const Home = () => {
  return (
    <Context.Consumer>
      {({ openModal, openSidebar }) => {
        return (
          <main>
            <button className={`sidebar-toggle`} onClick={openSidebar}>
              <FaBars />
            </button>
            <button
              className="btn"
              onClick={() => {
                openModal();
              }}
            >
              show modal
            </button>
          </main>
        );
      }}
    </Context.Consumer>
  );
};
export default Home;
