import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {

  const location =useLocation();
  console.log(location)
  const {user,loading}=useAuthContext();

  if(loading){
    return <p>Loding ...</p>
  }
  if(user){
    return children;
  }
  return  <Navigate to="/login" state={{from:location}}  replace></Navigate>
}

export default PrivetRoute