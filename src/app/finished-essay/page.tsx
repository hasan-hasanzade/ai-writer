import React from 'react'
import Breadcrumb from '@/components/BreadCrumb/BreadCrumb'
import TextBlock from '@/components/TextBlock/TextBlock'
import OfferBlock from '@/components/OfferBlock/OfferBlock'
import styles from './finished.module.scss'

const page = () => {
  const grayBoxData = {
    title: 'Need another project?',
    subtitle: 'Create a project using a neural network',
    link: '/',
    buttonText: 'New Project'
  }

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Library', link: '/hub' },
    { label: 'Projects', link: '/projects' }
  ]

  return (
    <div className={styles.finishedEs}>
      <div className='container'>
        <div className={styles.breadcrumbs}>
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div className={styles.finished}>
          <TextBlock/>
          <OfferBlock showWhiteBox={false} grayBoxData={grayBoxData} />
        </div>
      </div>
    </div>
  )
}

export default page
