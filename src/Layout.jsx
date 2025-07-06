// components/Layout.jsx
import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setUser } from './features/user/authSlice';
import Header from './components/landing/Header';
import Footer from './components/landing/Footer';
import Navbar from './components/landing/Navbar';

export const Layout = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  console.log(isAuthenticated,"is auth")
  return (
    <div className="min-h-screen bg-gray-50">

      <main >
        <Header/>
        <Navbar/>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};