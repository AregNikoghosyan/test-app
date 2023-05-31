import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style.scss";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return ReactDOM.createPortal(
    isOpen && (
      <div className="P-modal">
        <div ref={modalRef}>
          <div>{children}</div>
        </div>
      </div>
    ),
    document.getElementById("modal")
  );
};

export default Modal;
