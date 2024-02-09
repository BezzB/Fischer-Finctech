import React from 'react'
import Hero from '../components/Hero'
import ServicePage from '../components/Services'

const services = () => {
  return (
    <div>
      <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
        <ServicePage />
    </div>
  )
}

export default services