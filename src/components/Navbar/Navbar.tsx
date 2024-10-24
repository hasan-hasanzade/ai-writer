'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import AuthPopup from '../AuthPopup/AuthPopup';
import LogoIcon from '@public/logo.svg';
import Image from 'next/image';
import ChavronIcon from '@public/arrdown.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 992) {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (window.innerWidth >= 992) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeaveDropdown = () => {
    if (window.innerWidth >= 992) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 0);
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
              <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <ul className={styles.menu}>
                  <li className={styles.item}>
                    <Link className={styles.navLink} href="/ai-dashboard">AI Tutor</Link>
                  </li>
                  <li className={styles.item}>
                    <Link className={styles.navLink} href="/write">Write</Link>
                  </li>
                  <li className={styles.item}>
                    <Link className={styles.navLink} href="/homework">Solve homework</Link>
                  </li>
                  <li
                    className={`${styles.item} ${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <span className={styles.navLink} onClick={toggleDropdown}>
                      Text tools <ChavronIcon className={styles.chevronIcon} />
                    </span>
                    <div className={styles.overlay}>
                      <ul className={styles.dropdownMenu}>
                        <li className={styles.dropdownItem}>
                          <Link href="/rewrite">Rewrite</Link>
                        </li>
                        <li className={styles.dropdownItem}>
                          <Link href="/summarize">Summarize</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.actions}>
              <div className={styles.profileDropdown} onClick={toggleProfileDropdown} ref={profileDropdownRef}>
                <div className={styles.profileName}>Ivan</div>
                <div className={styles.profileImg}><Image src='/user.svg' width={25} height={25} alt='user' /></div>
                <ul className={`${styles.dropdownMenu} ${isProfileDropdownOpen ? styles.open : ''}`}>
                  <li className={styles.dropdownItem}>
                    <Link href="/projects">My projects</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="/profile">Settings</Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <div>Log out</div>
                  </li>
                </ul>
              </div>
              <div className={styles.burger} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className={styles.navPane}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>
          <nav>
            <ul>
              <li onClick={toggleMenu}><Link href="/ai-dashboard">AI Tutor</Link></li>
              <li onClick={toggleMenu}><Link href="/write">Write</Link></li>
              <li onClick={toggleMenu}><Link href="/homework">Solve homework</Link></li>
              <li onClick={toggleMenu}><Link href="/rewrite">Rewrite</Link></li>
              <li onClick={toggleMenu}><Link href="/summarize">Summarize</Link></li>
            </ul>
          </nav>
        </div>
      )}

      <AuthPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
};

export default Navbar;
