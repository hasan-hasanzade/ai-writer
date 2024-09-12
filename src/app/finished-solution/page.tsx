import React from 'react'
import Breadcrumb from '@/components/BreadCrumb/BreadCrumb'
import TextBlock from '@/components/TextBlock/TextBlock'
import OfferBlock from '@/components/OfferBlock/OfferBlock'
import AskQuestion from '@/components/AskQuestion/AskQuestion'
import styles from './finishedsolution.module.scss'

const page = () => {
  const grayBoxData = {
    title: 'Need to solve another task?',
    subtitle: 'Use the neural network',
    link: '/',
    buttonText: 'New Task'
  }

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Library', link: '/hub' },
    { label: 'Questions', link: '/questions' }
  ]


  return (
    <div className={styles.finishedEs}>
      <div className='container'>
        <div className={styles.breadcrumbs}>
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div className={styles.finished}>
          <div className={styles.blockWrapper}>
            <TextBlock/>
            <AskQuestion />
          </div>
          {/* <OfferBlock showWhiteBox={false} grayBoxData={grayBoxData} /> */}
        </div>
      </div>
    </div>
  )
}

export default page
