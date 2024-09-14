'use client'

import React from 'react'
import styles from './hub.module.scss'
import SearchIcon from '@public/search.svg'
import ArrRightIcon from '@public/arrowright.svg'
import Link from 'next/link'

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength).trim() + '...';
  }
  return title;
};

const page = () => {
  return (
    <section className={styles.hub}>
      <div className='container'>
          <h1 className={styles.title}>All materials</h1>
          <p className={styles.subtitle}>Look for the right training materials</p>
        <div className={styles.searchBody}>
          <div className={styles.inputWrapper}>
            <SearchIcon className={styles.searchIcon} width={28} height={20}/>  
            <input 
              id="search"
              placeholder="Please enter the topic..." 
              className={styles.inputSearch}
              aria-label="Search training materials"
            />
          </div>
        </div>

        <div className={styles.body}>
          <nav className={styles.filters} aria-label="Filter by category">
            <div className={styles.projects}>
              <Link href='/projects' className={styles.projectsLink}>
                Projects <ArrRightIcon className={styles.arrowIcon} width={12} height={16}/>
              </Link>
            </div>
            <div className={styles.tasks}>
              <Link href='/projects' className={styles.tasksLink}>
                Questions <ArrRightIcon className={styles.arrowIcon} width={12} height={16}/>
              </Link>
            </div>
          </nav>

          <div className={styles.content}>
            <div className={styles.cartWrapper}>
              {Array(10).fill(0).map((_, index) => (
                <article className={styles.cart} key={index}>
                  <h2 className={styles.cartTitle}>
                    {truncateTitle('The sun sets behind the mountains, painting the sky with vibrant hues of oranges.', 80)}
                  </h2>
                  <div className={styles.infoWrapper}>
                    <span className={styles.type}>Project</span>
                    <span>•</span>
                    <time className={styles.date} dateTime="2023-09-10">10 September</time>
                  </div>
                </article>
              ))}
            </div>
            <button className={styles.showMore}>Show More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
