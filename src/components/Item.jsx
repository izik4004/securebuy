import React from "react";

const Item = ({cards}) => {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className=" w-1/4 flex flex-col items-center py-6 cursor-pointer border hover:border-[#C1C8CE]">
          <div className="bg-red-500 my-6 items-center flex">
          <img
            src="/src/assets/svg/6.jpg"
            className="bg-[#C1C8CE] object-cover"
            alt=""
            width={400}
          />
          </div>
          <div className="">
            <p>{card.title}</p>
            <p className="text-red-500">24% Off</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
