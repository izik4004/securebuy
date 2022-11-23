import React from 'react'
import Item from './Item'
import { product } from "../data/data";

const BestSeller = () => {
    const { title, subtitle, cards, items } = product;
  return (
    <div className='py-10 flex flex-col container mx-auto ' >
        <div className='text-center lead'>
            <h3>Best Sellers</h3>
        </div>
        <div className='flex mx-auto gap-10 cursor-pointer '>
        {items.map((item, index) => (
            <div className='hover:text-accent text-xl py-6 font-semibold'>{item.title}</div>
        ))}
        </div>
        <div className='flex gap-6 py-6'>
        <Item 
        cards={cards}
        items={items}
        />
        </div>
    </div>
  )
}

export default BestSeller