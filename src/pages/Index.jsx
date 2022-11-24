import React from 'react'
import AddedServices from '../components/AddedServices'
import Header from '../components/Header'
import Cta from '../new/Cta'
import FeaturedProduct from '../new/FeaturedProduct'
import Footer from '../new/Footer'
// import Hero from '../new/hero'
import Section1 from '../new/Section1'
import Hero from "../components/Hero";
import Feature from '../components/Feature'

const Index = () => {
  return (
    <div>
        {/* <Hero/> */}
        <Header/>
        <Hero/>
       
        <Section1/>
        <FeaturedProduct/>
        <Feature/>
        <AddedServices/>
        <Footer/>
        
        {/* <Cta/> */}
    </div>
  )
}

export default Index