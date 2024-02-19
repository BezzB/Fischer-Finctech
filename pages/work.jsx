import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='Recent projects' message='This are some of the Recent projects.' />
        <Portfolio />
    </div>
  )
}

export default work