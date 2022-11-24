import React from 'react'
import AddedServices from '../components/AddedServices'
import Cta from '../new/Cta'
import FeaturedProduct from '../new/FeaturedProduct'
import Hero from '../new/hero'
import Section1 from '../new/Section1'

const Index = () => {
  return (
    <div>
        <Hero/>
        <AddedServices/>
        <Section1/>
        <FeaturedProduct/>
        
        {/* <Cta/> */}
    </div>
  )
}

export default Index