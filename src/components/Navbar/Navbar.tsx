'use client'
import { useState, useEffect } from 'react'
import styles from './navbar.module.scss'
import LogoIcon from '@public/logoipsum.svg'
import Link from 'next/link'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
       <div className="container">
        <div className={styles.body}>
            <div className={styles.logo}>
                <Link href='/'><LogoIcon width={100} height={30}/></Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.item}>
                        <Link className={styles.navLink} href='/write'>Write</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.navLink} href='/rewrite'>Rewrite</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.navLink} href='/summarize'>Summarize</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.navLink} href='/solve'>Solve homework</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.navLink} href='/ai-tuto'>AI Tutor</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.login}>
                <Link href='#'>Log in</Link>
            </div>
        </div>
       </div>
    </header>
  )
}

export default Navbar
