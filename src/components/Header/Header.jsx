import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary w-full ">
      <div className=" navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
