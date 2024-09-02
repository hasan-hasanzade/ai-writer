import React from 'react'
import styles from './add.module.scss'
import Link from 'next/link'

const AdditionalLinks = () => {
  return (
    <section className={styles.additional}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.content}>
                <Link href='#' className={styles.item}>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in sequi, repudiandae nam ducimus nostrum.</div>
                    </div>
                    <div className={styles.btn}>
                        Learn More
                    </div>
                </Link>
                <Link href='#' className={styles.item}>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in sequi, repudiandae nam ducimus nostrum.</div>
                    </div>
                    <div className={styles.btn}>
                        Learn More
                    </div>
                </Link>
                <Link href='#' className={styles.item}>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in sequi, repudiandae nam ducimus nostrum.</div>
                    </div>
                    <div className={styles.btn}>
                        Learn More
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AdditionalLinks
