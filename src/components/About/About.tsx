import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.body}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                </div>
                <div className={styles.content}>
                    <div className={styles.heading}>Lorem ipsum dolor sit amet consectetur.</div>
                    <div className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ab, nulla veniam ipsam eaque molestias nisi consequatur!</div>
                    <div className={styles.listTitle}>Lorem, ipsum.</div>
                    <ul className={styles.list}>
                        <li className={styles.item}>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li className={styles.item}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, magni..</li>
                        <li className={styles.item}>Lorem ipsum dolor sit amet.</li>
                        <li className={styles.item}>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About