import React from 'react'
import HeroNav from '../components/reusable/heroNav'
import Breadcrumbs from '../components/reusable/Breadcrumbs'
import ProductCard from '../components/cards/ProductCard';
import { productDetails } from '../data/productData';
import FilterBar from '../components/reusable/FilterBar';

const Shopping = () => {


  return (
    <>
    <div>
      <Breadcrumbs/>
      <HeroNav/></div>
      <FilterBar/>

    <div className='w-full flex justify-center gap-[30px] mx-auto mt-8'>
      {productDetails.map((item,index)=>{
        return <ProductCard product={item} key={index}/>
      })}
    </div>
    </>
  )
}

export default Shopping