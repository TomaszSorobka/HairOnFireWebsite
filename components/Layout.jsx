import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      
      <main className="main-container">
      <Head>
        <title>Hair On Fire</title>
      </Head>
      <header>
        <Navbar />
      </header>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout