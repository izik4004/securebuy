import {useState} from "react";

const ProductCard = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }
  return (
    
    <div className="flex flex-row mx-auto flex-wrap">
      {productItems.map((card) => {
        return (
        <div className="w-1/4 p-2"> 
          <div className=" hover:border-accent border rounded-lg">
            <a href="#" className="relative block">
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
                <h3 className=" text-lg font-semibold">{card.name}</h3>
                <div className="flex justify-between items-center py-4">
                  <p className="text-sm font-bold text-gray-600">$14.99</p>

                  <button
                    type="button"
                    className="flex  items-center justify-center rounded-lg border border-accent px-2 py-2 hover:bg-accent hover:text-white"
                    onClick={() => addToCart(card)}
                 >
                    <svg
                      className="h-5 w-5"
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
              </div>
            </a>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
