import React from "react"
import FlashCard from "./FlashCard"
import TopSellers from "./TopSellers"
// import "./style.css"

const FlashDeals = ({ productItems }) => {
  return (
    <>
      <section className='flex flex-row mx-auto mt-[-120px]'>
        <TopSellers/>
        <TopSellers/>
        <TopSellers/>
      </section>
    </>
  )
}

export default FlashDeals
