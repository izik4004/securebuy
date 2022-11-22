import React from "react";
import Cards from "./Cards";
import { product } from "../data";
import {BsArrowRight} from "react-icons/bs"

const Product = () => {
  const { title, subtitle, cards, items } = product;
  return (
    <section className="section -mt-40">
      <div className="container mx-auto">
        <h3 className="lead text-center mb-10">{title}</h3>
        <div className="gap-10 flex">
          <div className="lg:w-1/3">
            <input type="text" placeholder="Search" 
            className="py-4 px-10 my-4 border border-accent rounded-md text-black"/>
            <div className="flex flex-col">
              <ul className=" overflow-auto font-semibold">
                {items.map((item, index) => (
                  <li key={index}
                  className="cursor-pointer py-4 px-10 my-4  hover:bg-accent hover:text-white rounded-md text-black"
                  >
                    <a
                      // className="hover:text-accent transition"
                      href={item.href}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-md lg:btn-lg
              btn-accent flex justify-center items-center text-center
              lg:gap-x-4"
              >
                All Categories
                <BsArrowRight />
              </button>
            </div>
          </div>
          <div class="lg:w-2/3">
            <div className="flex  flex-wrap">
              {cards.map((card, cardIndex) => {
                return (
                  <div class="lg:w-1/2 p-2">
                    <div class="relative">
                      <img
                        alt="gallery"
                        class="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
                        src="https://dummyimage.com/603x363"
                      />
                      <div class="cursor-pointer px-8 py-10 flex flex-col items-center relative z-10 w-full border-2 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h2 class="tracking-widest lead title-font font-medium text-indigo-500 mb-1">
                          {card.title}
                        </h2>
                       
                        {/* <button className="px-6 py-4 rounded-md bg-accent text-white text-sm">BUY NOW</button> */}
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
