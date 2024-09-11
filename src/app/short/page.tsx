import React from 'react'
import Breadcrumb from '@/components/BreadCrumb/BreadCrumb'
import TextBlock from '@/components/TextBlock/TextBlock'
import OfferBlock from '@/components/OfferBlock/OfferBlock'
import styles from './short.module.scss'

const page = () => {
  const grayBoxData = {
    title: 'Create a full text',
    subtitle: 'If the project structure suits you, create the full text',
    link: '/',
    buttonText: 'Create'
  }

  const whiteBoxData = {
    title: 'Need a different project?',
    subtitle: 'Create a project using a neural network',
    link: '/',
    buttonText: 'New Project'
  }

  return (
    <div className='container'>
      <div className={styles.short}>
        <TextBlock/>
        <OfferBlock showWhiteBox={true} grayBoxData={grayBoxData} whiteBoxData={whiteBoxData} />
      </div>
    </div>
  )
}

export default page