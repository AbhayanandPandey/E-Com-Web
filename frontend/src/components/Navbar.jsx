import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/SHOPWAVE-removebg-preview (1).png'
const Navbar = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [profile, setProfile] = useState(false)
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={logo} className='w-28 md:w-40 lg:w-30 cursor-pointer -pr-[100px] ' onClick={() => navigate('/')} alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700 sm:relative' >
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p >HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>
                <NavLink to='/collection' className="flex flex-col items-center gap-1">
                    <p >COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p >ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p >CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
                {/* Profile dropdown */}
                <div className="relative">
                    <img
                        src={assets.profile_icon}
                        className="w-5 cursor-pointer"
                        alt="Profile"
                        onClick={() => setProfile(!profile)}
                    />

                    {profile && (
                        <div className="absolute right-0 mt-3 w-40 py-3 px-4 bg-white shadow-md rounded-lg z-10">
                            <img src={assets.cross_icon} className='h-3 ml-auto cursor-pointer' onClick={() => setProfile(!profile)} alt="" />
                            <p className="cursor-pointer hover:text-black text-gray-600 py-1">My Profile</p>
                            <p className="cursor-pointer hover:text-black text-gray-600 py-1">Orders</p>
                            <p className="cursor-pointer hover:text-black text-gray-600 py-1">Logout</p>
                        </div>
                    )}
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>


            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-white ${visible ? 'w-full h-full fixed z-999 ' : 'w-0'} `}>
                <div className='flex flex-col text-gray-600'>
                    <div className='flex items-center gap-4 p-3' onClick={() => setVisible(false)} >
                        <img className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt="" />
                        <p className='pb-.99'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/' >HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/collection' >COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/about' >ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/contact' >CONTACT</NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navbar
