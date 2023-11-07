import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const Login = () => {

  const [error, setError] = useState("");
  const { signInUser } = useAuthContext();

  const location =useLocation();
  console.log(location)

  const from=location?.state?.from?.pathname || '/';

  const navigate=useNavigate()
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //
    setError("")
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from,{replace:true});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <div className="form-body">
        <h2 className="form-title">Login </h2>
        <form onSubmit={loginHandler}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              required
            />
          </div>

          <input type="submit" value="Login" className="btn-submit" />
        </form>
        <p className="user-decisons">
          <small>
            New to Ema-Jhon? <Link to="/signup">Create New Account</Link>{" "}
          </small>
        </p>
        <p>{error && error}</p>
      </div>
    </div>
  );
};

export default Login;
