import React, { useState } from 'react'
import HeroNav from '../components/reusable/heroNav'
import Breadcrumbs from '../components/reusable/Breadcrumbs'
import ProductCard from '../components/cards/ProductCard';
import { productDetails } from '../data/productData';
import FilterBar from '../components/reusable/FilterBar';
import Pagination from '../components/reusable/Pagination';
const Shopping = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage,setItemsPerPage] = useState(4) // ← how many products per page

  const totalPages = Math.ceil(productDetails.length / itemsPerPage)

  // Calculate slice indexes


  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = productDetails.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <>
      <div>
        <Breadcrumbs />
        <HeroNav />
      </div>

      {/* Pass currentPage props to FilterBar and Pagination */}
      <FilterBar        
        setItemsPerPage={setItemsPerPage}
      />

      <div className='w-full flex flex-wrap justify-center gap-[30px] mx-auto mt-8'>
        {currentItems.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>

      <div className='flex justify-center mt-6'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default Shopping