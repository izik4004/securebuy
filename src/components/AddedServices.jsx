import React from 'react'
import {addedServices} from "../data/data"

const AddedServices = () => {
  return (
    <section className='flex py-6 container gap-10 mx-auto'>
        {addedServices.map((service, index) => (
            <div key={index} className='flex flex-col items-center p-10 border-2  w-1/3'>
            <img src="" alt="" />
            <h3 className='font-bold text-xl'>{service.name}</h3>
            <p>{service.subtitle}</p>
        </div>
        ))}
        
    </section>
  )
}

export default AddedServices