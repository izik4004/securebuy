import React from "react";

const TopSellers = () => {
  return (
    <div className="container w-1/3 flex flex-col bg-[#F7F7F6] items-center py-6 cursor-pointer hover:bg-[#C1C8CE]">
      <h6 className="font-bold text-lg">FS - QUINTED MAXI </h6>
      <img src="/src/assets/image/remove1.png" alt="" width={400} />
      <div className="items-left flex gap-6">
        <p>$299.43</p>
        <p className="text-red-500">24% Off</p>
      </div>
    </div>
  );
};

export default TopSellers;
