'use client'

import React, { useState, useEffect } from 'react';
import styles from './quiz.module.scss';
import { Range } from "react-range";
import Select, { SingleValue } from 'react-select';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

interface OptionType {
  value: string;
  label: string;
}

const page = () => {
  const [values, setValues] = useState([500]);
  const [progress, setProgress] = useState(5); // Initial progress of 10%
  const [selectedType, setSelectedType] = useState<OptionType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<OptionType | null>(null);

  const typeOptions: OptionType[] = [
    { value: 'training-project', label: 'Training project' },
    { value: 'composition', label: 'Composition' },
    { value: 'essay', label: 'Essay' },
    { value: 'coursework', label: 'Coursework' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'presentation-text', label: 'Presentation Text' },
    { value: 'article', label: 'Article' },
    { value: 'other', label: 'Other' },
  ];

  const levelOptions: OptionType[] = [
    { value: 'elementary-school', label: 'Elementary School' },
    { value: 'middle-school', label: 'Middle School' },
    { value: 'high-school', label: 'High School' },
    { value: 'college', label: 'College (Undergraduate)' },
    { value: 'graduate', label: 'Graduate School' },
    { value: 'professional', label: 'Professional' },
  ];

  useEffect(() => {
    let newProgress = 5;
    if (values[0] > 500) newProgress += 15; 
    if (selectedType) newProgress += 15;
    if (selectedLevel) newProgress += 15;
    setProgress(Math.min(newProgress, 50)); 
  }, [values, selectedType, selectedLevel]);

  const handleTypeChange = (newValue: SingleValue<OptionType>) => {
    setSelectedType(newValue);
  };

  const handleLevelChange = (newValue: SingleValue<OptionType>) => {
    setSelectedLevel(newValue);
  };

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>
              Clarifying questions to compose the most appropriate prompt for qvalo AI
            </div>

            <div className={styles.textSize}>
              <div className={styles.sizeTitle}>Specify the text size:</div>
              <div className={styles.minMax}>
                <span className={styles.minValue}>Min: 500</span>
                <span className={styles.maxValue}>Max: 12000</span>
              </div>
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
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        height: '24px',
                        width: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        border: '2px solid #2684FC',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-30px',
                          color: '#000',
                          background: '#2684FC',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        {values[0]}
                      </div>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#2684FC',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  )}
                />
              </div>
              <div className={styles.pageCount}>
                Pages Count: <span>{(values[0] / 250).toFixed(0)}</span>
              </div>
            </div>

            <div className={styles.textType}>
              <div className={styles.typeTitle}>Select the text type:</div>
              <Select
                options={typeOptions}
                onChange={handleTypeChange}
                defaultValue={typeOptions[0]}
                components={{ IndicatorSeparator: () => null }}
                styles={{
                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: '100%',
                    marginBottom: '20px',
                    padding: '0',
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'transparent' : 'transparent',
                    boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                    '&:hover': { backgroundColor: '#f7f9fc' },
                    borderRadius: '12px',
                    height: '56px',
                    padding: '0 8px',
                    lineHeight: '1.5',
                    backgroundColor: '#EEF1F5',
                    cursor: 'pointer',
                    svg: {
                      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    },
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                    color: state.isSelected ? '#fff' : '#333',
                    '&:hover': { backgroundColor: '#f1f1f1' },
                    borderRadius: '4px',
                    padding:'16px'
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    zIndex: 9999,
                    borderRadius: '8px',
                    padding: '8px',
                  }),
                }}
              />
            </div>

            <div className={styles.textLevel}>
              <div className={styles.levelTitle}>Select the text level:</div>
              <Select
                options={levelOptions}
                onChange={handleLevelChange}
                defaultValue={levelOptions[0]}
                components={{ IndicatorSeparator: () => null }}
                styles={{
                  container: (baseStyles) => ({
                    ...baseStyles,
                    width: '100%',
                    marginBottom: '20px',
                    padding: '0',
                  }),
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'transparent' : 'transparent',
                    boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                    '&:hover': { backgroundColor: '#f7f9fc' },
                    borderRadius: '12px',
                    height: '56px',
                    padding: '0 8px',
                    lineHeight: '1.5',
                    backgroundColor: '#EEF1F5',
                    cursor: 'pointer',
                    svg: {
                      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    },
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                    color: state.isSelected ? '#fff' : '#333',
                    '&:hover': { backgroundColor: '#f1f1f1' },
                    borderRadius: '4px',
                    padding:'16px'
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    zIndex: 9999,
                    borderRadius: '12px',
                    padding: '8px',
                  }),
                }}
              />
            </div>

            <div className={styles.textComment}>
              <div className={styles.commentTitle}>Write any comments that need to be addressed:</div>
              <div className={styles.comment}>
                <textarea className={styles.commentArea} placeholder="Enter your comment..."></textarea>
              </div>
            </div>

            <div className={styles.btn}>
              <Link className={styles.btnContinue} href="/second-quiz">Continue</Link>
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default page;
