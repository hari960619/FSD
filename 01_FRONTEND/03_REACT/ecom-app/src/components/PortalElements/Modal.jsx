import React from "react";
import ReactDOM from "react-dom";

function Modal({ displayModal, closeModalFun }) {
  function closeModalFunBtn() {
    closeModalFun(false);
  }

  return ReactDOM.createPortal(
    <>
      <div className={`alertBlock ${displayModal ? "" : "hidden"}`}>
        <h2>This is an Alert!</h2>
        <p>
          This is a very simple example of how a custom alert window can be
          created and displayed dynamically using JavaScript.
        </p>
        <button onClick={closeModalFunBtn}>OK</button>
      </div>
      <div className={`overlay ${displayModal ? "" : "hidden"}`}></div>
    </>,

    document.getElementById("root-portal")
  );
}

export default Modal;
