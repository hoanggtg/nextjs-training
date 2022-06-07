import Head from 'next/head';
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
