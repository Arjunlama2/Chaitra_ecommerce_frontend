import React from 'react'
import { productDetails } from '../../data/productData'
import ProductCard from '../cards/ProductCard'

const Products = () => {
  return (
    <div className='w-full flex flex-col mt-18 py-8'>

    <div className='w-full flex justify-center gap-[30px] mx-auto'>
        {productDetails.map((product,index)=>(
            <ProductCard key={index} product={product}/>

        ))}
    </div>
    <div className='w-full mt-[53px] flex gap-1 justify-center '>{[1,2,3].map((_,index)=>(
      <div key={index} className='w-[24px] h-1 bg-[#FEBAD7] rounded-[10px]'/>
    ))}</div>


    </div>

  )
}

export default Products