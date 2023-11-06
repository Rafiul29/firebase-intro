import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

  const {user,logout}=useContext(AuthContext)


  const handleLogout=()=>{
      logout()
      .then(()=>{})
      .catch((error)=>console.log(error))
  }
console.log(user)
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
            <Link to="/orders">Orders</Link>
          </ul>
        </div>
        {user? (<><p>{user.email}</p> <button  onClick={handleLogout} className="bg-slate-300 px-3 py-2 rounded-md">logout</button></>): null}
      </div>
    </div>
  );
};

export default Header;
