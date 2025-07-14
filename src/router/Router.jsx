// router/index.js
import { createBrowserRouter } from "react-router-dom";

import { Protected } from "../components/Protected";
import { Layout } from "../Layout";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Shopping from "../pages/Shopping";
import Products from "../components/landing/Products";
import ProductDetails from "../pages/[slug]/ProductDetails";
import Signup from "../pages/Signup";
import Pages from "../pages/Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Layout /></Protected> ,
    children: [
      {
        index: true,
        element: (
            <Home />
        ),
      },
      {
        path:"products",
        // index: true,
        element: (
            <Products />
        ),
      },


      {
        path: "dashboard",
        element: (
            <Shopping />
        ),
      },
      {
        path: "shop",
        element: (
            <Shopping />
        ),
      },
      {
        path: "product/:id",
        element: (
            <ProductDetails/>
        ),
      },
      {
        path: "pages",
        element: (
            <Pages/>
        ),
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
