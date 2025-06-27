import React from "react";

const TrendingCard = () => {
  const cardData = [
    {
      name: "Cantilever Chair",
      dPrice: "$ 26.00",
      mPrice: "$ 42.00",
      image: "/images/trendingImages/trending1.png",
    },
    {
      name: "Cantilever Chair",
      dPrice: "$ 26.00",
      mPrice: "$ 42.00",
      image: "/images/trendingImages/trending2.png",
    },
    {
      name: "Cantilever Chair",
      dPrice: "$ 26.00",
      mPrice: "$ 42.00",
      image: "/images/trendingImages/trending3.png",
    },
    {
      name: "Cantilever Chair",
      dPrice: "$ 26.00",
      mPrice: "$ 42.00",
      image: "/images/trendingImages/trending4.png",
    },
  ];
  return (<>
  {cardData.map((trending, index) => (
        <div key={index} className=" w-[270px] p-3 flex flex-col items-center">
         
           
            <div className="w-full aspect-square mb-3">
              <img
                src={`${trending.image}`}
                alt=""
                className="w-full h-full"
              />
            </div>
         
          

          <div className="w-full flex flex-col items-center py-4 gap-3  ">
            <p className="text-[#151875] text-base font-[700]">
              {trending.name}
            </p>
            <div className="flex gap-1 ">
              
            <p className="text-[#151875]  text-[14px] ">{trending.dPrice}</p>
            <p className="text-[#151875]  text-[14px] ">{trending.mPrice}</p>
            </div>
          </div>
          </div>
       
      ))}
  </>
  
      
    
  );
};

export default TrendingCard;
