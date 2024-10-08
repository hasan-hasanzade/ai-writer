'use client'

import React from 'react'
import styles from './plans.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';
import GiftIcon from '@public/gift.svg'
import CheckedIcon from '@public/check.svg'

const page = () => {
  return (
    <div className={styles.plans}>
      <div className="container">
        <h1 className={styles.title}>Pick your perfect plan</h1>
        <Tabs>
            <TabList className={styles.tabBody}>
            <div className={styles.tabs}>
              <Tab as="button" role="tab" className={styles.monthTab} selectedClassName={styles.activeTab}>
                For a month
              </Tab>
              <Tab as="button" role="tab" className={styles.yearTab} selectedClassName={styles.activeTab}>
                For a year <span className={styles.discount}>-15%</span>
              </Tab>
            </div>
            </TabList>

            <TabPanel>
             <div className={styles.plansBody}>
                <div className={styles.itemContent}>
                    <div className={styles.name}>Access to qvalo</div>
                    <div className={styles.desc}>Discover all the functions of the service</div>
                    <ul className={styles.list}>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Ai tutor</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Writing</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Companion</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Homework helper</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Ai tutor</li>
                    </ul>
                    <div className={styles.link}><Link  href='#'>Detailed conditions</Link></div>
                    <div className={styles.gift}>
                      <div className={styles.free}>+ 2 weeks free <br /> for new users</div>
                      <GiftIcon width={24} height={24}/>
                    </div>
                    <div className={styles.price}>
                      9$ per month
                    </div>
                    <button className={styles.btn}>
                      Select Plan
                    </button>
                </div>
             </div>
            </TabPanel>

            <TabPanel>
            <div className={styles.plansBody}>
                <div className={styles.itemContent}>
                    <div className={styles.name}>Access to qvalo</div>
                    <div className={styles.desc}>Discover all the functions of the service</div>
                    <ul className={styles.list}>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Ai tutor</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Writing</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Companion</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Homework helper</li>
                        <li className={styles.item}><CheckedIcon className={styles.checkedIcon}/> Ai tutor</li>
                    </ul>
                    <div className={styles.link}><Link  href='#'>Detailed conditions</Link></div>
                    <div className={styles.gift}>
                      <div className={styles.free}>+ 2 weeks free <br /> for new users</div>
                      <GiftIcon width={24} height={24}/>
                    </div>
                    <div className={styles.price}>
                      99$ per year
                    </div>
                    <button className={styles.btn}>
                      Select Plan
                    </button>
                </div>
             </div>
            </TabPanel>

          </Tabs>
      </div>
    </div>
  )
}

export default page
