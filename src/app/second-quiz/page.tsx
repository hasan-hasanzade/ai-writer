import React from 'react'
import styles from './sec-quiz.module.scss'

const page = () => {
  return (
    <div className={styles.secQuiz}>
      <div className="container">
        <div className={styles.body}>
            <h2 className={styles.title}>Review & edit your table of contents</h2>
            <div className={styles.content}>
                <div className={styles.heading}>The Impact of World War II on Global Politics and Society</div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
