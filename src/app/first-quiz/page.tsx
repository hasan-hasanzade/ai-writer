'use client'

import React from 'react'
import styles from './quiz.module.scss'
import { Range } from "react-range";
import Select from 'react-select';
import Link from 'next/link';


const page = () => {
    const [values, setValues] = React.useState([500]);

    const typeOptions = [
        { value: 'training-project', label: 'Training project' },
        { value: 'composition', label: 'Composition' },
        { value: 'essay', label: 'Essay' },
        { value: 'coursework', label: 'Coursework' },
        { value: 'abstract', label: 'Abstract' },
        { value: 'diploma', label: 'Diploma' },
        { value: 'presentation-text', label: 'Presentation Text' },
        { value: 'article', label: 'Article' },
        { value: 'other', label: 'Other' },
      ]
      const levelOptions = [
        { value: 'training-project', label: 'Elementary School' },
        { value: 'composition', label: 'Middle School' },
        { value: 'essay', label: 'High School' },
        { value: 'coursework', label: 'College (Undergraduate)' },
        { value: 'abstract', label: 'Graduate School' },
        { value: 'diploma', label: 'Professional' },
      ]
  return (
    <div className={styles.quiz}>
      <div className="container">
        <div className={styles.body}>
            <h2 className={styles.title}>Follow-up questions</h2>
            <div className={styles.subtitle}>Clarifying questions to compose the most appropriate promt for qvalo AI</div>
            <div className={styles.textSize}>
                <div className={styles.sizeTitle}>
                    Specify the text size:
                </div>
                <div className={styles.minMax}>
                    <span className={styles.minValue}>Min: 500</span>
                    <span className={styles.maxValue}>Max: 12000</span>
                </div>
                <div className={styles.wordRange}>
                <Range
                    label="Select your value"
                    step={1}
                    min={500}
                    max={12000}
                    values={values}
                    onChange={(newValues) => setValues(newValues.map(Math.round))} // Устанавливаем только целые значения
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
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
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
                            {Number.isInteger(values[0]) ? values[0] : values[0].toFixed(1)}
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
                <div className={styles.pageCount}>Pages Count: <span>5</span></div>
            </div>
            <div className={styles.textType}>
                <div className={styles.typeTitle}>
                    Select the text type:
                </div>
                <Select 
                    options={typeOptions} 
                    defaultValue={typeOptions[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
                            marginBottom: '20px',
                            padding: '0'
                          }),
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'transparent' : 'transparent',
                        boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                        '&:hover': { backgroundColor: '#f7f9fc' },
                        borderRadius: '12px',
                        height: '56px',
                        padding:  '0 8px',
                        // fontSize: '16px',
                        lineHeight: '1.5',
                        transition: 'all 0.2s ease',
                        backgroundColor: '#EEF1F5',
                        cursor: 'pointer',
                        svg: {
                            transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }
                        }),
                        option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                        color: state.isSelected ? '#fff' : '#333',
                        '&:hover': { backgroundColor: '#f1f1f1' },
                        borderRadius: '8px',
                        }),
                        menu: (baseStyles) => ({
                        ...baseStyles,
                        zIndex: 9999, 
                        borderRadius: '12px',
                        padding: '4px'
                        })
                    }}
                />
            </div>
            <div className={styles.textLevel}>
                <div className={styles.levelTitle}>
                    Select the text level:
                </div>
                <Select 
                    options={levelOptions} 
                    defaultValue={levelOptions[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
                            marginBottom: '20px',
                            padding: '0'
                          }),
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'transparent' : 'transparent',
                        boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                        '&:hover': { backgroundColor: '#f7f9fc' },
                        borderRadius: '12px',
                        height: '56px',
                        // fontSize: '16px',
                        padding:  '0 8px',
                        cursor: 'pointer',
                        lineHeight: '1.5',
                        transition: 'all 0.2s ease',
                        backgroundColor: '#EEF1F5',
                        svg: {
                            transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }
                        
                        }),
                        option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                        color: state.isSelected ? '#fff' : '#5a5a5a',
                        '&:hover': { backgroundColor: '#f1f1f1' },
                        borderRadius: '8px',
                        
                        }),
                        menu: (baseStyles) => ({
                        ...baseStyles,
                        zIndex: 9999, 
                        borderRadius: '12px',
                        padding: '4px'
                        })
                    }}
                />
            </div>
            <div className={styles.textComment}>
                <div className={styles.commentTitle}>
                    Write any comments that need to be addressed:
                </div>
                <div className={styles.comment}>
                    <textarea className={styles.commentArea} placeholder='Enter your comment...'></textarea>
                </div>
            </div>
            <div className={styles.btn}>
                <Link className={styles.btnContinue} href='/second-quiz'>Continue</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
