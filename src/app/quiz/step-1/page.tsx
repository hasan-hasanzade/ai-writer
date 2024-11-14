'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from '../quiz.module.scss';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

const Page = () => {
  const [topic, setTopic] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(true);

  const progress = topic.trim() ? 20 : 0;

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>
              Clarifying questions to compose the most appropriate prompt for qvalo AI - Step 1
            </div>

            <div className={styles.textTopic}>
              <input
                className={styles.input}
                type="text"
                placeholder="Please, enter the topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)} 
                ref={inputRef}
              />
            </div>

            <div className={styles.btn}>
              <Link 
                className={styles.btnContinue} 
                href={`/quiz/step-2?progress=${progress}`}
              >
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

export default Page;
