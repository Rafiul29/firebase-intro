import { createContext, useEffect, useState } from "react"
import {app}  from "../firebase.init"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth
      ,email,password);
  }

  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  //observer auth state chnage
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser);
      setLoading(false)
      setUser(currentUser);
    })

    return ()=>{
      unsubscribe()
    }
  })

  const logout=()=>{
   return signOut(auth)
  }

const authInfo={
  user,
  createUser,
  loginUser,
  logout,
  loading,
}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider