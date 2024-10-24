import React from 'react';
import styles from '../../app/profile/profile.module.scss';

interface EmailPopupProps {
  onClose: () => void;
}

const ChangeEmailPopup: React.FC<EmailPopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popup} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2>Change Email</h2>
        <input className={styles.input} type="email" placeholder="Enter new email" />
        <div className={styles.btns}>
          <button onClick={onClose} className={styles.closeBtn}>Close</button>
          <button onClick={onClose} className={styles.saveBtn}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmailPopup;