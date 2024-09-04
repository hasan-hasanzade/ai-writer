import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.content}>
                <div className={styles.questions}>
                    For all inquiries, please contact example@info.ru.
                </div>
                <div className={styles.links}>
                    <Link className={styles.link} href='#'>Terms of Service</Link>
                    <Link className={styles.link} href='#'>Privacy & Cookie Policy</Link>
                    <Link className={styles.link} href='#'>Projects library</Link>
                </div>
            </div>
            <div className={styles.copyrights}>
            (с) 2024, LLC «Company»
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer