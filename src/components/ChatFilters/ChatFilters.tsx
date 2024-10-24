'use client'

import React, {useState, useEffect} from 'react'
import styles from './chatfilter.module.scss'
import Select from 'react-select'
import MenuIcon from '@public/chat-menu.svg'
import SettingsIcon from '@public/chat-settings.svg'
import LogoIcon from '@public/logo.svg'
import Link from 'next/link'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



const ChatFilters = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSettingSidebarOpen, setSettingSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSettingSidebar = () => {
    setSettingSidebarOpen(!isSettingSidebarOpen);
    if (isSidebarOpen) setSidebarOpen(false);
  };

  const handleOutsideClick = (e:any) => {
    if (isSidebarOpen && !e.target.closest(`.${styles.mobileSidebar}`)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSidebarOpen]);
  
  return (
    <div className={styles.chatFilter}>
     <div className={styles.body}>
        <div className={styles.main}>
            <div className={styles.title}>Algebra</div>
            <div className={styles.options}>
            <Select 
                    options={options} 
                    defaultValue={options[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
                            padding: '0'
                          }),
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'transparent' : 'transparent',
                        boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                        '&:hover': { backgroundColor: '#f7f9fc' },
                        borderRadius: '12px',
                        height: '48px',
                        padding:  '0 8px',
                        // fontSize: '16px',
                        width: '206px',
                        lineHeight: '1.5',
                        transition: 'all 0.2s ease',
                        backgroundColor: '#EEF1F5',
                        cursor: 'pointer',
                        svg: {
                            transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }
                        }),
                        option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                        color: state.isSelected ? '#fff' : '#333',
                        '&:hover': { backgroundColor: '#f1f1f1' },
                        borderRadius: '8px',
                        }),
                        menu: (baseStyles) => ({
                        ...baseStyles,
                        zIndex: 9999, 
                        borderRadius: '12px',
                        padding: '0px'
                        })
                    }}
                />
            <Select 
                    options={options} 
                    defaultValue={options[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
                            padding: '0'
                          }),
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'transparent' : 'transparent',
                        boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                        '&:hover': { backgroundColor: '#f7f9fc' },
                        borderRadius: '12px',
                        height: '48px',
                        padding:  '0 8px',
                        // fontSize: '16px',
                        lineHeight: '1.5',
                        transition: 'all 0.2s ease',
                        backgroundColor: '#EEF1F5',
                        width: '206px',
                        cursor: 'pointer',
                        svg: {
                            transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }
                        }),
                        option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                        color: state.isSelected ? '#fff' : '#333',
                        '&:hover': { backgroundColor: '#f1f1f1' },
                        borderRadius: '8px',
                        }),
                        menu: (baseStyles) => ({
                        ...baseStyles,
                        zIndex: 9999, 
                        borderRadius: '12px',
                        padding: '4px'
                        })
                    }}
                />
                <Select 
                    options={options} 
                    defaultValue={options[0]}
                    components={{ IndicatorSeparator: () => null }}
                    styles={{
                        container: (baseStyles) => ({
                            ...baseStyles,
                            width: '100%',
                            padding: '0'
                          }),
                        control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? 'transparent' : 'transparent',
                        boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                        '&:hover': { backgroundColor: '#f7f9fc' },
                        borderRadius: '12px',
                        height: '48px',
                        padding:  '0 8px',
                        // fontSize: '16px',
                        lineHeight: '1.5',
                        width: '206px',
                        transition: 'all 0.2s ease',
                        backgroundColor: '#EEF1F5',
                        cursor: 'pointer',
                        svg: {
                            transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }
                        }),
                        option: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                        color: state.isSelected ? '#fff' : '#333',
                        '&:hover': { backgroundColor: '#f1f1f1' },
                        borderRadius: '8px',
                        }),
                        menu: (baseStyles) => ({
                        ...baseStyles,
                        zIndex: 9999, 
                        borderRadius: '12px',
                        padding: '4px'
                        })
                    }}
                />
            </div>
        </div>
        <div className={styles.user}>
            <div className={styles.name}>Name</div>
            <div className={styles.image}></div>
        </div>
     </div>
     <div className={styles.mobileBody}>
        <MenuIcon onClick={toggleSidebar} width={24} height={24}/>
        <Link href='/'><LogoIcon width={60} height={24}/></Link>
        <SettingsIcon width={24} height={24} onClick={toggleSettingSidebar}/>
     </div>
     {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      <div
        className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.mobileSidebarOpen : ''}`}
      >
        <div className={styles.mobileSidebarContent}>
          <div className={styles.sideBarBody}>
            <Link href='/' className={styles.logo}><LogoIcon width={60} height={24} /></Link>
            <Link href='#' className={styles.newChat}><div className={styles.plus}>+</div> <span>New Chat</span></Link>
            <div className={styles.chatList}>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
                <Link href='#' className={styles.chatName}>Chat Name</Link>
            </div>
          </div>
        </div>
      </div>
      {isSettingSidebarOpen && <div className={styles.overlay} onClick={toggleSettingSidebar}></div>}

      <div
        className={`${styles.settingSidebar} ${
          isSettingSidebarOpen ? styles.settingSidebarOpen : ''
        }`}
      >
        <div className={styles.settingSidebarContent}>
        <div className={styles.settingBody}>
          <div className={styles.main}>
              <div className={styles.settingWrap}>
                <div className={styles.title}>Algebra</div>
                <div className={styles.user}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.image}></div>
                </div>
              </div>
              <div className={styles.settingOptions}>
                <Select 
                      options={options} 
                      defaultValue={options[0]}
                      components={{ IndicatorSeparator: () => null }}
                      styles={{
                          container: (baseStyles) => ({
                              ...baseStyles,
                              width: '100%',
                              padding: '0'
                            }),
                          control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused ? 'transparent' : 'transparent',
                          boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                          '&:hover': { backgroundColor: '#f7f9fc' },
                          borderRadius: '12px',
                          height: '48px',
                          padding:  '0 8px',
                          // fontSize: '16px',
                          lineHeight: '1.5',
                          transition: 'all 0.2s ease',
                          backgroundColor: '#EEF1F5',
                          cursor: 'pointer',
                          svg: {
                              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                            }
                          }),
                          option: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                          color: state.isSelected ? '#fff' : '#333',
                          '&:hover': { backgroundColor: '#f1f1f1' },
                          borderRadius: '8px',
                          }),
                          menu: (baseStyles) => ({
                          ...baseStyles,
                          zIndex: 9999, 
                          borderRadius: '12px',
                          padding: '0px'
                          })
                      }}
                  />
                <Select 
                      options={options} 
                      defaultValue={options[0]}
                      components={{ IndicatorSeparator: () => null }}
                      styles={{
                          container: (baseStyles) => ({
                              ...baseStyles,
                              width: '100%',
                              padding: '0'
                            }),
                          control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused ? 'transparent' : 'transparent',
                          boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                          '&:hover': { backgroundColor: '#f7f9fc' },
                          borderRadius: '12px',
                          height: '48px',
                          padding:  '0 8px',
                          // fontSize: '16px',
                          lineHeight: '1.5',
                          transition: 'all 0.2s ease',
                          backgroundColor: '#EEF1F5',
                          cursor: 'pointer',
                          svg: {
                              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                            }
                          }),
                          option: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                          color: state.isSelected ? '#fff' : '#333',
                          '&:hover': { backgroundColor: '#f1f1f1' },
                          borderRadius: '8px',
                          }),
                          menu: (baseStyles) => ({
                          ...baseStyles,
                          zIndex: 9999, 
                          borderRadius: '12px',
                          padding: '4px'
                          })
                      }}
                  />
                  <Select 
                      options={options} 
                      defaultValue={options[0]}
                      components={{ IndicatorSeparator: () => null }}
                      styles={{
                          container: (baseStyles) => ({
                              ...baseStyles,
                              width: '100%',
                              padding: '0'
                            }),
                          control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: state.isFocused ? 'transparent' : 'transparent',
                          boxShadow: state.isFocused ? '0 0 0 1px #5a5a5a' : 'none',
                          '&:hover': { backgroundColor: '#f7f9fc' },
                          borderRadius: '12px',
                          height: '48px',
                          padding:  '0 8px',
                          // fontSize: '16px',
                          lineHeight: '1.5',
                          transition: 'all 0.2s ease',
                          backgroundColor: '#EEF1F5',
                          cursor: 'pointer',
                          svg: {
                              transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease',
                            }
                          }),
                          option: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: state.isSelected ? '#2684FC' : '#fff',
                          color: state.isSelected ? '#fff' : '#333',
                          '&:hover': { backgroundColor: '#f1f1f1' },
                          borderRadius: '8px',
                          }),
                          menu: (baseStyles) => ({
                          ...baseStyles,
                          zIndex: 9999, 
                          borderRadius: '12px',
                          padding: '4px'
                          })
                      }}
                  />
              </div>
          </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default ChatFilters
