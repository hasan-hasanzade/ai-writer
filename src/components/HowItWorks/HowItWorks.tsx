import React from 'react'
import styles from './howitworks.module.scss'

const HowItWorks = () => {
  return (
    <section className={styles.how}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.title}>How It Works</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.number}>1</div>
                    <div className={styles.text}>
                        Specify the topic of the academic work that needs to be created.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>2</div>
                    <div className={styles.text}>
                        We will create a work structure with a brief description of the chapters.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.number}>3</div>
                    <div className={styles.text}>
                        Generate a completed work with a breakdown into chapters.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
