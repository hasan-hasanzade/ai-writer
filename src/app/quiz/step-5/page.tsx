'use client';
import React, { useState, useRef, useEffect, MutableRefObject, Suspense } from 'react';
import styles from '../sec-quiz.module.scss';
import SparkIcon from '@public/spark.svg';
import PrevIcon from '@public/quiz-prev.svg';
import NextIcon from '@public/quiz-next.svg';
import DeleteIcon from '@public/quiz-delete.svg';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PageContent = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [clickedItem, setClickedItem] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const popupRef = useRef<HTMLDivElement>(null);
    
    const searchParams = useSearchParams();
    const initialProgress = parseInt(searchParams.get('progress') || '0', 10);
    
    const [progress, setProgress] = useState(initialProgress);
  
    const handleMouseEnter = (item: string) => {
      if (!showPopup || clickedItem !== item) {
        setHoveredItem(item);
      }
    };
  
    const handleMouseLeave = (item: string) => {
      if (!showPopup || clickedItem !== item) {
        setTimeout(() => {
          if (hoveredItem === item) {
            setHoveredItem(null);
          }
        }, 1000);
      }
    };
  
    useEffect(() => {
      setHoveredItem('heading');
      const rect = headingRef.current?.getBoundingClientRect();
      if (rect) {
        setPopupPosition({
          top: rect.top - 50,
          left: rect.left + 0
        });
        setShowPopup(true);
        setClickedItem('heading');
      }
    }, []);
  
    useEffect(() => {
      setClickedItem('heading');
      const rect = headingRef.current?.getBoundingClientRect();
      if (rect) {
        setPopupPosition({
          top: rect.top - 50,
          left: rect.left + 0
        });
        setShowPopup(true);
  
        const selection = window.getSelection();
        const range = document.createRange();
        if (headingRef.current) {
          range.selectNodeContents(headingRef.current);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      }
    }, []);
  
    const handleIconClick = (event: React.MouseEvent, item: string, textRef: MutableRefObject<HTMLElement | null>) => {
      setProgress(100);
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const popupTop = rect.top - 55;
      const popupLeft = rect.left + 34;
  
      setPopupPosition({ top: popupTop, left: popupLeft });
      setShowPopup(true);
      setClickedItem(item);
  
      const selection = window.getSelection();
      const range = document.createRange();
      if (textRef.current) {
        range.selectNodeContents(textRef.current);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
      setClickedItem(null);
      window.getSelection()?.removeAllRanges();
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          handleClosePopup();
        }
      };
  
      if (showPopup) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [showPopup]);
  
    const headingRef = useRef<HTMLHeadingElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const link2Ref = useRef<HTMLDivElement>(null);
    const subLink1Ref = useRef<HTMLDivElement>(null);
    const subLink2Ref = useRef<HTMLDivElement>(null);
    const link3Ref = useRef<HTMLDivElement>(null);
    const subLink3Ref = useRef<HTMLDivElement>(null);
    const subLink4Ref = useRef<HTMLDivElement>(null);
  

  return (
    <div className={styles.secQuiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Review & edit your table of contents - Step 5</h2>
            <div className={styles.content}>
              <h3
                ref={headingRef}
                className={styles.heading}
                onMouseEnter={() => handleMouseEnter('heading')}
                onMouseLeave={() => handleMouseLeave('heading')}
              >
                The Impact of World War II 
                {(hoveredItem === 'heading' || clickedItem === 'heading') && (
                  <span
                    onClick={(event) => handleIconClick(event, 'heading', headingRef)}
                    className={styles.svgWrapper}
                  >
                    <SparkIcon className={styles.sparkIcon} />
                  </span>
                )}
              </h3>
              
              <ol className={styles.list}>
                <li className={styles.item}>
                  <div 
                    ref={introRef}
                    className={styles.linkHead}
                    onMouseEnter={() => handleMouseEnter('link1')}
                    onMouseLeave={() => handleMouseLeave('link1')}
                  >
                    1. Introduction
                    {(hoveredItem === 'link1' || clickedItem === 'link1') && (
                      <span
                        onClick={(event) => handleIconClick(event, 'link1', introRef)}
                        className={styles.svgWrapper}
                      >
                        <SparkIcon className={styles.sparkIcon} />
                      </span>
                    )}
                  </div>
                </li>
                <li className={styles.item}>
                  <div 
                    ref={link2Ref}
                    className={styles.linkHead}
                    onMouseEnter={() => handleMouseEnter('link2')}
                    onMouseLeave={() => handleMouseLeave('link2')}
                  >
                    2. Understanding 'Das Rela Es'
                    {(hoveredItem === 'link2' || clickedItem === 'link2') && (
                      <span
                        onClick={(event) => handleIconClick(event, 'link2', link2Ref)}
                        className={styles.svgWrapper}
                      >
                        <SparkIcon className={styles.sparkIcon} />
                      </span>
                    )}
                  </div>
                </li>
                <ol className={styles.subsection}>
                  <li className={styles.item}>
                    <div
                      ref={subLink1Ref}
                      className={styles.link}
                      onMouseEnter={() => handleMouseEnter('subLink1')}
                      onMouseLeave={() => handleMouseLeave('subLink1')}
                    >
                      2.1. Origins and Definition
                      {(hoveredItem === 'subLink1' || clickedItem === 'subLink1') && (
                        <span
                          onClick={(event) => handleIconClick(event, 'subLink1', subLink1Ref)}
                          className={styles.svgWrapper}
                        >
                          <SparkIcon className={styles.sparkIcon} />
                        </span>
                      )}
                    </div>
                  </li>
                  <li className={styles.item}>
                    <div
                      ref={subLink2Ref}
                      className={styles.link}
                      onMouseEnter={() => handleMouseEnter('subLink2')}
                      onMouseLeave={() => handleMouseLeave('subLink2')}
                    >
                      2.2. Key Principles and Concepts
                      {(hoveredItem === 'subLink2' || clickedItem === 'subLink2') && (
                        <span
                          onClick={(event) => handleIconClick(event, 'subLink2', subLink2Ref)}
                          className={styles.svgWrapper}
                        >
                          <SparkIcon className={styles.sparkIcon} />
                        </span>
                      )}
                    </div>
                  </li>
                </ol>
                <li className={styles.item}>
                  <div 
                    ref={link3Ref}
                    className={styles.linkHead}
                    onMouseEnter={() => handleMouseEnter('link3')}
                    onMouseLeave={() => handleMouseLeave('link3')}
                  >
                    3. Economic Globalization
                    {(hoveredItem === 'link3' || clickedItem === 'link3') && (
                      <span
                        onClick={(event) => handleIconClick(event, 'link3', link3Ref)}
                        className={styles.svgWrapper}
                      >
                        <SparkIcon className={styles.sparkIcon} />
                      </span>
                    )}
                  </div>
                </li>
                <ol className={styles.subsection}>
                  <li className={styles.item}>
                    <div
                      ref={subLink3Ref}
                      className={styles.link}
                      onMouseEnter={() => handleMouseEnter('subLink3')}
                      onMouseLeave={() => handleMouseLeave('subLink3')}
                    >
                      3.1. Origins and Definition
                      {(hoveredItem === 'subLink3' || clickedItem === 'subLink3') && (
                        <span
                          onClick={(event) => handleIconClick(event, 'subLink3', subLink3Ref)}
                          className={styles.svgWrapper}
                        >
                          <SparkIcon className={styles.sparkIcon} />
                        </span>
                      )}
                    </div>
                  </li>
                  <li className={styles.item}>
                    <div
                      ref={subLink4Ref}
                      className={styles.link}
                      onMouseEnter={() => handleMouseEnter('subLink4')}
                      onMouseLeave={() => handleMouseLeave('subLink4')}
                    >
                      3.2. Key Principles and Concepts
                      {(hoveredItem === 'subLink4' || clickedItem === 'subLink4') && (
                        <span
                          onClick={(event) => handleIconClick(event, 'subLink4', subLink4Ref)}
                          className={styles.svgWrapper}
                        >
                          <SparkIcon className={styles.sparkIcon} />
                        </span>
                      )}
                    </div>
                  </li>
                </ol>
              </ol>
            </div>
            <div className={styles.btn}>
              <Link className={styles.btnBack} href={`/quiz/step-4`}>
                Back
              </Link>
              <button className={styles.btnContinue}>
                Submit
              </button>
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </div>

      {showPopup && (
        <div
          ref={popupRef}
          className={styles.popup}
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
            position: 'absolute',
            zIndex: 1,
          }}
        >
          <div className={styles.popupContent}>
            <button className={styles.regenerateBtn}>Regenerate</button>
            <div>
              <button className={styles.prevBtn}><PrevIcon width={15} height={11} /></button>
              <button className={styles.nextBtn}><NextIcon width={15} height={11} /></button>
            </div>
            <button className={styles.addBtn}>+ Add point</button>
            <button className={styles.addBtn}>+ Add section</button>
            <button className={styles.deleteBtn}><DeleteIcon width={20} height={20} className={styles.deleteIcon}/></button>
          </div>
        </div>
      )}
    </div>
  );
};

const Page = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );

export default Page;
