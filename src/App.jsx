


import { Routes, Route } from "react-router"
import Home from "./pages/home/Home"
import Login from "./Login"
import ProductCard from "./components/ProductCard"



function App() {
  return (
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/card' element={<ProductCard/>}/>

    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<div>hi</div>}/>
  </Routes>
  )
}

export default App