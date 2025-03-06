import React from 'react';
import Head from 'next/head';
import ContactUs from '../components/Contact';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Fischer Telesec - Telecommunications & IT Solutions</title>
        <meta name="description" content="Get in touch with Fischer Telesec for all your telecommunications and IT needs. Our team of experts is ready to assist you." />
        <meta name="keywords" content="contact Fischer Telesec, telecommunications contact, IT solutions contact, Fischer Telesec phone, Fischer Telesec email" />
      </Head>
      <ContactUs />
    </>
  );
};

export default Contact;