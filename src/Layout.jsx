import React from 'react'
import Header from './components/landing/Header'
import Home from './pages/home/Home'
import Footer from './components/landing/Footer'
import { Outlet } from 'react-router'
import Navbar from './components/landing/Navbar'

const Layout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout