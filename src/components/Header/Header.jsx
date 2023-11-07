import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuthContext();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {user && (
          <span className="text-white">
            Welcome {user.email}{" "}
            <button onClick={handleLogout}> Log out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
