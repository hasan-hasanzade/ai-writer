import React from 'react'
import styles from './sitemap.module.scss'
import Link from 'next/link'

const SiteMap = () => {
  return (
    <section className={styles.sitemap}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.item}>
                <div className={styles.heading}>AI Writer</div>
                <div className={styles.links}>
                    <Link className={styles.link} href='#'>Abstract</Link>
                    <Link className={styles.link} href='#'>Essay</Link>
                    <Link className={styles.link} href='#'>Term Paper</Link>
                    <Link className={styles.link} href='#'>Report</Link>
                    <Link className={styles.link} href='#'>Thesis</Link>
                    <Link className={styles.link} href='#'>Presentation</Link>
                    <Link className={styles.link} href='#'>Project</Link>
                    <Link className={styles.link} href='#'>Article</Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.heading}>Task Solving</div>
                <div className={styles.links}>
                    <Link className={styles.link} href='#'>Mathematics</Link>
                    <Link className={styles.link} href='#'>Algebra</Link>
                    <Link className={styles.link} href='#'>Computer Science</Link>
                    <Link className={styles.link} href='#'>Physics</Link>
                    <Link className={styles.link} href='#'>Chemistry</Link>
                    <Link className={styles.link} href='#'>Biology</Link>
                    <Link className={styles.link} href='#'>Geography</Link>
                    <Link className={styles.link} href='#'>Russian Language</Link>
                    <Link className={styles.link} href='#'>Literature</Link>
                    <Link className={styles.link} href='#'>History</Link>
                    <Link className={styles.link} href='#'>Social Studies</Link>
                    <Link className={styles.link} href='#'>English Language</Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.heading}>Library</div>
                <div className={styles.links}>
                    <Link className={styles.link} href='#'>Projects</Link>
                    <Link className={styles.link} href='#'>Tasks</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SiteMap
