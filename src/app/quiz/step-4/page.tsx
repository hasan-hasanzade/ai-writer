'use client'

import React, { useState, useEffect, Suspense, useRef } from 'react';
import styles from '../quiz.module.scss';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { useSearchParams } from 'next/navigation';

const PageContent = () => {
  const [comment, setComment] = useState('');
  const searchParams = useSearchParams();
  const initialProgress = parseInt(searchParams.get('progress') || '0', 10);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isFocused, setIsFocused] = useState(true);

  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    if (isFocused && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    setProgress(comment.trim() ? initialProgress + 20 : initialProgress);
  }, [comment, initialProgress]);

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>
              Clarifying questions to compose the most appropriate prompt for qvalo AI - Step 4
            </div>

            <div className={styles.textComment}>
              <div className={styles.comment}>
                <textarea
                  className={styles.commentArea}
                  placeholder="Enter your comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  ref={textareaRef}
                />
              </div>
            </div>

            <div className={styles.btn}>
              <Link className={styles.btnBack} href={`/quiz/step-3`}>
                Back
              </Link>
              <Link className={styles.btnContinue} href={`/quiz/step-5?progress=${progress}`}>
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
