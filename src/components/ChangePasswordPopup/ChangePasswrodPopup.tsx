import React from 'react';
import styles from '../../app/profile/profile.module.scss';

interface PasswordPopupProps {
  onClose: () => void;
}

const ChangePasswordPopup: React.FC<PasswordPopupProps> = ({ onClose }) => {
  return (
    <div className={styles.popup} onClick={onClose}>
    <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
      <h2>Change Password</h2>
      <div className={styles.inputs}>
        <input className={styles.input} type="password" placeholder="Enter new password" />
        <input className={styles.input} type="password" placeholder="Confirm new password" />
      </div>
      <div className={styles.btns}>
        <button onClick={onClose} className={styles.closeBtn}>Close</button>
        <button onClick={onClose} className={styles.saveBtn}>Submit</button>
      </div>
    </div>
  </div>
  );
};

export default ChangePasswordPopup;
