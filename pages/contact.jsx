import React from 'react'

import Hero from '../components/Hero'
import { ContactUs } from '../components/Contact'


const contact = () => {
  return (
    <div>
        <Hero heading='Contact Us' message='Reach out to Us and get connected.' />
        <ContactUs />
    </div>
  )
}

export default contact