'use client'

import React, { useRef } from 'react';
import Breadcrumb from '@/components/BreadCrumb/BreadCrumb'
import TextBlock from '@/components/TextBlock/TextBlock'
import GetAnEssayBanner from '@/components/GetAnEssayBanner/GetAnEssayBanner';
import styles from './short.module.scss'

const page = () => {
  const textBlockRef = useRef<HTMLDivElement | null>(null);

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Library', link: '/hub' },
    { label: 'Projects', link: '/projects' }
  ]

  return (
    <div className={styles.shortMain}>
      <div className='container'>
        <div className={styles.breadcrumbs}>
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div className={styles.short}>
          <div className={styles.blockWrapper} ref={textBlockRef}>
            <TextBlock />
            <GetAnEssayBanner textBlockRef={textBlockRef} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
