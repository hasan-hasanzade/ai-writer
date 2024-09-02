import React from 'react'
import styles from './hero.module.scss'
import SearchIcon from '@public/search.svg'

const HeroBlock = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.body}>
            <div className={styles.textContent}>
                <h1 className={styles.title}>Create in 40 seconds using a neural network: an essay, a report, a term paper, a presentation" - I'd like the last word in the title to be dynamic (so that it changes: essay, paper, term paper, report, thesis, presentation text, project, article) - as an example, you can look at the main page of Alice (Yandex neural network).</h1>
                <h2 className={styles.subtitle}>Generate text with a table of contents, with a uniqueness of over 80%.</h2>
            </div>
            <div className={styles.searchContent}>
                <div className={styles.inputWrapper}>
                    <SearchIcon className={styles.searchIcon} width={22} height={24}/>
                    <input 
                    id="login"
                    placeholder="Please enter the topic..." 
                    className={styles.inputSearch}
                    />
                </div>
                <div className={styles.searchBtn}>
                    <div className={styles.loader + ' ' + styles['--7']}></div>
                    <button>Create</button>
                </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBlock