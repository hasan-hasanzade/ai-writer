import React from 'react'
import Breadcrumb from '@/components/BreadCrumb/BreadCrumb'
import TextBlock from '@/components/TextBlock/TextBlock'
import OfferBlock from '@/components/OfferBlock/OfferBlock'
import styles from './finishedsolution.module.scss'

const page = () => {
  const grayBoxData = {
    title: 'Need to solve another task?',
    subtitle: 'Use the neural network',
    link: '/',
    buttonText: 'New Task'
  }

  return (
    <div className='container'>
      <div className={styles.finished}>
        <TextBlock/>
        <OfferBlock showWhiteBox={false} grayBoxData={grayBoxData} />
      </div>
    </div>
  )
}

export default page
