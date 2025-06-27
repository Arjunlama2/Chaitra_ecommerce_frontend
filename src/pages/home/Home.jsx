import React from 'react'
import Header from '../../components/landing/Header'
import Navbar from '../../components/landing/Navbar'
import Hero from '../../components/landing/Hero'
import Products from '../../components/landing/Products'
import LatestProducts from '../../components/landing/LatestProducts'
import Offer from '../../components/landing/Offer'
import Unique from '../../components/landing/Unique'
import Trending from '../../components/landing/Trending'
import Discount from '../../components/landing/Discount'

function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <Products/>
    <LatestProducts/>
    <Offer/>
    <Unique/>
    <Trending/>
    <Discount/>
    
    </>
  )
}

export default Home