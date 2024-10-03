'use client';

import React, { useRef, useEffect, useState } from 'react';
import styles from './accordion.module.scss';
import ArrDownIcon from '@public/arrdown.svg';

interface AccordionProps {
  question: string;
  answer: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [accordionOpen]);

  return (
    <div className={`${styles.accordion} ${accordionOpen ? styles.open : ''}`}>
      <button onClick={toggleAccordion} className={styles.btn}>
        <span className={styles.header}>{question}</span>
        <ArrDownIcon
          className={`${styles.icon} ${accordionOpen ? styles.iconOpen : ''}`}
          width={19}
          height={19}
        />
      </button>
      <div
        ref={contentRef}
        className={`${styles.content} ${accordionOpen ? styles.contentOpen : ''}`}
        style={{ maxHeight: accordionOpen ? `${contentHeight}px` : '0px' }}
      >
        <div className={styles.answer}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
