'use client';
import React, { useState } from 'react';
import styles from './sec-quiz.module.scss';
import SVGIcon from '@public/spark.svg'; // Импорт вашего SVG как компонента

const Page = () => {
  // const [hoveredItem, setHoveredItem] = useState(null);

  // const handleMouseEnter = (item) => {
  //   setHoveredItem(item);
  // };

  // const handleMouseLeave = (item) => {
  //   setTimeout(() => {
  //     if (hoveredItem === item) {
  //       setHoveredItem(null);
  //     }
  //   }, 1000); // Задержка, чтобы дать время пользователю наводить на иконку
  // };

  return (
    <div className={styles.secQuiz}>
      {/* <div className="container">
        <div className={styles.body}>
          <h2 className={styles.title}>Review & edit your table of contents</h2>
          <div className={styles.content}>
            <h3 
              className={styles.heading}
              onMouseEnter={() => handleMouseEnter('heading')}
              onMouseLeave={() => handleMouseLeave('heading')}
            >
              The Impact of World War II on Global Politics and Society
              {(hoveredItem === 'heading') && (
                <span
                  onMouseEnter={() => handleMouseEnter('heading')}
                  onMouseLeave={() => handleMouseLeave('heading')}
                  className={styles.svgWrapper}
                >
                  <SVGIcon className={styles.svgIcon} />
                </span>
              )}
            </h3>
            <ol className={styles.list}>
              <li className={styles.item}>
                <a 
                  href='#1' 
                  className={styles.linkHead}
                  onMouseEnter={() => handleMouseEnter('link1')}
                  onMouseLeave={() => handleMouseLeave('link1')}
                >
                  1. Introduction
                  {(hoveredItem === 'link1') && (
                    <span
                      onMouseEnter={() => handleMouseEnter('link1')}
                      onMouseLeave={() => handleMouseLeave('link1')}
                      className={styles.svgWrapper}
                    >
                      <SVGIcon className={styles.svgIcon} />
                    </span>
                  )}
                </a>
              </li>
              <li className={styles.item}>
                <a 
                  href='#2' 
                  className={styles.linkHead}
                  onMouseEnter={() => handleMouseEnter('link2')}
                  onMouseLeave={() => handleMouseLeave('link2')}
                >
                  2. Understanding 'Das Rela Es'
                  {(hoveredItem === 'link2') && (
                    <span
                      onMouseEnter={() => handleMouseEnter('link2')}
                      onMouseLeave={() => handleMouseLeave('link2')}
                      className={styles.svgWrapper}
                    >
                      <SVGIcon className={styles.svgIcon} />
                    </span>
                  )}
                </a>
              </li>
              <ol className={styles.subsection}>
                <li className={styles.item}>
                  <a 
                    href='#3' 
                    className={styles.link}
                    onMouseEnter={() => handleMouseEnter('subLink1')}
                    onMouseLeave={() => handleMouseLeave('subLink1')}
                  >
                    2.1. Origins and Definition
                    {(hoveredItem === 'subLink1') && (
                      <span
                        onMouseEnter={() => handleMouseEnter('subLink1')}
                        onMouseLeave={() => handleMouseLeave('subLink1')}
                        className={styles.svgWrapper}
                      >
                        <SVGIcon className={styles.svgIcon} />
                      </span>
                    )}
                  </a>
                </li>
                <li className={styles.item}>
                  <a 
                    href='#4' 
                    className={styles.link}
                    onMouseEnter={() => handleMouseEnter('subLink2')}
                    onMouseLeave={() => handleMouseLeave('subLink2')}
                  >
                    2.2. Key Principles and Concepts
                    {(hoveredItem === 'subLink2') && (
                      <span
                        onMouseEnter={() => handleMouseEnter('subLink2')}
                        onMouseLeave={() => handleMouseLeave('subLink2')}
                        className={styles.svgWrapper}
                      >
                        <SVGIcon className={styles.svgIcon} />
                      </span>
                    )}
                  </a>
                </li>
              </ol>
            </ol>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
