
import  { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivetRoutes = ({children}) => {

  const {user,loading}=useContext(AuthContext)

  if(loading){
    return <div>loading .....</div>
  }
  if(user){
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>
}

export default PrivetRoutes