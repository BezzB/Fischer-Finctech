import React from 'react'
import Head from 'next/head'
import PrivacyPolicyPage from '../components/PrivacyPolicy'

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Fischer Telesec</title>
        <meta name="description" content="Fischer Telesec's privacy policy explains how we collect, use, and protect your personal information when you use our website or services." />
        <meta name="keywords" content="Fischer Telesec privacy policy, data protection, information security, privacy rights" />
      </Head>
      <PrivacyPolicyPage />
    </>
  )
}

export default Privacy