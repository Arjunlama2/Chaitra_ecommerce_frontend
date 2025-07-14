import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/user/authSlice';
import axios from 'axios';
import { serverUrl } from '../api';

// get token from local storage
// user/me -fetchdata
// store it in global store

export const Protected = ({ children }) => {
  const token = localStorage.getItem('token')
 const dispatch = useDispatch();
  const { user, isAuthenticated,isLoading } = useSelector((state) => state.auth);

  console.log(user,"this is user state")
  console.log(token, "this is token");


  const getMe = async () => {
    const res = await axios.get(`${serverUrl}/user/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    console.log(res,'this is response')

 
    const data = res.data
    console.log(data,"this is user")


    dispatch(setUser(data))



    console.log(res, "this is response");
  };
  useEffect(() => {
    getMe();
  },[]);




  
  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  //     </div>
  //   );
  // }
    if(isLoading) return <p>State is Loading...</p>

    if(!isAuthenticated){
     <Navigate to={'/login'} replace/>
    }
 

    return children;
  

  
};