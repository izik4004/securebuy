import React from 'react'
import Image from "../assets/svg/shoe1.png"
import {category} from "../data/data"

const Section1 = () => {
  return (
    <div className=" container  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-6 z-99">
      <h3 className='py-6 text-2xl font-semibold'>Browse by category</h3>
     <div className='flex gap-6'>
      {category.map((item) => (
        <div className=" border py-10 px-2 rounded-xl bg-white hover:text-white w-1/6 hover:bg-secondary cursor-pointer">
          <div className=" text-center ">
            <div className="flex hover:text-white items-center justify-center w-24 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 ">
             <img src={item.img} alt="" className='h-14 rounded-full'/>
            </div>
            <h6 className="mb-2 text-base font-semibold leading-5">{item.name}</h6>
          </div>
        </div>
       ))}
       </div>
    </div>
  )
}

export default Section1