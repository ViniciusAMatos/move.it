import { signOut } from 'next-auth/client'
import Link from 'next/link'
import Router from 'next/router'
import React, { useEffect } from 'react'
import styles from '../styles/components/NavBar.module.css'

export function NavBar() {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <img src="/logo-blue.svg" alt="Logo" />
      </div>

      <div className={styles.icons}>
        <a href="">
          <img className={styles.logoHome} src="/icons/home.svg" alt="inicio" />
        </a>
        <a href="">
          <img src="/icons/award.svg" alt="" />
        </a>
      </div>
      <Link href='/'>
        <div className={styles.logout} onClick={async (): Promise<void> => {
          signOut();

        }}>
          <img src="/icons/logout.svg" alt="sair" />

        </div>v
      </Link>

    </div>
  )
}