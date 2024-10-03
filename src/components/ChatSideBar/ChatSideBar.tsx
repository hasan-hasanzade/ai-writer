'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import LogoIcon from '@public/logo.svg';
import RemoveIcon from '@public/remove.svg';
import RenameIcon from '@public/rename.svg';

const ChatSideBar = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [chatName, setChatName] = useState<string>('Chat Name');
  const popupRef = useRef<HTMLDivElement>(null);

  const handleOpenPopup = (id: string) => {
    setActivePopup(prev => (prev === id ? null : id));
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        handleClosePopup();
      }
    };

    if (activePopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.body}>
        <Link href='/' className={styles.logo}><LogoIcon width={60} height={24} /></Link>
        <Link href='#' className={styles.newChat}><div className={styles.plus}>+</div> <span>New Chat</span></Link>
        <div className={styles.chatList}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={`${styles.chatItem} ${activePopup === index.toString() ? styles.active : ''}`}>
              <Link href='#' className={styles.chatName}>
                {chatName} 
                <div className={styles.dots} onClick={() => handleOpenPopup(index.toString())}>...</div>
              </Link>
              {activePopup === index.toString() && (
                <div ref={popupRef} className={styles.popupWrap}>
                  <div className={styles.popup}>
                    <button className={styles.popupBtn}><RemoveIcon/> Rename</button>
                    <button className={styles.popupBtn}><RenameIcon /> Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSideBar;
