import React from 'react';
import styles from './progress.module.scss';


interface ProgressBarProps {
  progress: number; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.already}>Already filled</div>
      <div className={styles.percent}>{progress}%</div>
      <div className={styles.bar}>
        <div
          className={styles.barContainer}
          style={{
            position: 'relative',
            backgroundColor: '#F5F8FD',
            borderRadius: '12px',
            height: '8px',
            overflow: 'hidden',
          }}
        >

          <div
            className={styles.barGoal}
            style={{
              backgroundColor: '#BBE8C8',
              width: '50%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <div
            className={styles.barCurrent}
            style={{
              backgroundColor: '#00B92D',
              width: `${progress}%`,
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
              transition: 'width 0.5s ease-in-out',
            }}
          />
        </div>
      </div>
      <div className={styles.bonus}>+40% for a completed comment</div>
    </div>
  );
};

export default ProgressBar;
