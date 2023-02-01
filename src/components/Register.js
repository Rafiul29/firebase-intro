import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import app from "../firebase/firebase.init";


const auth=getAuth(app)

const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
   
  const navigate=useNavigate()
  const handleRegister=(e)=>{
    e.preventDefault()
   //sign up a new 
   createUserWithEmailAndPassword(auth, email, password)
   .then((result)=>{
    console.log(result.user)
      if(result.user){
        //update username
        updateUserProfile()
      }
      navigate("/login")
   })
   .catch(err=>{
    console.log(err.message)
   })
    //reset input
    setEmail("")
    setName("")
    setPassword("")
  }
  const updateUserProfile=()=>{
    updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
    }).then(()=>{
      console.log("Profile uppdated")
    })
    .then((err)=>{
      console.log(err.message)
    })
  }
  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleRegister} className="flex flex-col gap-3 items-start">
        <div className="form-control flex flex-col gap-3">
          <label htmlFor="full-name" className="text-xl text-gray-600">
            Full Name
          </label>
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Enter your email"
            className="border py-3 px-5 rounded-md"
            required
          />
        </div>
        <div className="form-control flex flex-col gap-3">
          <label htmlFor="email" className="text-xl text-gray-600">
            Email address
          </label>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="border py-3 px-5 rounded-md"
            required
          />
        </div>
        <div className="form-control flex flex-col gap-3">
          <label htmlFor="email" className="text-xl text-gray-600">
            Password
          </label>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="border py-3 px-5 rounded-md"
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="text-xl text-gray-50 bg-orange-600 w-[18rem] py-3 rounded-md cursor-pointer hover:bg-orange-500 hover:text-gray-200 duration-300"
        />
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-medium hover:underline "
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
