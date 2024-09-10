'use client'

import { useState, useEffect } from 'react';
import styles from './forgot.module.scss';
import CloseIcon from '@public/close.svg'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Временно убираем проверку для отладки
  // if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`${styles.popupOverlay} ${isClosing ? styles.popupOverlayClosing : ''}`} 
      onClick={handleClose}
    >
      <div 
        className={`${styles.popupContent} ${isClosing ? styles.popupContentClosing : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}><CloseIcon /></button>
        <h2 className={styles.title}>Forgot your password?</h2>
        <div className={styles.subtitle}>Enter your email address to reset your password. You may need to check your spam folder or unblock no-reply@qvalo.com.</div>
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Email'
        />
        <button className={styles.btn}>Submit</button>
      </div>
    </div>
  );
};

export default ForgotPopup;
