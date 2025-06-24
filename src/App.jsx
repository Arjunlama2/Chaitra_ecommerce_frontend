


import { Routes, Route } from "react-router"
import Home from "./pages/home/Home"
import Login from "./Login"
// import ProductCard from "./components/ProductCard"
import Products from "./components/landing/Products"



function App() {
  return (
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/card' element={<Products/>}/>

    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<div>hi</div>}/>
  </Routes>
  )
}

export default App