import React from 'react'
import Hero from '../components/Hero'
import PrivacyPolicyPage from '../components/PrivacyPolicy'

const contact = () => {
  return (
    <div>
        <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
        <PrivacyPolicyPage/>
    </div>
  )
}

export default contact