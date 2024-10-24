'use client'

import React, { useState, useEffect } from 'react';
import styles from './profile.module.scss';
import RenameIcon from '@public/rename.svg';
import Image from 'next/image';
import ArrowIcon from '@public/next.svg';
import MailIcon from '@public/mail.svg';
import PasswordIcon from '@public/password.svg';
import ChangeEmailPopup from '@/components/ChangeEmailPopup/ChangeEmailPopup';
import ChangePasswordPopup from '@/components/ChangePasswordPopup/ChangePasswrodPopup';

const Page = () => {
  const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);
  const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);

  useEffect(() => {
    if (isEmailPopupOpen || isPasswordPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isEmailPopupOpen, isPasswordPopupOpen]);

  const toggleEmailPopup = () => setEmailPopupOpen(!isEmailPopupOpen);
  const togglePasswordPopup = () => setPasswordPopupOpen(!isPasswordPopupOpen);

  const closePopups = () => {
    setEmailPopupOpen(false);
    setPasswordPopupOpen(false);
  };

  return (
    <div className={styles.profile}>
      <div className="container">
        <h1 className={styles.title}>Your information</h1>
        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.nameBody}>
              <div className={styles.user}>
                <Image src='/user.svg' width={25} height={25} alt='user' />
              </div>
              <div className={styles.name}>Ivan</div>
              <RenameIcon className={styles.renameIcon} width={20} height={20} />
            </div>
          </div>
          <div className={styles.dataBody}>
            <div className={styles.details}>
              <div className={styles.email} onClick={toggleEmailPopup}>
                <div className={styles.wrap}>
                  <div className={styles.icon}><MailIcon width={20} height={20} /></div>
                  <span>example@gmail.com</span>
                </div>
                <ArrowIcon />
              </div>
              <div className={styles.password} onClick={togglePasswordPopup}>
                <div className={styles.wrap}>
                  <div className={styles.icon}><PasswordIcon width={20} height={20} /></div>
                  <span>Change password</span>
                </div>
                <ArrowIcon />
              </div>
            </div>
            <button className={styles.btn}>Log out</button>
          </div>
        </div>
      </div>
      {isEmailPopupOpen && <ChangeEmailPopup onClose={closePopups} />}
      {isPasswordPopupOpen && <ChangePasswordPopup onClose={closePopups} />}
    </div>
  );
};

export default Page;
