'use client'

import React, { useState } from 'react'
import styles from './authpopup.module.scss'
import Link from 'next/link'
import GoogleIcon from '@public/google.svg';
import LoginPopup from '../LoginPopup/LoginPopup';
import SignPopup from '../SignPopup/SignPopup';
import CloseIcon from '@public/close.svg'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignPopup, setShowSignPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    const emailExists = checkEmail(email);

    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose();
      if (emailExists) {
        setShowLoginPopup(true);
      } else {
        setShowSignPopup(true);
      }
    }, 300);
  };

  const checkEmail = (email: string) => {
    return email === '1';
  };

  return (
    <>
      {isOpen && (
        <div 
          className={`${styles.popupOverlay} ${isClosing ? styles.popupOverlayClosing : ''}`} 
          onClick={onClose}
        >
          <div 
            className={`${styles.popupContent} ${isClosing ? styles.popupContentClosing : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}><CloseIcon /></button>
            <h2 className={styles.title}>Log in or sign up</h2>
            <div className={styles.google}>
              <GoogleIcon width={20} height={20}/>
              <Link className={styles.qw} href='#'>Continue with Google</Link>
            </div>
            <div className={styles.or}>or</div>
            <input 
              className={styles.emailInput} 
              type="text" 
              placeholder='Email'
              value={email}
              onChange={handleEmailInput}
            />
            <button className={styles.btn} onClick={handleContinue}>Continue</button>
          </div>
        </div>
      )}

      {showLoginPopup && <LoginPopup isOpen={showLoginPopup} onClose={() => setShowLoginPopup(false)} />}
      {showSignPopup && <SignPopup isOpen={showSignPopup} onClose={() => setShowSignPopup(false)} />}
    </>
  );
};



export default AuthPopup;
