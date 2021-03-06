import Head from 'next/head'
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from '../styles/pages/Login.module.css'



import { signIn, signOut, useSession } from "next-auth/client";
import Router from 'next/router'



export default function Login() {

  const [session, loading] = useSession();

  return (

    <div className={styles.container}>
      <Head><title>Login | move.it</title></Head>

      <section>
        <div >
          <img src="/icons/Simbolo.svg" alt="" />
        </div>

        <div >
          <img src="/logo-full-white.svg" alt="" />

          <h2>Bem-vindo</h2>

          <div className={styles.github}>
            <img src="/icons/Github.svg" alt="" />
            <p>Faça login com seu Github para começar</p>
          </div>



          {!session && (
            <>
              <div className={styles.signIn} onClick={() => {
                signIn('github', { callbackUrl: 'https://moveitvinicius.vercel.app/home' });
              }} >
                <p>Entrar com o GitHub</p>
                <img src="/icons/signin.svg" alt="" />
              </div>
            </>
          )}
          {session && (
            <>
              <Link href='/home'>
                <div className={styles.signIn} >

                  <p>Clique aqui para continuar</p>
                  <img src="/icons/signin.svg" alt="" />
                </div>
              </Link>
            </>
          )}
        </div>

      </section>
    </div>
  )
}



