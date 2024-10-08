'use client'

import React from 'react';
import styles from './chat.module.scss';
import ArrowIcon from '@public/next.svg';

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.body}>
        <div className={styles.chatBody}>
          <div className={styles.incomingMessage}>
            <div className={styles.incomingText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
            <div className={styles.options}>
              <a href="#" className={styles.option}>Vestibulum gravida</a>
              <a href="#" className={styles.option}>Dignissim conval</a>
              <a href="#" className={styles.option}>consectetur adipiscing</a>
              <a href="#" className={styles.option}>consectetur</a>
              <a href="#" className={styles.option}>Praesent</a>
              <a href="#" className={styles.option}>Vestibulum gravida</a>
              <a href="#" className={styles.option}>Praesent</a>
            </div>
          </div>

          <div className={styles.sentMessage}>
            <div className={styles.sentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
          </div>

          <div className={styles.incomingMessage}>
            <div className={styles.incomingText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
            <div className={styles.options}>
              <a href="#" className={styles.option}>Vestibulum gravida</a>
              <a href="#" className={styles.option}>Dignissim conval</a>
            </div>
          </div>

          <div className={styles.sentMessage}>
            <div className={styles.sentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
          </div>

          <div className={styles.incomingMessage}>
            <div className={styles.incomingText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
            <div className={styles.options}>
              <a href="#" className={styles.option}>Vestibulum gravida</a>
              <a href="#" className={styles.option}>Dignissim conval</a>
              <a href="#" className={styles.option}>consectetur adipiscing</a>
              <a href="#" className={styles.option}>consectetur</a>
            </div>
          </div>

          <div className={styles.sentMessage}>
            <div className={styles.sentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
          </div>
          <div className={styles.sentMessage}>
            <div className={styles.sentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
          </div>
          <div className={styles.sentMessage}>
            <div className={styles.sentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet nibh non quam dignissim convallis. Vestibulum gravida in tortor sit amet ullamcorper. Suspendisse potenti.
            </div>
          </div>
        </div>

        <div className={styles.chatActions}>
          <div className={styles.actionsWrap}>
            <input
              className={styles.chatInput}
              type="text"
              placeholder="Write me and I'll help you figure it out!"
            />
            <button className={styles.btn}>
              <ArrowIcon />
            </button>
          </div>
          <div className={styles.disclamer}>Qvalo may make mistakes. We recommend checking important information.</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
