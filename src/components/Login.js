import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //google login system
  const handleGoogleLogin = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
        console.log(data.user);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
      console.log(result.user)
      navigate("/profile");
    })
    .catch(err=>{
      console.log(err.message)
    })

     //reset input
     setEmail("")
     setPassword("")
  };
  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl text-gray-500 mb-10">
        Login
      </h2>
      <div className="login-platforms flex flex-col gap-6 items-center">
        <button
          onClick={handleGoogleLogin}
          className="google-sign-in border h-14 w-72 rounded-3xl border-gray-400 text-xl text-gray-600 active:border-orange-500 active:bg-orange-500 active:text-orange-50 flex  flex-row justify-center gap-2 items-center"
        >
          <span>
            <FcGoogle />{" "}
          </span>{" "}
          <p>Login with Google</p>
        </button>

        <button
          onClick={handleGithubLogin}
          className="google-sign-in border h-14 w-72 rounded-3xl border-gray-400 text-xl text-gray-600 active:border-orange-500 active:bg-orange-500 active:text-orange-50 flex  flex-row justify-center gap-2 items-center"
        >
          <span>
            <BsGithub />{" "}
          </span>{" "}
          <p>Login with github</p>
        </button>

        <button
          onClick={handleFacebookLogin}
          className="google-sign-in border h-14 w-72 rounded-3xl border-gray-400 text-xl text-gray-600 active:border-orange-500 active:bg-orange-500 active:text-orange-50 flex  flex-row justify-center gap-2 items-center"
        >
          <span>
            <BsFacebook />{" "}
          </span>{" "}
          <p>Login with Facebook</p>
        </button>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 items-start"
        >
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
            value="Login"
            className="text-xl text-gray-50 bg-orange-600 w-[18rem] py-3 rounded-md cursor-pointer hover:bg-orange-500 hover:text-gray-200 duration-300"
          />
          <p>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-medium hover:underline "
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
