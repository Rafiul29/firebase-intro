import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext=createContext(null)


const auth=getAuth(app)

const AuthProviders = ({children}) => {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true)

// createUser
const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password);
}

// signinUser
const signInUser=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}


// observer user auth state
useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoading(false);
  })

  // stop observing while unmounting
  return()=>{
    return unsubscribe();

  }

},[])

// logout
const logOut=()=>{
  return signOut(auth);
}

  const authInfo={
    user,
    createUser,
    signInUser,
    logOut,
    loading,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders;