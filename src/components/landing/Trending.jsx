import React from "react";
import TrendingCard from "../cards/TrendingCard";

const Trending = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 mt-20">
      <p className="text-[42px] text-[#151875] font-[700]">Trending Products</p>
      <div className="w-full flex justify-center gap-[30px]">
        <TrendingCard />
      </div>

      <div className="w-full flex gap-[30px] justify-center">

        {/* shop now div */}
        <div className="w-[400px] h-[250px] flex flex-col gap-3 py-[34px] px-[20px] bg-[#FFF6FB] relative">
          <p className="text-[26px] font-[700]">23% off in all products</p>
          <p className="text-base text-[#FB2E86] font-[600]">Shop Now</p>
          <div className="absolute right-[6px] bottom-[2px] w-[200px] aspect-square">
            <img
              src="/images/trendingImages/img1.png"
              alt=""
              className="object-cover w-full h-full"
           
            />
          </div>
        </div>

        {/* view collection */}


        <div className="w-[400px] h-[250px] flex flex-col gap-3 py-[34px] px-[20px] bg-[#FFF6FB] relative">
          <p className="text-[26px] font-[700]">23% off in all products</p>
          <p className="text-base text-[#FB2E86] font-[600]">View Details</p>
          <div className="absolute right-[6px] bottom-0 w-[300px] h-[140px]">
            <img
              src="/images/trendingImages/img2.png"
              alt=""
              className="object-cover w-full h-full"
           
            />
          </div>
        </div>

        {/* others */}
        <div className="w-[267px] flex flex-col justify-between">
            {/* item 1 */}
            <div className="w-full flex gap-[6px]">
                <div className="bg-[#F5F6F8] w-[107px] flex justify-center">

                <div className="h-[74px] w-[64px] ">
                    <img src="/images/trendingImages/others/chair1.png" alt="" className="w-full h-full object-cover
                    "/>
                </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                    <p className="text-base font-[700] text-[#151875]">Executive Seat chair</p>
                    <p className="text-sm line-through text-[#151875] ">$32.00</p>
                </div>

            </div>
            {/* item 2 */}
            <div className="w-full flex gap-[6px]">
                <div className="bg-[#F5F6F8] w-[107px] flex justify-center">

                <div className="h-[74px] w-[64px] ">
                    <img src="/images/trendingImages/others/chair2.png" alt="" className="w-full h-full object-cover
                    "/>
                </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                    <p className="text-base font-[700] text-[#151875]">Executive Seat chair</p>
                    <p className="text-sm line-through text-[#151875] ">$32.00</p>
                </div>

            </div>
            {/* item 3 */}
            <div className="w-full flex gap-[6px]">
                <div className="bg-[#F5F6F8] w-[107px] flex justify-center">

                <div className="h-[74px] w-[64px] ">
                    <img src="/images/trendingImages/others/chair3.png" alt="" className="w-full h-full object-cover
                    "/>
                </div>
                </div>
                <div className="flex flex-col gap-[3px]">
                    <p className="text-base font-[700] text-[#151875]">Executive Seat chair</p>
                    <p className="text-sm line-through text-[#151875] ">$32.00</p>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Trending;
