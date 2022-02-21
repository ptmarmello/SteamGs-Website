import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Advantages from '../files/components/Advantages';
import Forms from '../files/components/Forms/Forms';
import Insightsection from '../files/components/InsightSection';
// import MainSection from '../files/components/MainSection/MainSection';
import Whereabouts from '../files/components/Whereabouts';
import Workin from '../files/components/Workin';
import webconfig from './data/webConfig.json';
// import Link from 'next/link';

export default function Companies() {
  let WAConfig = webconfig.components.companies.whereabouts;
  return (
    <div className={styles.container}>
      <Head>
        <title>Steam Groups | Para Empresas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <MainSection config={webconfig.components.companies.mainsection} /> */}
      </main>

      <Insightsection />
        <Whereabouts type={WAConfig.firstParagraph} />
        <Whereabouts type={WAConfig.secondParagraph} />
        <Whereabouts type={WAConfig.thirdParagraph} />
      
      <Advantages />

      <Workin />
      
      <Forms/>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}