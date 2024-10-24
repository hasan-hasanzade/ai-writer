import React from 'react'
import styles from './purchased.module.scss'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.purchased}>
    <div className="container">
        <h2 className={styles.title}>Purchased plan</h2>
        <div className={styles.body}>
            <div className={styles.top}>
                <div className={styles.current}>
                    <span className={styles.planTitle}>Your plan</span>
                    <span className={styles.text}>Monthly</span>
                </div>
                <div className={styles.days}>
                    <span className={styles.planTitle}>Days left</span>
                    <span className={styles.text}>23 d</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <Link href='/plans' className={styles.btn}>Buy new plan</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default page
