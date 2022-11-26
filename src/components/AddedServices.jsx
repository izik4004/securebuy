import React from 'react'
import {addedServices} from "../data/data"

const AddedServices = () => {
  return (
    <section className='flex py-6 px-4 lg:px-0 md:container gap-10 mx-auto lg:flex-row flex-col'>
        {addedServices.map((service, index) => (
            <div key={index} className='flex gap-8 items-center p-2 rounded-lg  lg:w-1/3 border'>
            <img src={service.img} alt="" className='py-4'/>
            <span className='py-6 flex flex-col '>
            <h3 className='font-bold text-lg'>{service.name}</h3>
            <p className='text-sm'>{service.subtitle}</p>
            </span>
        </div>
        ))}
        
    </section>
  )
}

export default AddedServices