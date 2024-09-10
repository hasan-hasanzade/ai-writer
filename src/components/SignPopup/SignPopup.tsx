import React from 'react';
import styles from './signpop.module.scss';
import CloseIcon from '@public/close.svg'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}><CloseIcon /></button>
        <h2 className={styles.title}>Sign up for free</h2>
        <input 
              className={styles.input} 
              type="text" 
              placeholder='Email'
        />
        <div className={styles.userInfo}>
        <input 
              className={styles.input} 
              type="text" 
              placeholder='First Name'
        />
        <input 
              className={styles.input} 
              type="text" 
              placeholder='Last Name'
        />
        </div>
        <input 
              className={styles.input} 
              type="text" 
              placeholder='Password'
        />
        <button className={styles.btn}>Sign up</button>
      </div>
    </div>
  );
};

export default SignPopup;
