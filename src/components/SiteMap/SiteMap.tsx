import React from 'react'
import styles from './sitemap.module.scss'
import Link from 'next/link'

const SiteMap = () => {
  return (
    <section className={styles.sitemap}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.item}>
                <Link href='/tutor' className={styles.heading}>AI Tutor</Link>
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
                <Link href='/homework' className={styles.heading}>Homework Helper</Link>
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
                <Link href='/write' className={styles.heading}>Writing Companion</Link>
                <div className={styles.links}>
                <Link className={styles.link} href='/essay'>Essay</Link>
                    <Link className={styles.link} href='/term-paper'>Term Paper</Link>
                    <Link className={styles.link} href='/book-report'>Project Report</Link>
                    <Link className={styles.link} href='/presentation'>Presentation </Link>
                    <Link className={styles.link} href='/research-paper'>Research Paper</Link>
                    <Link className={styles.link} href='/academic-paper'>Review</Link>
                    <Link className={styles.link} href='/article'>Article</Link>
                    <Link className={styles.link} href='/coursework'>Coursework</Link>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.heading}>Text Tools</div>
                <div className={styles.links}>
                    <Link className={styles.link} href='/rewrite'>Rewrite</Link>
                    <Link className={styles.link} href='/summarize'>Summarize</Link>    
                </div>
            </div>
            <div className={styles.item}>
                <Link href='/library' className={styles.heading}>Library</Link>
                <div className={styles.links}>
                    <Link className={styles.link} href='/library/projects'>Projects</Link>
                    <Link className={styles.link} href='/library/questions'>Questions</Link>    
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SiteMap
