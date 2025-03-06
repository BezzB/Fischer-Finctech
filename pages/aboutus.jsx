import React from 'react';
import Head from 'next/head';
import AboutUs from '../components/AboutUs';

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Fischer Telesec - Telecommunications & IT Solutions</title>
        <meta name="description" content="Learn about Fischer Telesec, our story, mission, vision, and the team behind our telecommunications and IT solutions." />
        <meta name="keywords" content="Fischer Telesec about, telecommunications company, IT solutions provider, company history, mission vision, team" />
      </Head>
      <AboutUs />
    </>
  );
};

export default AboutUsPage;