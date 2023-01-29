import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Profile = ({ user,setUser }) => {
const navigate=useNavigate()

  const handleGoogleSignOut=()=>{
      signOut(auth)
      .then(()=>{
          console.log("sign Out Successful")
          navigate("/login")
          setUser("")
      })
      .catch((error)=>{
          console.log(("signout not successful"))
      })
  }

  return (
    <div className="profile container mx-auto py-10">
      <h2 className="section-title text-center text-4xl text-gray-500 mb-10">
        Profile
      </h2>
      {user.email && (
          <div className="profile-card  flex flex-col gap-3 items-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="h-28 w-28 rounded-full"
          />
          <h3 className="text-4xl">{user.displayName}</h3>
          <p className="">Email: {user.email}</p>
          <p>ID: {user.uid}</p>

          <button
            onClick={handleGoogleSignOut}
            className="google-sign-in border h-14 w-48  rounded-3xl border-gray-400 text-xl text-gray-600 active:border-orange-500 active:bg-orange-500 active:text-orange-50"
          >
            Sign out
          </button>
        </div>
   
      )}
    </div>
  );
};

export default Profile;
