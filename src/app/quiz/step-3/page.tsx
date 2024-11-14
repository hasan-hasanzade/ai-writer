'use client'

import React, { useState, useEffect, Suspense } from 'react';
import styles from '../quiz.module.scss';
import Link from 'next/link';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Select, { SingleValue } from 'react-select';
import { useSearchParams } from 'next/navigation';

interface OptionType {
  value: string;
  label: string;
}

const PageContent = () => {
  const searchParams = useSearchParams();
  const initialProgress = parseInt(searchParams.get('progress') || '0', 10);

  const [progress, setProgress] = useState(initialProgress);
  const [typeSelected, setTypeSelected] = useState<SingleValue<OptionType>>(null);
  const [levelSelected, setLevelSelected] = useState<SingleValue<OptionType>>(null);

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
    let newProgress = initialProgress;
    if (typeSelected) newProgress += 10;
    if (levelSelected) newProgress += 10;
    setProgress(newProgress);
  }, [typeSelected, levelSelected, initialProgress]);

  const handleTypeChange = (selectedOption: SingleValue<OptionType>) => {
    setTypeSelected(selectedOption);
  };

  const handleLevelChange = (selectedOption: SingleValue<OptionType>) => {
    setLevelSelected(selectedOption);
  };

  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.quizBody}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>
              Clarifying questions to compose the most appropriate prompt for qvalo AI - Step 3
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
                    padding: '16px',
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
                    padding: '16px',
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

            <div className={styles.btn}>
              <Link className={styles.btnBack} href={`/quiz/step-2`}>
                Back
              </Link>
              <Link className={styles.btnContinue} href={`/quiz/step-4?progress=${progress}`}>
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
