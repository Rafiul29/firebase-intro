
import { Outlet } from 'react-router'
import Header from '../Header/Header'
const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
    </div>
  )
}

export default Main