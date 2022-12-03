import React from 'react'
import { FaRegArrowAltCircleLeft, FaTimes } from "react-icons/fa"; 

const CartCount = ({ setCartOpen, handleClick }) => {
  return (
    <>
      <div className='bg-white flex items-center justify-between px-3 sticky top-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
          <div  className='grid items-center cursor-pointer'>
            <FaRegArrowAltCircleLeft onClick={handleClick} className='text-slate-900 hover:text-orange-400 stroke-[2]' />
          </div>
          <div className='grid items-center'>
            <h1 className='text-base font-medium text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs'>(Items)</span></h1>
          </div>
        </div>
        <div className='flex items-center'>
          <button type='button' className='rounded bg-theme-cart '>
            <FaTimes className='text-white stroke-[2]' />
          </button>
        </div>

      </div>
    </>
  )
}

export default CartCount