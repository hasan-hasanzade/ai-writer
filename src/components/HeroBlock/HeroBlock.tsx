'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './hero.module.scss';
import TextTransition, { presets } from 'react-text-transition';
import UploadIcon from '@public/upload-image.svg';

const TEXTS = ['an essay', 'a report', 'a term paper', 'a presentation'];

interface HeroBlockProps {
  isFocused?: boolean;
  isUploaded?: boolean;
  isSearched?: boolean;
  isTutor?: boolean;
}

const HeroBlock: React.FC<HeroBlockProps> = ({ isFocused = false, isUploaded = false,  isSearched = false, isTutor = false}) => {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uploadAreaRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // Handle file drop
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setUploadedFile(event.dataTransfer.files[0]);
    }
  };

  // Handle file selection
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
    }
  };

  // Handle paste
  const handlePaste = (event: React.ClipboardEvent) => {
    const file = event.clipboardData.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  useEffect(() => {
    if (uploadAreaRef.current) {
      uploadAreaRef.current.addEventListener('paste', handlePaste as any);
    }

    return () => {
      if (uploadAreaRef.current) {
        uploadAreaRef.current.removeEventListener('paste', handlePaste as any);
      }
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Create using a neural network:
              <TextTransition className={styles.transit} springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <h2 className={styles.subtitle}>
              Generate text with a table of contents, with a uniqueness of over 80%.
            </h2>
          </div>
          <div className={styles.searchContent}>
            {
              isSearched ? 
              <div className={styles.inputWrapper}>
                <input
                  id="login"
                  placeholder="Please enter the topic..."
                  className={styles.inputSearch}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  ref={inputRef}
                />
              </div> : null
            }
            {isUploaded ? (
              <label
                className={styles.uploadBar}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                ref={uploadAreaRef}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
                <div className={styles.uploadBody}>
                  <UploadIcon width={35} height={35} />
                  <div className={styles.uploadText}>
                    Drag <span className={styles.uploadHover}>Image</span> or Click Here to upload
                  </div>
                  <div className={styles.uploadText}>
                    Ctrl <span className={styles.keyboard}>Ctrl</span> +{' '}
                    <span className={styles.keyboard}>v</span> to paste
                  </div>
                  <div className={styles.mobileText}>Click Here to upload Image</div>
                  {uploadedFile && (
                  <div className={styles.fileName}>
                    Uploaded: {uploadedFile.name}
                  </div>
                )}
                </div>
              </label>
            ) : null}
              {
                isTutor ?    <div className={styles.subjects}>
                <div className={styles.subjectBody}>
                  <div className={styles.item}>
                    <div className={styles.name}>Mathematics</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>Biology</div>
                  </div>
                  
                  <div className={styles.item}>
                    <div className={styles.name}>Geography</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>Physics</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>Chemistry</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>Literature</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>Russian Language</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>English Language</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.name}>Other</div>
                  </div>
                </div>
              </div> : null
              }
            <div className={styles.searchBtn}>
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
    </section>
  );
};

export default HeroBlock;
