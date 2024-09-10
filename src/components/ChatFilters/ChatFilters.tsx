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
                <Select options={options} />
                <Select options={options} />
                <Select options={options} />
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
