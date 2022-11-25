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
import HowItWorks from '../components/HowItWorks'
import Hero1 from '../components/Hero1'
import Cta1 from '../new/Cta1'
// import Full from '../components/Full'
import NewHero from '../components/NewHero'
import Deals from '../components/Deals'

const Index = ({addToCart, productItems, CartItem}) => {
  return (
    <div>
        <div className='bg-[#F6F7F9]'>
        <Hero/>
     
        
        </div>
        <Section1/>
        <Deals/>
       <HowItWorks/>
        <FeaturedProduct addToCart={addToCart} productItems={productItems}/>
        {/* <Cta1/> */}
        <Feature/>
        <AddedServices/>
        <Footer/>
        
        {/* <Cta/> */}
    </div>
  )
}

export default Index