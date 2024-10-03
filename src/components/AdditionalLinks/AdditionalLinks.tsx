import React from 'react'
import styles from './add.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const AdditionalLinks = () => {
    const image1 = '/additional/1_1.png';
    const image2 = '/additional/1_2.png';
    const image3 = '/additional/1_3.png';
  return (
    <section className={styles.additional}>
        <div className="container">
            <div className={styles.body}>
            <div className={styles.title}>Sample</div>
            <div className={styles.content}>
                <Link href='#' className={styles.item}>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in sequi, repudiandae nam ducimus nostrum.</div>
                    </div>
                    <div className={styles.imgWrap}>
                        <Image className={styles.img} src={image1} alt="Sample Image 2" width={400} height={250} />
                          <div className={styles.btn}>Learn More</div>
                    </div>
                </Link>
                <Link href='#' className={styles.item}>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in sequi, repudiandae nam ducimus nostrum.</div>
                    </div>
                    <div className={styles.imgWrap}>
                        <Image src={image2} className={styles.img} alt="Sample Image 2" width={400} height={250} />
                          <div className={styles.btn}>Learn More</div>
                    </div>
                </Link>
                <Link href='#' className={styles.item}>
                    <div className={styles.text}>
                        <div className={styles.heading}>Lorem Ipsum</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in sequi, repudiandae nam ducimus nostrum.</div>
                    </div>
                    <div className={styles.imgWrap}>
                        <Image src={image3} className={styles.img} alt="Sample Image 2" width={400} height={250} />
                          <div className={styles.btn}>Learn More</div>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    </section>

  )
}

export default AdditionalLinks
