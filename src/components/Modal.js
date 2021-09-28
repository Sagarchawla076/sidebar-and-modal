// import React, { useState, useRef } from "react";
// import { MdClose } from "react-icons/md";
// const Modal = () => {
//   const overLayRef = useRef();
//   const [showModal, setShowModal] = useState(false);
//   const handleClick = (e) => {
//     if (e.target.contains(overLayRef.current)) {
//       setShowModal(false);
//     }
//     return;
//   };
//   return (
//     <div className="modal">
//       <div className="modal__container">
//         <div className="modal__container--btn">
//           <button onClick={() => setShowModal(true)}>show modal</button>
//         </div>
//         <div
//           ref={overLayRef}
//           onClick={(e) => handleClick(e)}
//           className={`modal__container--overlay ${
//             showModal ? "show-modal" : ""
//           }`}
//         >
//           <div className="modal__container--content">
//             <div className="content"> Modal content</div>
//             <MdClose
//               className="modal-icon"
//               onClick={() => setShowModal(false)}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Modal;

import React from "react";
import { FaTimes } from "react-icons/fa";
import Context from "./Context";
const Modal = () => {
  return (
    <Context.Consumer>
      {({ showModal, closeModal }) => {
        return (
          <div className={`modal-overlay ${showModal ? "show-modal" : ""}`}>
            <div className="modal-container">
              <h3>modal Content</h3>
              <button className="close-btn">
                <FaTimes onClick={closeModal} />
              </button>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};
export default Modal;
