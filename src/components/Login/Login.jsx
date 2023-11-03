import React, { useRef, useState } from "react";
import { app } from "../../firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRef=useRef();
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const user = data.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const resetPassword=(e)=>{
      const email=emailRef.current.value
      if(!email){
        setError("Please Provided your email address to reset password")
        return;
      }
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert("please check your email")
      })
        .catch((error)=>{
          setError(error.message);
        })
      
  }

  return (
    <div>
      <button onClick={handleWithGoogle}>Google Login</button>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            // onBlur={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email"
            id="email"
            name="email"
            required
            ref={emailRef}
          />
        </div>

        <div>
          <input
            // onBlur={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="your password"
            id="password"
            name="password"
            required
          />
        </div>

        <button type="submit">submit</button>
      </form>
      <p>
        <small>
          Forget Password ? Please <button onClick={resetPassword}>Reset Password</button>
        </small>
      </p>
      <div>
        Now to this website?<Link to="/register">Register</Link>
      </div>
      <p>{error && error}</p>
    </div>
  );
};

export default Login;
