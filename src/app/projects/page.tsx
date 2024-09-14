'use client'

import React from 'react'
import styles from './projects.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';

const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength).trim() + '...';
  }
  return title;
};

const page = () => {
  return (
    <section className={styles.myProjects}>
      <div className="container">
        <div className={styles.body}>
          <Tabs>
            <TabList>
              <div className={styles.tabs}>
                <Tab as="button" role="tab">All</Tab>
                <Tab as="button" role="tab">Free</Tab>
                <Tab as="button" role="tab">Payed</Tab>
              </div>
              <Link href='#' className={styles.create}>Create</Link>
            </TabList>

            <TabPanel>
              <div className={styles.projectsContent}>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
              </div>
            </TabPanel>

            <TabPanel>
              <div className={styles.projectsContent}>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
              </div>
            </TabPanel>

            <TabPanel>
              <div className={styles.projectsContent}>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
                <article className={styles.item}>
                  <h3 className={styles.title}>
                    {truncateTitle('Sagan and deGrasse Ipsum: the magic of the cosmos in your design', 55)}
                  </h3>
                  <p className={styles.text}>The universe is full of amazing and interesting phenomena, as you can clearly tell by any Neil deGrasse Tyson book ever to take advantage of that, consider using either Sagan Ipsum or deGrasse Ipsum. Both are guaranteed to be far more interesting than Lorem Ipsum.</p>
                  <time className={styles.date} dateTime="2023-09-12">2d ago</time>
                </article>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default page
