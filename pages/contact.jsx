import React from 'react'
import { ContactUs } from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact Us' message='Reach out to Us and get connected.' />
        <ContactUs/>
    </div>
  )
}

export default contact