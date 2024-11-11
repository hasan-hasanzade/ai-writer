'use client'

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../quiz.module.scss';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { Range } from 'react-range';

const PageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialProgress = parseInt(searchParams.get('progress') || '0', 10);

  const [values, setValues] = useState([500]);
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    setProgress(initialProgress + (values[0] > 500 ? 20 : 0));
  }, [values, initialProgress]);

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>
              Clarifying questions to compose the most appropriate prompt for qvalo AI - Step 2
            </div>

            <div className={styles.textSize}>
              <div className={styles.sizeTitle}>Specify the text size:</div>
              <div className={styles.wordRange}>
                <Range
                  step={1}
                  min={500}
                  max={12000}
                  values={values}
                  onChange={(newValues) => setValues(newValues.map(Math.round))}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "3px",
                        width: "100%",
                        backgroundColor: "#EEF1F5",
                      }}
                    >
                      <div className={styles.staticDot} style={{ left: '33%' }} />
                      <div className={styles.staticDot} style={{ left: '64%' }} />
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        height: '14px',
                        width: '14px',
                        borderRadius: '50%',
                        backgroundColor: '#2684FC',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                    </div>
                  )}
                />
              </div>
              <div className={styles.minMax}>
                <span className={styles.minValue}>500</span>
                <span className={styles.minValue}>4500</span>
                <span className={styles.minValue}>8000</span>
                <span className={styles.maxValue}>12000</span>
              </div>
              <div className={styles.pageCount}>
                Pages Count: <span>{(values[0] / 250).toFixed(0)}</span>
              </div>
            </div>

            <div className={styles.btn}>
              <Link className={styles.btnContinue} href={`/quiz/step-3?progress=${progress}`}>
                Continue
              </Link>
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);

export default Page;
