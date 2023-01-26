import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init'
import { useNavigate } from 'react-router-dom';

const auth =getAuth(app);
const providerGoogle= new GoogleAuthProvider();

const Login = () => {
    const navigate=useNavigate()
    //google login system
    const handleGoogleLogin=()=>{
        signInWithPopup(auth,providerGoogle)
          .then((data)=>{
            console.log(data.user)
            navigate('/profile')
          })
          .catch((error)=>{
            console.log(error)
          })
    }
  return (
    <div className='login container mx-auto py-10'
    >
    <h2 className='section-title text-center text-4xl text-gray-500 mb-10'>Login</h2>
    <div className='login-platforms flex flex-col gap-6 items-center'>
        <button onClick={handleGoogleLogin} className='google-sign-in border h-14 w-96  rounded-3xl border-gray-400 text-xl text-gray-600 active:border-orange-500 active:bg-orange-500 active:text-orange-50'>Login with Google</button>
    </div>
    </div>
  )
}

export default Login