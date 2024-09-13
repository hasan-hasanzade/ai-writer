'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './askquestion.module.scss';
import ArrowIcon from '@public/next.svg';

interface AskQuestionProps {
  textBlockRef: React.RefObject<HTMLDivElement>;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ textBlockRef }) => {
  const [isFixed, setIsFixed] = useState(false);
  const askQuestionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textBlockRef.current && askQuestionRef.current) {
        const textBlockBottom = textBlockRef.current.getBoundingClientRect().bottom;
        const askQuestionTop = askQuestionRef.current.getBoundingClientRect().top;

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
    <div className={styles.ask} ref={askQuestionRef}>
      <div className={styles.body}>
        <div className={isFixed ? styles.fixed : styles.absolute}>
          <div className={styles.title}>Any questions on the solution?</div>
          <div className={styles.actions}>
              <input
                className={styles.askInput}
                type="text"
                placeholder="Write me and I'll help you figure it out!"
              />
              <button className={styles.btn}><ArrowIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
