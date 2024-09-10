import React from 'react'
import styles from './hub.module.scss'
import SearchIcon from '@public/search.svg'
import ClearIcon from '@public/close.svg'
import ArrRightIcon from '@public/arrowright.svg'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.hub}>
      <div className='container'>
          <h2 className={styles.title}>All materials</h2>
          <h4 className={styles.subtitle}>Look for the right training materials</h4>
          <div className={styles.searchBody}>
              <div className={styles.inputWrapper}>
                    <SearchIcon className={styles.searchIcon} width={28} height={20}/>  
                        <input 
                        id="login"
                        placeholder="Please enter the topic..." 
                        className={styles.inputSearch}
                        />
                    <ClearIcon className={styles.clearIcon} width={18} height={20}/>
                </div>
          </div>
          <div className={styles.body}>
            <div className={styles.filters}>
                <div className={styles.projects}>
                    <Link href='/projects' className={styles.projectsLink}>Projects <ArrRightIcon className={styles.arrowIcon} width={22} height={16}/></Link>
                    <div className={styles.projectsTitle}>Learning projects:</div>
                    <ul className={styles.projectsList}>
                        <li className={styles.projectsItem}><Link className={styles.link} href='#'>Essay</Link></li>
                        <li className={styles.projectsItem}><Link className={styles.link} href='#'>Report</Link></li>
                        <li className={styles.projectsItem}><Link className={styles.link} href='#'>Presentation</Link></li>
                        <li className={styles.projectsItem}><Link className={styles.link} href='#'>Term Paper</Link></li>
                    </ul>
                </div>
                <div className={styles.tasks}>
                <Link href='/projects' className={styles.tasksLink}>Tasks <ArrRightIcon className={styles.arrowIcon} width={22} height={16}/></Link>
                    <div className={styles.tasksTitle}>Task bank:</div>
                    <ul className={styles.tasksList}>
                        <li className={styles.tasksItem}><Link className={styles.link} href='#'>Mathematics</Link></li>
                        <li className={styles.tasksItem}><Link className={styles.link} href='#'>Physics</Link></li>
                        <li className={styles.tasksItem}><Link className={styles.link} href='#'>Chemistry</Link></li>
                        <li className={styles.tasksItem}><Link className={styles.link} href='#'>Biology</Link></li>
                        <li className={styles.tasksItem}><Link className={styles.link} href='#'>Geography</Link></li>
                        <li className={styles.tasksItem}><Link className={styles.link} href='#'>History</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.cartWrapper}>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                    <div className={styles.cart}>
                        <h4 className={styles.cartTitle}>The sun sets behind the mountains, painting the sky with vibrant hues of orangess.</h4>
                        <div className={styles.infoWrapper}>
                            <div className={styles.type}>Project</div>
                            •
                            <div className={styles.date}>10 September</div>
                        </div>
                    </div>
                </div>
                <div className={styles.showMore}>Show More</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default page
