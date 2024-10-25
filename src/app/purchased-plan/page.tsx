import React from 'react'
import styles from './purchased.module.scss'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.purchasedContainer}>
        <div className={styles.purchased}>
        <div className="container">
            <h2 className={styles.title}>Purchased plan</h2>
            <div className={styles.body}>
               <div className={styles.content}>
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
                        <button className={styles.btn}>Сancel plan</button>
                        <div className={styles.days}>
                            <span className={styles.planTitle}>Plan cost</span>
                            <span className={styles.text}>9$</span>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default page
