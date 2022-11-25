import React from 'react'
import Image from "../assets/category/shoe1.png"

const Deals = () => {
  return (
   <section className='container mx-auto' >
    <h3 className='text-center py-8 text-2xl font-semibold'>Top Deals</h3>
    <div className='flex mx-auto gap-6'>
        <div className='flex w-1/2 border  rounded-xl px-10 py-8 bg-accent'>
        <div className='flex items-center flex-col py-6'>
            <h3 className='py-6'>jhgkdjhkld;kjjhlkdhjkh</h3>
            <button className='px-6  py-2 rounded-xl bg-white text-accent'>Shop Now </button>
            </div>
            <div>
                <img src={Image} alt="" className='w-54' />
            </div>
        </div>
        <div className='flex w-1/2 border  rounded-xl px-10 py-8 bg-primary'>
        <div className='flex items-center flex-col py-6'>
            <h3 className='py-6'>jhgkdjhkld;kjjhlkdhjkh</h3>
            <button className='px-6  py-2 rounded-xl bg-white text-accent'>Shop Now </button>
            </div>
            <div>
                <img src={Image} alt="" className='w-54' />
            </div>
        </div>
        </div>
   </section>
  )
}

export default Deals