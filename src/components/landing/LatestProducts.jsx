import React from 'react'
import { latestProducts } from '../../data/latestProducts'
import LatestProductCards from '../cards/LatestProductCards'

const LatestProducts = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 w-full'>
        <p className='text-[42px] font-[700] text-[#151875]'>Leatest Products</p>
        <p className='flex gap-5 justify-between text-[14px] font-[500] text-[#151875] w-[35%]'>
            <span className='text-[#FB2E86] '>New Arrival</span>
            <span>Best seller</span>
            <span>Featured</span>
            <span>Special Offer</span>
        </p>
        <div className='flex gap-5 gap-y-20 flex-wrap justify-center items-center w-[80%] h-[650px]'>

    {latestProducts.map((product, index) => (
        <LatestProductCards key={index} name={product.name} price={product.price} img={product.image} />
    ))}
    </div>
    </div>
  )
}

export default LatestProducts