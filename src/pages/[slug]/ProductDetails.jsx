import React from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const {id} = useParams()
  return (
    <div>

        <div>ProductDetails</div>
        <p>{id}</p>
    </div>
  )
}

export default ProductDetails