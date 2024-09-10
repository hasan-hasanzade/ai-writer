import React from 'react'
import styles from './sidebar.module.scss'
import Link from 'next/link'

const ChatSideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.body}>
        <Link href='/' className={styles.logo}>qvalo</Link>
        <Link href='#' className={styles.newChat}><div className={styles.plus}>+</div> New Chat</Link>
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
