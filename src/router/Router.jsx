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

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected><Layout /></Protected> ,
    children: [
      {
        index: true,
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path:"products",
        // index: true,
        element: (
          <Protected>
            <Products />
          </Protected>
        ),
      },


      {
        path: "dashboard",
        element: (
          <Protected>
            <Shopping />
          </Protected>
        ),
      },
      {
        path: "shop",
        element: (
          <Protected>
            <Shopping />
          </Protected>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Protected>
            <ProductDetails/>
          </Protected>
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
