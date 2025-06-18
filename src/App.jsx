


import { Routes, Route } from "react-router"
import Home from "./pages/home/Home"
import Login from "./Login"



function App() {
  return (
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<div>hi</div>}/>
  </Routes>
  )
}

export default App