import React from 'react'
import Hero from '../components/Hero'
import ServicePage from '../components/Services'

const services = () => {
  return (
    <div>
      <Hero heading='Services' message='Select from an array of services we offer.' />
        <ServicePage />
    </div>
  )
}

export default services