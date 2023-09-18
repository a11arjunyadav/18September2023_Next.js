 // 1. Importaine area
import Head from 'next/head'
import Header from './Component/Header';
import Aside from './Component/Aside';
import Section from './Component/Section';
import Footer from './Component/Footer';
// Important  'some location';

// function defination area
 function Home() {
  return (
    <>
      <Head>
        <title>Wellcom To My first Next Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
          <Aside />
          <Section />
      </main>
      <Footer />
    </>
  )
}

// Exporte area
export default Home;