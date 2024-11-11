'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './getanessay.module.scss';

interface GetAnEssayBannerProps {
  textBlockRef: React.RefObject<HTMLDivElement>;
}

const GetAnEssayBanner: React.FC<GetAnEssayBannerProps> = ({ textBlockRef }) => {
  const [isFixed, setIsFixed] = useState(false);
  const getAnEssayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textBlockRef.current && getAnEssayRef.current) {
        const textBlockBottom = textBlockRef.current.getBoundingClientRect().bottom;
        const getAnEssayTop = getAnEssayRef.current.getBoundingClientRect().top;

        if (textBlockBottom < window.innerHeight) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
    
      window.removeEventListener('scroll', handleScroll);
    };
  }, [textBlockRef]);
  return (
    <div className={styles.ask} ref={getAnEssayRef}>
      <div className={styles.body}>
        <div className={isFixed ? styles.fixed : styles.absolute}>
          <div className={styles.fixedWrap}>
            <div className={styles.title}>Get an essay of up to 20 pages in 2 minutes</div>
            <div className={styles.btn}>
                <svg
                  className="styles_active__YRO07"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  width="24"
                  height="24"
                  fill="#000"
                >
                  <path d="M13.5027,9.50272l1.5426-3.85633c.3447-.86185,1.5647-.86186,1.9094,0l1.5426,3.85633l3.8563,1.54258c.8619.3447.8619,1.5647,0,1.9094l-3.8563,1.5426-1.5426,3.8563c-.3447.8619-1.5647.8619-1.9094,0l-1.5426-3.8563-3.85631-1.5426c-.86185-.3447-.86186-1.5647,0-1.9094L13.5027,9.50272Z"></path>
                  <path
                    className="styles_anim_24_sparks-u-6__UjcCy"
                    d="M19.9297,19.9297l.6611-1.6527c.1478-.3693.6706-.3693.8184,0l.6611,1.6527l1.6527.6611c.3693.1478.3693.6706,0,.8184l-1.6527.6611-.6611,1.6527c-.1478.3693-.6706.3693-.8184,0l-.6611-1.6527-1.6527-.6611c-.3693-.1478-.3693-.6706,0-.8184l1.6527-.6611Z"
                    opacity="0"
                  ></path>
                  <path
                    className="styles_anim_24_sparks-u-5__gjOBh"
                    d="M9.92974,1.92974l.66106-1.652714c.1478-.369367.6706-.369368.8184-.000001l.6611,1.652715l1.6527.66108c.3693.14775.3693.67061,0,.81836l-1.6527.66108-.6611,1.65271c-.1478.36937-.6706.36937-.8184,0L9.92974,4.07026L8.27703,3.40918c-.36937-.14775-.36937-.67061,0-.81836l1.65271-.66108Z"
                    opacity="0"
                  ></path>
                  <path
                    className="styles_anim_24_sparks-u-4__5pxXa"
                    d="M1.92974,11.9297l.66108-1.6527c.14775-.36934.67061-.36934.81836,0l.66108,1.6527l1.65271.6611c.36937.1478.36937.6706,0,.8184l-1.65271.6611-.66108,1.6527c-.14775.3693-.67061.3693-.81836,0l-.66108-1.6527-1.652714-.6611c-.369367-.1478-.369368-.6706-.000001-.8184l1.652715-.6611Z"
                    opacity="0"
                  ></path>
                  <path
                    className="styles_anim_24_sparks-u-3__C893_"
                    d="M19.9297,1.92974l.6611-1.652714c.1478-.369367.6706-.369368.8184-.000001l.6611,1.652715l1.6527.66108c.3693.14775.3693.67061,0,.81836l-1.6527.66108-.6611,1.65271c-.1478.36937-.6706.36937-.8184,0l-.6611-1.65271-1.6527-.66108c-.3693-.14775-.3693-.67061,0-.81836l1.6527-.66108Z"
                    opacity="0"
                  ></path>
                  <path
                    className="styles_anim_24_sparks-u-2__SQ4bf"
                    d="M6.59082,16.277l-.66108,1.6527-1.65271.6611c-.36937.1478-.36937.6706,0,.8184l1.65271.6611.66108,1.6527c.14775.3693.67061.3693.81836,0l.66108-1.6527l1.65271-.6611c.36933-.1478.36933-.6706,0-.8184l-1.65271-.6611-.66108-1.6527c-.14775-.3693-.67061-.3693-.81836,0Z"
                  ></path>
                  <path
                    className="styles_anim_24_sparks-u-1__mNT1E"
                    d="M3.92974,3.92974l.66108-1.65271c.14775-.36937.67061-.36937.81836,0l.66108,1.65271l1.65271.66108c.36937.14775.36937.67061,0,.81836l-1.65271.66108-.66108,1.65271c-.14775.36937-.67061.36937-.81836,0L3.92974,6.07026L2.27703,5.40918c-.36937-.14775-.36937-.67061,0-.81836l1.65271-.66108Z"
                  ></path>
                </svg>
                <button>Create</button>
              </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default GetAnEssayBanner;
