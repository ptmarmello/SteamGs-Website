import Head from 'next/head'
// import styled, { css } from 'styled-components';
import styles from '../styles/Home.module.css';
import Advantages from './components/Advantages';
import Forms from './components/Forms/Forms';
import Insightsection from './components/InsightSection';
import MainSection from './components/MainSection/MainSection';
import Testimonies from './components/Testimonies';
import Whereabouts from './components/Whereabouts';
import Workin from './components/Workin';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steam Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainSection/>
      </main>
      <Insightsection />
      <Whereabouts />
      <Workin />
      <Advantages />
      <Testimonies />
      <Forms/>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
