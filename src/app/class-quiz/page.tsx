'use client'

import React, { useState } from 'react';
import styles from './classquiz.module.scss';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

const Page = () => {
  const [progress, setProgress] = useState(5);
  const [activeClass, setActiveClass] = useState(null);
  const [isClicked, setIsClicked] = useState(false); 

  const handleClassClick = (grade:any) => {
    setActiveClass(grade);
    
    if (!isClicked) {
      setProgress((prevProgress) => Math.min(prevProgress + 45, 100));
      setIsClicked(true);
    }
  };
  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>
              Please, select your graduation
            </div>

            <div className={styles.btnsBody}>
              <div className={styles.column}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '1st Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('1st Grade')}
                    >
                      1st Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '2nd Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('2nd Grade')}
                    >
                      2nd Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '3rd Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('3rd Grade')}
                    >
                      3rd Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '4th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('4th Grade')}
                    >
                      4th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '5th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('5th Grade')}
                    >
                      5th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '6th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('6th Grade')}
                    >
                      6th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '7th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('7th Grade')}
                    >
                      7th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '8th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('8th Grade')}
                    >
                      8th Grade
                    </button>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '9th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('9th Grade')}
                    >
                      9th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '10th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('10th Grade')}
                    >
                      10th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '11th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('11th Grade')}
                    >
                      11th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === '12th Grade' ? styles.active : ''}`}
                      onClick={() => handleClassClick('12th Grade')}
                    >
                      12th Grade
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === 'Undergraduate' ? styles.active : ''}`}
                      onClick={() => handleClassClick('Undergraduate')}
                    >
                      College (Undergraduate)
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === 'Graduate' ? styles.active : ''}`}
                      onClick={() => handleClassClick('Graduate')}
                    >
                      Graduate School
                    </button>
                  </li>
                  <li className={styles.listItem}>
                    <button
                      className={`${styles.classBtn} ${activeClass === 'Professional' ? styles.active : ''}`}
                      onClick={() => handleClassClick('Professional')}
                    >
                      Professional
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.btn}>
              <Link className={styles.btnContinue} href="/subject-quiz">Continue</Link>
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default Page;
