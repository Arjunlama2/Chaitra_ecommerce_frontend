import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Login from "./Login";
// import ProductCard from "./components/ProductCard"
import Products from "./components/landing/Products";
import Layout from "./Layout";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <Routes>
      
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="products" element={<Products />} />{" "}
        <Route path="shop" element={<Shopping />} />{" "}
        {/* Renders at /about */}
        {/* <Route path="contact" element={<Contact />} />{" "} */}
        {/* Renders at /contact */}
      </Route>

      <Route path="signup" element={<div>hi</div>} />
    </Routes>
  );
}

export default App;
