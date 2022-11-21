import {useState} from 'react';
import { product } from '../data';
import ArrowImg from "../assets/img/product/cards/arrow.svg"

const Cards = () => {
  const [index, setIndex] = useState()
  const {cards} = product
  return (
    
        <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
          {cards.map((card, cardIndex) => {
            return (
              <div key={cardIndex}
              data-aos='zoom-out'
              data-aos-offset='300'
              data-aos-delay='delay'>
              <div 
              onClick={() => setIndex(cardIndex)}
              className={`${index === cardIndex &&
              'bg-white shadow-2xl'} w-[350px] h-[350px] flex flex-col
              justify-center items-center mx-auto p-[65px] text-center rounded-[12px]
              cursor-pointer transition-all`}>
                <div>
                  <img src={card.icon} alt="" />
                </div>

                <div className='mb-3 text-[30px] font-medium'>{card.title}</div>
                <p className='mb-6 text-light'>{card.subtitle}</p>
                {index == cardIndex && <img src={ArrowImg}/>}
              </div>
              </div>
            )
          })}
        </div>
    
    )
};

export default Cards;
