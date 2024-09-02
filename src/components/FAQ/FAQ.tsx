import React from 'react'
import styles from './faq.module.scss'
import Accordion from '../Accordion/Accordion'

const FAQ = () => {
  return (
    <section className={styles.faq}>
        <div className="container">
            <div className={styles.body}>
                <h2 className={styles.title}>F.A.Q</h2>
               
            <div className={styles.content}>
                <Accordion 
                question='Lorem ipsum dolor sit amet consectetur adipisicing?' 
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eos exercitationem dolor nulla quo excepturi."
                />
              <Accordion 
                question='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, dolor.?' 
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illum sint, molestiae rem quos ut sit tempora praesentium impedit doloribus.."
                />
              <Accordion 
                question='Lorem ipsum dolor sit amet?' 
                answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium totam fuga esse? Voluptas explicabo neque non dolore, totam dolor."
                />
              <Accordion 
                question='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima?' 
                answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quaerat, dolores tempore rem necessitatibus quidem iure totam!"
                />
              <Accordion 
                question='Lorem ipsum dolor sit?' 
                answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae animi autem ratione."
                />
              <Accordion 
                question='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque?' 
                answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. AtLorem ipsum dolor sit amet consectetur, adipisicing elit. Atque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque.."
                />
              <Accordion 
                question='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa iusto deserunt?' 
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa iusto blanditiis deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa iusto blanditiis deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa iusto blanditiis deserunt?"
                />
                <Accordion 
                question='Lorem ipsum dolor sit, amet consect Dolor consequuntur notrum eveniet?' 
                answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor consequuntur nostrum eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor consequuntur nostrum eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor consequuntur nostrum eveniet.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor consequuntur nostrum eveniet."
                />
                <Accordion 
                question='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima?' 
                answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quaerat, dolores tempore rem necessitatibus quidem iure totam!"
                />
            </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ
