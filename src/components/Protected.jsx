import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

const Protected = () => {
    const isAuthenticated = localStorage.getItem('user_data')
    const navigate = useNavigate()
      
 useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login') // redirect if not logged in
    }
  }, []) // ← make sure to include these dependencies

  return  <Outlet/>

}

export default Protected