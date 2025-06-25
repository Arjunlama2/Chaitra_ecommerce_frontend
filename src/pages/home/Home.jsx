import React from 'react'
import Header from '../../components/landing/Header'
import Navbar from '../../components/landing/Navbar'
import Hero from '../../components/landing/Hero'
import Products from '../../components/landing/Products'
import LatestProducts from '../../components/landing/LatestProducts'

function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <Products/>
    <LatestProducts/>
    
    </>
  )
}

export default Home