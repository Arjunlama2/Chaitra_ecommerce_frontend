// components/Layout.jsx
import React, { useEffect } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, setUser } from "./features/user/authSlice";
import Header from "./components/landing/Header";
import Footer from "./components/landing/Footer";
import Navbar from "./components/landing/Navbar";
import { serverUrl } from "./api";
import axios from "axios";

export const Layout = () => {
 

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <main>
          {/* <Header/> */}
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
};
