'use client'

import React, { useRef } from 'react';
import Breadcrumb from '@/components/BreadCrumb/BreadCrumb';
import TextBlock from '@/components/TextBlock/TextBlock';
import OfferBlock from '@/components/OfferBlock/OfferBlock';
import AskQuestion from '@/components/AskQuestion/AskQuestion';
import styles from './finishedsolution.module.scss';

const Page = () => {
  const textBlockRef = useRef<HTMLDivElement | null>(null);

  const grayBoxData = {
    title: 'Do you want to improve your knowledge?',
    subtitle: 'Try AI tutor',
    link: '/ai-dashboard',
    buttonText: 'New Task',
  };

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Library', link: '/hub' },
    { label: 'Questions', link: '/questions' },
  ];

  return (
    <div className={styles.finishedEs}>
      <div className="container">
        <div className={styles.breadcrumbs}>
          <Breadcrumb items={breadcrumbs} />
        </div>
        <div className={styles.finished}>
          <div className={styles.blockWrapper} ref={textBlockRef}>
            <TextBlock Info={true}/>
          </div>
          <OfferBlock showWhiteBox={false} grayBoxData={grayBoxData} />
        </div>
      </div>
    </div>
  );
};

export default Page;
