import React from "react";
import styles from "./SupplementModal.module.css";

const SupplementModal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default SupplementModal;
