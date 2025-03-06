import React from 'react'
import Head from 'next/head'
import Portfolio from '../components/Portfolio'

const Work = () => {
  return (
    <>
      <Head>
        <title>Our Portfolio | Fischer Telesec - Telecommunications & IT Projects</title>
        <meta name="description" content="Explore Fischer Telesec's successful telecommunications and IT infrastructure projects that have helped businesses across East Africa transform their operations." />
        <meta name="keywords" content="Fischer Telesec portfolio, telecommunications projects, IT infrastructure, network solutions, security systems" />
      </Head>
      <Portfolio />
    </>
  )
}

export default Work