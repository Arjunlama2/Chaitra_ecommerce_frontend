import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { LiaSearchPlusSolid } from 'react-icons/lia'

const LatestProductCards = ({img,name,price}) => {
  return (
     <div className='flex flex-col items-center gap-[10px] p-2  w-[360px]  h-[306px]  hover:shadow-xl group relative bg-[#EEEFFB] hover:bg-white'>
        <div className=" hidden absolute bottom-[40px] left-[15px]  group-hover:flex flex-col gap-[1px]  ">
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full  text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <CiShoppingCart  />
                  </div>
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <CiHeart />
                  </div>
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <LiaSearchPlusSolid />
                  </div>
            </div>
        <div className=' w-[225px] aspect-square '>
          <img className=' w-full h-full object-cover transition-transform duration-300 group-hover:scale-90' src={img} alt='Product' />

        </div>
        <div className='absolute bottom-0 w-full h-12 bg-white'>

          <div className='w-full flex justify-between  h-full mt-5 px-2 
          '>
            <p className='font-[500] text-[14px] text-[#151875] underline decoration-[#EEEFFB] decoration-2 underline-offset-4 '>{name} </p>
            <p className='font-[500] text-[14px] text-[#151875]'>{price}</p>
          </div>
        </div>
        </div>
  )
}

export default LatestProductCards