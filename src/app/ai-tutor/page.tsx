import React from 'react'
import ChatSideBar from '@/components/ChatSideBar/ChatSideBar'
import ChatFilters from '@/components/ChatFilters/ChatFilters'
import styles from './aitutor.module.scss'
import Chat from '@/components/Chat/Chat'

const page = () => {
  return (
    <div className={styles.aitutor}>
      <ChatSideBar />
      <div className={styles.chatside}>
        <ChatFilters />
        <Chat />
      </div>
    </div>
  )
}

export default page
