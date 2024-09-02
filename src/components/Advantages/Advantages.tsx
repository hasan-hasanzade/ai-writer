import React from 'react'
import styles from './advantages.module.scss'

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.title}>Advantages</div>
            <div className={styles.miniBoxes}>
                <div className={styles.miniBox}>
                    <h4 className={styles.boxTitle}>Heading</h4>
                    <div className={styles.boxText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis velit illo! Sint, cupiditate repellendus?</div>
                </div>
                <div className={styles.miniBox}>
                    <h4 className={styles.boxTitle}>Heading</h4>
                    <div className={styles.boxText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis velit illo! Sint, cupiditate repellendus?</div>
                </div>
                <div className={styles.miniBox}>
                    <h4 className={styles.boxTitle}>Heading</h4>
                    <div className={styles.boxText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis velit illo! Sint, cupiditate repellendus?</div>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>  
                    <h4 className={styles.boxTitle}>Heading</h4>
                    <div className={styles.boxText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis velit illo! Sint, cupiditate repellendus?Sint, cupiditate repellendus?Sint, cupiditate repellendus?Sint, cupiditate repellendus?</div>
                </div>
                <div className={styles.box}>  
                    <h4 className={styles.boxTitle}>Heading</h4>
                    <div className={styles.boxText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis velit illo! Sint, cupiditate repellendus?Sint, cupiditate repellendus?Sint, cupiditate repellendus?Sint, cupiditate repellendus?</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages
