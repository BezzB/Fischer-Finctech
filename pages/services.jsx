import React from 'react';
import Head from 'next/head';
import ServicesPage from '../components/ServicesPage';

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Fischer Telesec - Telecommunications & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive range of telecommunications and IT services designed to transform your business operations and drive growth." />
        <meta name="keywords" content="telecommunications services, IT infrastructure, data center services, managed IT services, cloud services, Fischer Telesec" />
      </Head>
      <ServicesPage />
    </>
  );
};

export default Services;