import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/SHOPWAVE-removebg-preview (1).png'

const Navbar = () => {
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [profile, setProfile] = useState(false)

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [visible])

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <img
                src={logo}
                className="w-28 md:w-40 lg:w-30 cursor-pointer -pr-[100px]"
                onClick={() => navigate('/')}
                alt="Shopwave Logo"
            />

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700 sm:relative">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

                <div className="relative">
                    <img
                        src={assets.profile_icon}
                        className="w-5 cursor-pointer"
                        alt="Profile"
                        onClick={() => setProfile(!profile)}
                    />

                    {profile && (
                        <div className="absolute right-0 mt-3 w-40 py-3 px-4 bg-white shadow-md rounded-lg z-10">
                            <img
                                src={assets.cross_icon}
                                className="h-3 ml-auto cursor-pointer"
                                onClick={() => setProfile(!profile)}
                                alt=""
                            />
                            <p className="cursor-pointer hover:text-black text-gray-600 py-1">
                                My Profile
                            </p>
                            <p className="cursor-pointer hover:text-black text-gray-600 py-1">
                                Orders
                            </p>
                            <p className="cursor-pointer hover:text-black text-gray-600 py-1">
                                Logout
                            </p>
                        </div>
                    )}
                </div>

                <Link to="/cart" className="relative">
                    <img
                        src={assets.cart_icon}
                        className="w-5 min-w-5 cursor-pointer"
                        alt=""
                    />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        10
                    </p>
                </Link>

                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt=""
                />
            </div>

            <div
                className={`fixed inset-0 bg-white z-999 transform transition-all duration-300 ease-in-out h-screen ${visible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-screen overflow-hidden text-gray-700">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-300 bg-gray-50">
                        <div className="flex items-center gap-3">

                            <button
                                onClick={() => setVisible(false)}
                                className="font-medium text-sm flex items-center gap-2 cursor-pointer hover:text-black transition"
                            >
                                <img
                                    src={assets.dropdown_icon}
                                    className="h-4 mt-px rotate-180"
                                    alt="Back"
                                />
                                Back
                            </button>

                        </div>
                        <img
                            src={logo}
                            className="w-24 cursor-pointer"
                            onClick={() => {
                                navigate('/')
                                setVisible(false)
                            }}
                            alt="Logo"
                        />
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col justify-center items-center text-lg font-medium space-y-1 py-10">
                            <NavLink
                                onClick={() => setVisible(false)}
                                className="p-2 hover:text-black text-gray-600 transition-colors"
                                to="/"
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                onClick={() => setVisible(false)}
                                className=" p-2 hover:text-black text-gray-600 transition-colors "
                                to="/collection"
                            >
                                COLLECTION
                            </NavLink>
                            <NavLink
                                onClick={() => setVisible(false)}
                                className="p-2 hover:text-black text-gray-600 transition-colors"
                                to="/about"
                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                                onClick={() => setVisible(false)}
                                className="p-2 hover:text-black text-gray-600 transition-colors"
                                to="/contact"
                            >
                                CONTACT
                            </NavLink>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-5 border-t border-gray-200 text-center text-xs text-gray-500 bg-gray-50">
                        © 2025 SHOPWAVE. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
