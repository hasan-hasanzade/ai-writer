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
