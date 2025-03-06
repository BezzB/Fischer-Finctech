import React from 'react'
import Head from 'next/head'
import ClientsPage from '../components/Clients'

const Clients = () => {
  return (
    <>
      <Head>
        <title>Our Clients | Fischer Telesec - Trusted by Leading Organizations</title>
        <meta name="description" content="Fischer Telesec has built strong relationships with clients across various industries, delivering exceptional telecommunications and IT solutions." />
        <meta name="keywords" content="Fischer Telesec clients, telecommunications clients, IT solutions Kenya, network infrastructure clients" />
      </Head>
      <ClientsPage />
    </>
  )
}

export default Clients