import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.init";
import { Link } from "react-router-dom";

const Register = () => {
  const auth = getAuth(app);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.{8,})/.test(
        password
      )
    ) {
      setError(
        "Please add at least one lower case and uppder case letter and one special character and at least 1 digit"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const user = data.user;
        sendEmailverificationFirebase(user);
        updateUserProfile(user, name);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const sendEmailverificationFirebase = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log(result);
        console.log("email verification send");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateUserProfile = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("user profile updted");
      })
      .catch((error) => {
        setError("user profile not updated");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onBlur={(e) => setName(e.target.value)}
            type="text"
            placeholder="your name"
            id="name"
            name="name"
          />
        </div>

        <div>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email"
            id="email"
            name="email"
          />
        </div>

        <div>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            type={showpassword ? "text" : "password"}
            placeholder="your password"
            id="password"
            name="password"
          />
        </div>
        <input type="checkbox" checked={ showpassword} onClick={()=>setShowpassword(!showpassword)} />
        <small onClick={()=>setShowpassword(!showpassword)} >
          {showpassword ? "hide " : "show " }
        </small>
        <button type="submit">Register</button>
      </form>
      <p>{error && error}</p>
      Already and account? <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
