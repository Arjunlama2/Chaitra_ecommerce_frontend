import React, { useState } from "react";
import { latestProducts } from "../../data/latestProducts";
import LatestProductCards from "../cards/LatestProductCards";
const navs = [
  {
    id: "1",
    title: "Latest Products",
  },
  {
    id: "2",
    title: "Latest Products",
  },
  {
    id: "3",
    title: "Latest Products",
  },
  {
    id: "4",
    title: "Latest Products",
  },
];



const LatestProducts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

 
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <p className="text-[42px] font-[700] text-[#151875]">Leatest Products</p>
      <p className="flex gap-5 justify-between text-[14px] font-[500] text-[#151875] w-[35%]">
  {navs.map((item,index)=>{
    return <span className={`${activeIndex === index ? "text-[#FB2E86]": ""} cursor-pointer`} key={index} onClick={() => setActiveIndex(index)}> {item.title}</span>
  })}
      </p>
      <div className="flex gap-5 gap-y-20 flex-wrap justify-center items-center w-[80%] h-[650px]">
        {latestProducts.map((product, index) => (
          <LatestProductCards
            key={index}
            name={product.name}
            price={product.price}
            img={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
