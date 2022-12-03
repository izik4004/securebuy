import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductCard = ({ productItems, addToCart }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  // const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, price };

    dispatch(setAddItemToCart(item))
  }

  return (
    <div className="md:container flex flex-row mx-auto flex-wrap">
      {productItems.map((card, index) => {
        return (
          <div key={index} className={`lg:w-1/4 p-2 lg:p-2 w-1/2 md:1/2 bg-gradient-to-b relative`}>
            <div className=" hover:border-accent border rounded-lg cursor-pointer px-2"
            onClick={() => navigate(`/products/${card?.id}`)}
            >
             
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </button>

                <img
                  alt="Toy"
                  src={card.img}
                  className="h-56 w-full transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-contain lg:h-60"
                />

                <div className="px-6">
                  <h3 className="whitespace-nowrap text-lg font-semibold text-orange-400">{card.title}</h3>
                  <span className="text-sm font-semibold flex items-center gap-1.5"><FaStar /> {card.rating}</span>
                  <div className="flex justify-between items-center py-4">
                    
                    <p className="text-sm font-bold text-gray-600">${card.price}</p>

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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button type="button" className="font-bold flex  items-center justify-center rounded-lg bg-accent border text-white px-2 py-2 hover:border-accent hover:bg-white hover:text-black mb-2">{card.btn}</button>
                </div>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
