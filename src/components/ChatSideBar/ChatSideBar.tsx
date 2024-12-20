'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import LogoIcon from '@public/logo.svg';
import RemoveIcon from '@public/remove.svg';
import RenameIcon from '@public/rename.svg';

const ChatSideBar = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<string | null>(null); 
  const [chatNames, setChatNames] = useState<string[]>(Array.from({ length: 20 }, () => 'Chat Name'));
  const [editValue, setEditValue] = useState<string>('');
  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenPopup = (id: string) => {
    setActivePopup(prev => (prev === id ? null : id));
    setIsEditing(null);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
    setIsEditing(null);
  };

  const handleRenameClick = (index: string) => {
    setIsEditing(index);
    setEditValue(chatNames[Number(index)]);
    setActivePopup(null);
  };

  const handleSaveRename = (index: string) => {
    const updatedNames = [...chatNames];
    updatedNames[Number(index)] = editValue;
    setChatNames(updatedNames);
    setIsEditing(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        if (isEditing !== null) {
          handleSaveRename(isEditing);
        }
        handleClosePopup();
      }
    };

    if (activePopup || isEditing !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup, isEditing]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.body}>
        <Link href='/' className={styles.logo}><LogoIcon width={60} height={24} /></Link>
        <Link href='#' className={styles.newChat}><div className={styles.plus}>+</div> <span>New Chat</span></Link>
        <div className={styles.chatList}>
          {chatNames.map((chatName, index) => (
            <div key={index} className={`${styles.chatItem} ${activePopup === index.toString() ? styles.active : ''}`}>
              <Link href='#' className={styles.chatName}>
                {isEditing === index.toString() ? (
                  <input
                    ref={inputRef}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleSaveRename(index.toString())}
                    autoFocus
                    className={styles.input}
                  />
                ) : (
                  <>
                    {chatName}
                    <div className={styles.dots} onClick={() => handleOpenPopup(index.toString())}>...</div>
                  </>
                )}
              </Link>
              {activePopup === index.toString() && (
                <div ref={popupRef} className={styles.popupWrap}>
                  <div className={styles.popup}>
                    <button className={styles.popupBtn} onClick={() => handleRenameClick(index.toString())}>
                      <RenameIcon />Rename
                    </button>
                    <button className={styles.popupBtn}><RemoveIcon/>Delete</button>
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
