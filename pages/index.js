 // 1. Importaine area
import Head from 'next/head'
// Important  'some location';

// function defination area
 function Home() {
  return (
    <>
      <Head>
        <title>Wellcom To My first Next Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <div>Header Component</div>
          <div>980*140</div>
      </header>
      <main>
          <aside>
              <div>Header Component</div>
              <div>980*270</div>
          </aside>
          <section>
              <div>Header Component</div>
              <div>980*700</div>
          </section>
      </main>
      <footer>
          <div>Header Component</div>
          <div>980*70</div>
      </footer>
    </>
  )
}

// Exporte area
export default Home;