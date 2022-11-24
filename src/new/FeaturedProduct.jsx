import React from "react";
import { product } from "../data/data";

const FeaturedProduct = () => {
  const { title, subtitle, cards, items } = product;
  return (
    <section>
      <div className="mx-auto container py-6">
        <h2 className="lead font-bold py-6 text-center">Featured Products</h2>
        <div className="flex flex-row flex-wrap">
          {cards.map((card) => (
            <div className="w-1/3 p-2 mx-auto ">
              <div className="">
                <div className="">
                  <a href="#" className="relative block border border-gray-100">
                    <button
                      type="button"
                      className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                    >
                      <span className="sr-only">Wishlist</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>

                    <img
                      alt="Toy"
                      src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="h-56 w-full object-contain lg:h-60"
                    />

                    <div className="px-6">
                      {/* <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                        New
                      </span> */}

                      <h3 className="mt-4 text-lg font-bold">{card.title}</h3>

                      <p className="mt-2 text-sm font-medium text-gray-600">
                        $14.99
                      </p>

                      <button
                        type="button"
                        className="mt-4 flex w-full items-center justify-center rounded-lg bg-yellow-500 px-8 py-4"
                      >
                        <span className="text-sm font-medium">
                          {" "}
                          Add to Cart{" "}
                        </span>

                        <svg
                          className="ml-1.5 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
