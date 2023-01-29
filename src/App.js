import { Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './components/Home'
import Register from './components/Register'
import Navbar from './components/Navbar'
import About from './components/About'
import Profile from './components/Profile'
import Login from './components/Login'
import app from './firebase/firebase.init';
import { useEffect, useState } from 'react';
import RequireAuth from './components/RequireAuth';
import RequireAuth2 from './components/RequireAuth2';

const auth=getAuth(app)

const  App=()=> {
  const [user,setUser]=useState("")

  useEffect(()=>{
    onAuthStateChanged(auth,data=>{
      if(data){
          setUser(data)
      }else{
        console.log("no user found")
      }
    })
  },[])


  return (
    <div className='app'>
    <Navbar user={user} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="/profile" element={
        <RequireAuth user={user}>
          <Profile user={user} setUser={setUser}/>
        </RequireAuth>
      }/>
      <Route path="/login" element={
        <RequireAuth2 user={user}>
          <Login/>
        </RequireAuth2>
      }/>
      <Route path="/register" element={
        <RequireAuth2 user={user}>
          <Register/>
        </RequireAuth2>
      }/>

    </Routes>
    </div>
  )
}

export default App