'use client'

import React, { useState, useEffect } from 'react';
import styles from './loginpop.module.scss';
import CloseIcon from '@public/close.svg';
import ForgotPopup from '../ForgotPopup/ForgotPopup';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showForgotPopup, setShowForgotPopup] = useState(false);

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

  const handleForgotPassword = () => {
    setShowForgotPopup(true);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {!showForgotPopup && isOpen && (
        <div 
          className={`${styles.popupOverlay} ${isClosing ? styles.popupOverlayClosing : ''}`} 
          onClick={handleClose}
        >
          <div 
            className={`${styles.popupContent} ${isClosing ? styles.popupContentClosing : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleClose}><CloseIcon /></button>
            <h2 className={styles.title}>Welcome back</h2>
            <div className={styles.subtitle}>Log in using test@gmail.com</div>
            <input 
              className={styles.input} 
              type="password" 
              placeholder='Password'
            />
            <button className={styles.forgot} onClick={handleForgotPassword}>Forgot your password?</button>
            <button className={styles.btn}>Log in</button>
          </div>
        </div>
      )}

      {/* ForgotPopup shows when showForgotPopup is true */}
      {showForgotPopup && <ForgotPopup isOpen={showForgotPopup} onClose={() => setShowForgotPopup(false)} />}
    </>
  );
};

export default LoginPopup;
