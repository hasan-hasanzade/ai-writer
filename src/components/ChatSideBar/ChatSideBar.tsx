import React from 'react'
import styles from './sidebar.module.scss'
import Link from 'next/link'
import LogoIcon from '@public/logo.svg';

const ChatSideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.body}>
        <Link href='/' className={styles.logo}><LogoIcon width={60} height={24} /></Link>
        <Link href='#' className={styles.newChat}><div className={styles.plus}>+</div> <span>New Chat</span></Link>
        <div className={styles.chatList}>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
            <Link href='#' className={styles.chatName}>Chat Name</Link>
        </div>
      </div>
    </div>
  )
}

export default ChatSideBar
