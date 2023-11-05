import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Home = () => {
  const user=useContext(AuthContext)
  return (
    <div >
   {user && user.name}
    </div>
  )
}

export default Home