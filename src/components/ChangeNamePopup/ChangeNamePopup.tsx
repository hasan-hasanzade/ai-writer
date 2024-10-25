import React from 'react';
import styles from '../../app/profile/profile.module.scss';

interface NamePopupProps {
  onClose: () => void;
}

const ChangeNamePopup: React.FC<NamePopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popup} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2>Change Name</h2>
        <input className={styles.input} type="name" placeholder="Name" />
        <div className={styles.btns}>
          <button onClick={onClose} className={styles.closeBtn}>Close</button>
          <button onClick={onClose} className={styles.saveBtn}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeNamePopup;