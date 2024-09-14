'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import AuthPopup from '../AuthPopup/AuthPopup';
import LogoIcon from '@public/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.navWrap}>
              <div className={styles.logo}>
                <Link href="/"><LogoIcon width={60} height={24} /></Link>
              </div>
              <nav className={styles.nav}>
                <ul className={styles.menu}>
                 <li className={styles.item}>
                    <Link className={styles.navLink} href="/ai-tutor">AI Tutor</Link>
                  </li>
                  <li className={styles.item}>
                    <Link className={styles.navLink} href="/write">Write</Link>
                  </li>
                  <li className={styles.item}>
                    <Link className={styles.navLink} href="/homework">Solve homework</Link>
                  </li>
                  <li className={`${styles.item} ${styles.dropdown}`} ref={dropdownRef}>
                    <span className={styles.navLink} onClick={toggleDropdown}>
                      Text tools
                    </span>
                    <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
                      <li className={styles.dropdownItem}>
                        <Link href="/rewrite">Rewrite</Link>
                      </li>
                      <li className={styles.dropdownItem}>
                        <Link href="/summarize">Summarize</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.profileDropdown} onClick={toggleProfileDropdown} ref={profileDropdownRef}>
              <div className={styles.profileName}>Ivan</div>
              <div className={styles.profileImg}><Image src='/user.svg' width={25} height={25} alt='user' /></div>
              <ul className={`${styles.dropdownMenu} ${isProfileDropdownOpen ? styles.open : ''}`}>
                <li className={styles.dropdownItem}>
                  <Link href="/projects">My projects</Link>
                </li>
                <li className={styles.dropdownItem}>
                  <div>Log out</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <AuthPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default Navbar;
