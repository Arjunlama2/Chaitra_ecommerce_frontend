import React from "react";
import { BiHeart, BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const ProductCard = ({product}) => {
  const navigate = useNavigate()
   
  return (
   
      <div className="w-[270px] h-fit shadow-sm  group relative transition-transform hover:-translate-y-3">
        <div className="bg-[#F6F7FB] h-[236px] pt-[46px] w-full flex flex-col items-center relative">

            <div className="absolute   top-[18px] left-[18px]   flex gap-4 items-center ">
                <IoCartOutline className="icon-hover"/>
                <BiHeart className="icon-hover"/>
                <BiSearch className="icon-hover"/>
            </div>
          <div className="w-[178px] aspect-square mb-3">
            <img src={`${product?.imgPath}`} alt="product image" className="w-full h-full" />


          </div>
          <button className="opacity-0  transition-all duration-300   group-hover:opacity-100 absolute bottom-2 bg-[#08D15F] w-fit rounded-[2px] px-3 py-2 text-white  text-sm  " onClick={()=>navigate(`/product/${product._id}`)}>View Details</button>
        </div>

        <div className="w-full flex flex-col items-center py-4 gap-3 transition-all duration-400 ease-in-out group-hover:bg-[#2F1AC4]">
          <p className="text-[#FB2E86] text-[18px] font-[700]">
                {product.name}
          </p>
          <div className="flex gap-1 w-[54px]">
            <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]" />
            <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]" />
            <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]" />
          </div>
          <p className="text-[#151875]  text-[14px] ">Code - Y523201</p>
          <p className="text-[#151875]  text-[14px] ">{product.price}</p>
        </div>
      </div>
  
  );
};

export default ProductCard;
