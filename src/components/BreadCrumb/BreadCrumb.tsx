'use client'

import React from 'react'
import Link from 'next/link'
import styles from './bread.module.scss'
import DividerIcon from '@public/bread-divider.svg'

interface BreadcrumbItem {
  label: string
  link: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <Link href={item.link}>
                {item.label}
            </Link>
            {index < items.length - 1 && <DividerIcon className={styles.icon} width={12} height={16}/>}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
