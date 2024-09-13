import React from 'react'
import styles from './offer.module.scss'
import Link from 'next/link'

interface BoxData {
    title: string;
    subtitle: string;
    link: string;
    buttonText: string;
}
 
interface OfferBlockProps {
  showWhiteBox?: boolean;
  grayBoxData: BoxData;
  whiteBoxData?: BoxData;
}

const OfferBlock: React.FC<OfferBlockProps> = ({ showWhiteBox = true, grayBoxData, whiteBoxData }) => {
  return (
    <div className={styles.offer}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.grayBox}>
            <div className={styles.grayTitle}>{grayBoxData.title}</div>
            <div className={styles.graySubtitle}>{grayBoxData.subtitle}</div>
            <Link href={grayBoxData.link} className={styles.grayBtn}>
              {grayBoxData.buttonText}
            </Link>
          </div>
          {showWhiteBox && whiteBoxData && (
            <div className={styles.whiteBox}>
              <div className={styles.whiteTitle}>{whiteBoxData.title}</div>
              <div className={styles.whiteSubtitle}>{whiteBoxData.subtitle}</div>
              <Link href={whiteBoxData.link} className={styles.whiteBtn}>
                {whiteBoxData.buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OfferBlock
