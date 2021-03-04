import React, { useEffect } from "react";
import { CompletedChallenges } from "../components/CompletedChalleges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css"

import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { NavBar } from "../components/NavBar";
import Router from 'next/router'
import { useSession } from "next-auth/client";



interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number

}


export default function Home(props: HomeProps) {
  const [session, loading] = useSession();

  // useEffect(() => {
  //   const { pathname } = Router;
  //   if (!session) {
  //     if (pathname == '/home') {
  //       Router.push('/')
  //     }
  //   }
  // }
  //   , []);


  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head><title>Início | move.it</title></Head>
        <NavBar />
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div className={styles.containerChallengeBox}>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}