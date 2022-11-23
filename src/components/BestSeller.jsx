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
        {items.map((item, index) => (
            <div className='flex' >{item.title}</div>
        ))}
        <div className='flex gap-6 py-12'>
        <Item 
        cards={cards}
        items={items}
        />
        </div>
    </div>
  )
}

export default BestSeller