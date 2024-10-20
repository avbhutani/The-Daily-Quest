import React from 'react'
import {useNavigate} from 'react-router-dom'
import toDoImg from '../assets/to-do.png'
import { useAuth0 } from '@auth0/auth0-react'
const Header = () => {
  const navigate = useNavigate()
  const {user,isAuthenticated} = useAuth0()
  
  return (
    <div className='bg-red-400 items-center flex  justify-between text-white'>
      <div className='w-10 ml-5 hover:cursor-pointer'>
        <img src= {toDoImg} alt=""  />
      </div>
      <div className='flex mr-5 space-x-3 '>
        {user?(<><button className="hover:bg-white hover:text-red-400 py-4 px-4">Login</button>
        <button className='hover:bg-white hover:text-red-400 py-4 px-4'>Register</button></>):
        (
          <></>
        )}
      </div>
    </div>
  )
}

export default Header
