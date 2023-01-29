import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar flex justify-between mx-auto py-5 container border-b'>
        <Link to="/" className='font-medium text-orange-500 text-3xl'>Firebase</Link>
        <ul className='link flex gap-8 '>
            <li>
                <Link className='text-xl hover:text-orange-400 duration-300'  to='/'>Home</Link>
            </li>
            <li>
                <Link className='text-xl hover:text-orange-400 duration-300' to='/about'>About</Link>
            </li>
            <li>
                <Link className='text-xl hover:text-orange-400 duration-300' to='/profile'>Profile</Link>
            </li>
            <li>
                <Link 
               to={`/${user?.email? "profile":"login"}`}
                className='text-xl hover:text-orange-400 duration-300' >
                    {user?.email? `Welcome to ${user.displayName}`:"Login"}
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar