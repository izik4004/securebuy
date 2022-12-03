import React from 'react'
import empty from '../../assets/svg/empty.svg';
import { FaLongArrowAltLeft } from "react-icons/fa";

const CartEmpty = ({ handleClick }) => {
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={empty}
          alt="emptybag/img"
          className='w-100 lg:w-80 sm:w-60 h-auto object-fill transition-all duration-300 hover:scale-105'
        />
        <button type='button' onClick={handleClick} className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
            <FaLongArrowAltLeft className='w-5 h-5 text-slate-900' />
            <span className=''>Back To Store</span>
        </button>
      </div>
   </>
  )
}

export default CartEmpty