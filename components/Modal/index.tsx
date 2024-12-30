"use  client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when modal is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  if (!modalRoot || !isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
