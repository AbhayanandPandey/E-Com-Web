import React from 'react'
import {assets} from '../assets/assets'
import logo from '../assets/shopwave-removebg-preview.png'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium pt-0'>
      <img src={logo} className='w-36 p-0' alt="" /> 
    </div>
  )
}

export default Navbar
