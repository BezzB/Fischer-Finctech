import React from 'react';
import Head from 'next/head';
import GetQuote from '../components/GetQuote';

const GetAQuotePage = () => {
  return (
    <>
      <Head>
        <title>Get a Quote | Fischer Telesec - Telecommunications & IT Solutions</title>
        <meta name="description" content="Request a free, no-obligation quote for telecommunications and IT services tailored to your business needs." />
        <meta name="keywords" content="telecommunications quote, IT services quote, free quote, Fischer Telesec pricing, custom IT solutions" />
      </Head>
      <GetQuote />
    </>
  );
};

export default GetAQuotePage;