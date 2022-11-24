import React from 'react'
import {addedServices} from "../data/data"

const AddedServices = () => {
  return (
    <section className='flex py-6 container gap-10 mx-auto'>
        {addedServices.map((service, index) => (
            <div key={index} className='flex gap-8 items-center p-2 rounded-lg  w-1/3'>
            <img src={service.img} alt="" className='py-4'/>
            <span className='py-6 flex flex-col '>
            <h3 className='font-bold text-xl'>{service.name}</h3>
            <p>{service.subtitle}</p>
            </span>
        </div>
        ))}
        
    </section>
  )
}

export default AddedServices