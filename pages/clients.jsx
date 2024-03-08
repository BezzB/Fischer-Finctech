import React from 'react'
import Hero from '../components/Hero'
import ClientsPage from '../components/Clients'

const clients = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <ClientsPage />
    </div>
  )
}

export default clients