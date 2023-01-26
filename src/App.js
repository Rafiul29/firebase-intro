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
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="/profile" element={<Profile user={user}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
    </div>
  )
}

export default App