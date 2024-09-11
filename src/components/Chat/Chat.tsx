import React from 'react'
import styles from './chat.module.scss'
import SendIcon from '@public/send.svg'
import MicrIcon from '@public/microphone.svg'
import ImgIcon from '@public/img.svg'


const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.body}>
      <div className={styles.chatBody}>
                <div className={styles.incomingMessage}>
                  <div className={styles.incomingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                    imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.options}>
                    <a href='#' className={styles.option}>Vestibulum gravida</a>
                    <a href='#' className={styles.option}>Dignissim conval</a>
                    <a href='#' className={styles.option}>consectetur adipiscing</a>
                    <a href='#' className={styles.option}>consectetur</a>
                    <a href='#' className={styles.option}>Praesent</a>
                    <a href='#' className={styles.option}>Vestibulum gravida</a>
                    <a href='#' className={styles.option}>Praesent</a>
                    </div>
                </div>
                <div className={styles.sentMessage}>
                  <div className={styles.sentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam 
                    dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                </div>
                <div className={styles.incomingMessage}>
                  <div className={styles.incomingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                    imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.options}>
                    <a href='#' className={styles.option}>Vestibulum gravida</a>
                    <a href='#' className={styles.option}>Dignissim conval</a>
                    </div>
                </div>
                <div className={styles.sentMessage}>
                  <div className={styles.sentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam 
                    dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                </div>
                <div className={styles.incomingMessage}>
                  <div className={styles.incomingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                    imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                  <div className={styles.options}>
                    <a href='#' className={styles.option}>Vestibulum gravida</a>
                    <a href='#' className={styles.option}>Dignissim conval</a>
                    <a href='#' className={styles.option}>consectetur adipiscing</a>
                    <a href='#' className={styles.option}>consectetur</a>
                    </div>
                </div>
                <div className={styles.sentMessage}>
                  <div className={styles.sentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam 
                    dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti. 
                  </div>
                </div>
            </div>
            <div className={styles.chatActions}>
                <textarea className={styles.textArea} placeholder='Send a message (e.g., &quot;How do I...?&quot;)'>
                </textarea>
            </div>
      </div>
    </div>
  )
}

export default Chat
