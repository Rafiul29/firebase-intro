import { createContext } from "react"
import {app}  from "../firebase.init"
import { getAuth } from "firebase/auth"

export const AuthContext=createContext(null)


const auth=getAuth(app)

const AuthProvider = ({children}) => {

  const createUser=(email,password)=>{
    
  }
const user={
  name:"rdd"
}
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider