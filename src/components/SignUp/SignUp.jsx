import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const SignUp = () => {

  const [error,setError]=useState();


  const {createUser}=useAuthContext();

  const handleSignUp=(e)=>{
    e.preventDefault()
   
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    const confirm=form.confirm.value;
    setError("");
    if(password!==confirm){
        setError('Your password did not match');
        return;
    }
    else if(password.length<6){
      setError("password must be 6 character or longer");
      return;
    }
    createUser(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
    })
    .catch(error=>{
      console.log(error)
      setError(error.message);
    })

}

  return (
    <div className="form-container">
      <div className="form-body">
        <h2 className="form-title">Signup </h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id="confirm-password"
              placeholder="confirm password"
              required
            />
          </div>

          <input type="submit" value="Signup" className="btn-submit" />
        </form>

        <p className="user-decisons">
          <small>
          Already and account? <Link to="/login">Login</Link>{" "}
          </small>
        </p>
          <p className="text-error">{error && error}</p>
        <div className="optional-signup">
          <span></span> <p>or</p> <span></span>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
