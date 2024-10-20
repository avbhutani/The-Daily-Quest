import React from 'react'
import {useNavigate} from 'react-router-dom'
import toDoImg from '../assets/to-do.png'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-red-400 items-center flex  justify-between text-white'>
      <div className='w-10 ml-5 hover:cursor-pointer'>
        <img src= {toDoImg} alt=""  />
      </div>
      <div className='flex mr-5 space-x-3 '>
        <button className="hover:bg-white hover:text-red-400 py-4 px-4">Login</button>
        <button className='hover:bg-white hover:text-red-400 py-4 px-4'>Register</button>
      </div>
    </div>
  )
}

export default Header
