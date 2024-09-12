import React from 'react'
import styles from './askquestion.module.scss'

const AskQuestion = () => {
  return (
    <div className={styles.ask}>
      <div className={styles.title}>Any questions on the solution?</div>
      <input className={styles.askInput} type="text" placeholder="Write me and I'll help you figure it out!"/>
    </div>
  )
}

export default AskQuestion
