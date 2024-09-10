'use client'

import { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import AuthPopup from '../AuthPopup/AuthPopup';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.navWrap}>
              <div className={styles.logo}>
                <Link href='/'>qvalo</Link>
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
                    <Link className={styles.navLink} href='/ai-tutor'>AI Tutor</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.login}>
              <a href='#' onClick={handleLoginClick}>Log in</a>
            </div>
          </div>
        </div>
      </header>
      <AuthPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default Navbar;
