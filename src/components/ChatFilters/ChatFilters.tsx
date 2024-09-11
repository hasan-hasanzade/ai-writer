'use client'

import React from 'react'
import styles from './chatfilter.module.scss'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const ChatFilters = () => {
  return (
    <div className={styles.chatFilter}>
     <div className={styles.body}>
        <div className={styles.main}>
            <div className={styles.title}>Algebra</div>
            <div className={styles.options}>
            <Select 
                    options={options} 
                    defaultValue={options[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
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
                        padding: '0px'
                        })
                    }}
                />
            <Select 
                    options={options} 
                    defaultValue={options[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
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
                <Select 
                    options={options} 
                    defaultValue={options[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
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
        </div>
        <div className={styles.user}>
            <div className={styles.name}>Name</div>
            <div className={styles.image}></div>
        </div>
     </div>
    </div>
  )
}

export default ChatFilters
