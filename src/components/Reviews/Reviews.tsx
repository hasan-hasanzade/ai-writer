'use client'

import React from 'react'
import styles from './review.module.scss'
import StarIcon from '@public/star.svg'
import NextIcon from '@public/next.svg'
import PrevIcon from '@public/prev.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Reviews = () => {
    const [isBeginning, setIsBeginning] = React.useState(true);
    const [isEnd, setIsEnd] = React.useState(false);

    const handleSlideChange = (swiper:any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

  return (
    <section className={styles.reviews}>
      <div className="container">
        <div className={styles.body}>
            <h2 className={styles.title}>Reviews</h2>
        <div className={styles.slider}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                568: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                  }}
                onReachEnd={() => setIsEnd(true)}
                onSlideChange={handleSlideChange}
              onInit={handleSlideChange}
                >
                <SwiperSlide>
                    <div className={styles.item}>
                        <div className={styles.name}>John D.</div>
                        <div className={styles.type}>Essay</div>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                        </div>
                        <div className={styles.review}>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis officia beatae magni maxime? Sed, ut sunt cumque incidunt error minus, quas culpa doloribus earum eveniet quam dolorem nam! Rem nam corrupti numquam temporibus placeat similique accusantium error sequi atque odit! Quasi earum quidem officiis dolores impedit tempora, unde, facere, vitae corrupti libero laboriosam iure optio? Dolorum veritatis nulla rerum, consequatur aut quod nisi repellendus at earum voluptas commodi atque! Laborum suscipit placeat quidem, repudiandae incidunt qui iure voluptas rem. Inventore numquam eius ducimus necessitatibus!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item}>
                        <div className={styles.name}>Ashley S.</div>
                        <div className={styles.type}>Essay</div>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                        </div>
                        <div className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis officia beatae magni maxime? Sed, ut sunt cumque incidunt error minus, quas culpa doloribus earum eveniet quam dolorem nam! Rem nam corrupti numquam temporibus placeat similique accusantium error sequi atque odit! Quasi earum quidem officiis dolores impedit tempora, unde, facere, vitae corrupti libero laboriosam iure optio? Dolorum veritatis nulla rerum, consequatur aut quod nisi repellendus at earum voluptas commodi atque! Laborum suscipit placeat quidem, repudiandae incidunt qui iure voluptas rem. Inventore numquam eius ducimus necessitatibus!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item}>
                        <div className={styles.name}>George L.</div>
                        <div className={styles.type}>Abstract</div>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                        </div>
                        <div className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis officia beatae magni maxime? Sed, ut sunt cumque incidunt error minus, quas culpa doloribus earum eveniet quam dolorem nam! Rem nam corrupti numquam temporibus placeat similique accusantium error sequi atque odit! Quasi earum quidem officiis dolores impedit tempora, unde, facere, vitae corrupti libero laboriosam iure optio? Dolorum veritatis nulla rerum, consequatur aut quod nisi repellendus at earum voluptas commodi atque! Laborum suscipit placeat quidem, repudiandae incidunt qui iure voluptas rem. Inventore numquam eius ducimus necessitatibus!
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.item}>
                        <div className={styles.name}>Luis R.</div>
                        <div className={styles.type}>Presentation</div>
                        <div className={styles.stars}>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                            <StarIcon className={styles.starIcon} width={19} height={17}/>
                        </div>
                        <div className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem omnis officia beatae magni maxime? Sed, ut sunt cumque incidunt error minus, quas culpa doloribus earum eveniet quam dolorem nam! Rem nam corrupti numquam temporibus placeat similique accusantium error sequi atque odit! Quasi earum quidem officiis dolores impedit tempora, unde, facere, vitae corrupti libero laboriosam iure optio? Dolorum veritatis nulla rerum, consequatur aut quod nisi repellendus at earum voluptas commodi atque! Laborum suscipit placeat quidem, repudiandae incidunt qui iure voluptas rem. Inventore numquam eius ducimus necessitatibus!
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={`custom-prev ${isBeginning ? styles.disabled : ''}`}>
              <PrevIcon className={styles.icon} width={14} height={16} />
            </div>
            <div className={`custom-next ${isEnd ? styles.disabled : ''}`}>
              <NextIcon className={styles.icon} width={14} height={16} />
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
