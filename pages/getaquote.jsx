import React from 'react'
import Hero from '../components/Hero'
import { GetAQuote } from '../components/GetQuote'

const quote = () => {
  return (
    <div>
        <Hero heading='Get A Quote' message='Select your service and get a qoute.' />
        <GetAQuote />
    </div>
  )
}

export default quote