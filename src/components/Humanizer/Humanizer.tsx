'use client';

import React, { useState, useEffect } from 'react';
import LaptopIcon from '@public/laptop-avatar.svg';
import CopyIcon from '@public/copy-icon.svg';
import styles from './humanizer.module.scss';

const Humanizer = () => {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [generatedText, setGeneratedText] = useState(
    'Get a taste of AI-powered rewriting tool. This cutting-edge tool rewrites your text, ensuring it\'s unique and engaging while preserving the original meaning.'
  );
  const [generatedWordCount, setGeneratedWordCount] = useState(0);
  const [isHumanized, setIsHumanized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  useEffect(() => {
    const words = generatedText.trim().split(/\s+/).filter(Boolean);
    setGeneratedWordCount(words.length);
  }, [generatedText]);


  const handleHumanizeClick = () => {
    setIsLoading(true);

    let percentage = 0;
    const interval = setInterval(() => {
      percentage += 10;

      if (percentage === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setGeneratedText(`Humanized version of: ${inputText}`);
          setIsLoading(false);
          setIsHumanized(true); 
        }, 100); 
      }
    }, 100);
  };

  return (
    <div className={styles.rewrite}>
      <div className="container">
        <h2 className={styles.title}>Humanizer</h2>
        <div className={styles.subtitle}>Humanize Text</div>
        <div className={styles.body}>
          <div className={styles.human}>
            <div className={styles.humanBody}>
              <div className={styles.humanText}>
                <textarea
                  className={styles.humanTextArea}
                  placeholder="Enter or paste your text here and click the “Humanize” button"
                  value={inputText}
                  onChange={handleTextChange}
                />
              </div>
              <div className={styles.humanBar}>
                <div className={styles.words}>
                  <span>Words</span>
                  <div className={styles.count}>{wordCount}/200</div>
                </div>
                <div className={styles.btn} onClick={handleHumanizeClick}>
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
                  </svg>
                  <button>Humanize</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ai}>
            <div className={styles.aiBody}>
              {isLoading ? (
                <div className={styles.loadingContainer}>
                  <div className={styles.loader}>
                  </div>
                </div>
              ) : !isHumanized ? (
                <div className={styles.aiPlaceholder}>
                  <LaptopIcon width={160} height={95} />
                  <div className={styles.aiTitle}>Let’s get started</div>
                  <div className={styles.aiSubtitle}>
                    Add your text, click <b>Humanize</b>, and your Humanized text will appear here.
                  </div>
                </div>
              ) : (
                <div className={styles.aiText}>
                  <div className={styles.generatedText}>
                    <span>{generatedText}</span>
                  </div>
                  <div className={styles.aiBar}>
                    <div className={styles.words}>
                      <span>Words</span>
                      <div className={styles.count}>{generatedWordCount}/200</div>
                    </div>
                    <div className={styles.copy}>
                      <CopyIcon width={22} height={22} />
                      <span>Copy</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humanizer;
