// import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose, MdPeople } from "react-icons/md";
// import { AiFillFolderOpen } from "react-icons/ai";
// import { SiGooglecalendar } from "react-icons/si";
// import { IoHome } from "react-icons/io5";
// import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
// import social from "./Data";
// const Sidebar = () => {
//   return (
//     <>
//       <GiHamburgerMenu className="btn" />
//       <div className="sidebar">
//         <div className="sidebar__header">
//           <div className="sidebar__header--logo">
//             <img src="./static/logo.svg" alt="logo" className="logo" />
//           </div>
//           <MdClose />
//         </div>
//         <div className="sidebar__links">
//           <ul className="links">
//             <li className="link">
//               <IoHome />
//               <span>Home</span>
//             </li>
//             <li className="link">
//               <MdPeople />
//               <span>Team</span>
//             </li>
//             <li className="link">
//               <AiFillFolderOpen />
//               <span>Projects</span>
//             </li>
//             <li className="link">
//               <SiGooglecalendar />
//               <span>Calender</span>
//             </li>
//             <li className="link">
//               <BsReverseLayoutTextWindowReverse />
//               <span>Documents</span>
//             </li>
//           </ul>
//         </div>
//         <div className="sidebar__social">
//           <ul className="sidebar__social--links">
//             {social.map((link) => {
//               const { id, url, icon } = link;
//               return <li className="link">{icon}</li>;
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Sidebar;

import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./Data";
import Context from "./Context";
const Sidebar = () => {
  return (
    <Context.Consumer>
      {({ showSidebar, closeSidebar }) => {
        console.log(showSidebar);
        return (
          <aside className={`sidebar  ${showSidebar ? "show-sidebar" : ""}`}>
            <div className="sidebar-header">
              <img src="./static/logo.svg" alt="" className="coding addict" />
              <button className="close-btn">
                <FaTimes onClick={closeSidebar} />
              </button>
            </div>
            <ul className="links">
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li key={id}>
                    <a href={url}>
                      {icon}
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="social-icons">
              {social.map((link) => {
                const { id, url, icon } = link;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </aside>
        );
      }}
    </Context.Consumer>
  );
};
export default Sidebar;
