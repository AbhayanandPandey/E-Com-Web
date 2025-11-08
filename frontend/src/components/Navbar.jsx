import React, { useState, useEffect } from 'react'
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
    <div className="flex items-center justify-between py-5 font-medium relative">
      <img
        src={logo}
        className="w-28 md:w-40 cursor-pointer"
        onClick={() => navigate('/')}
        alt="Shopwave Logo"
      />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

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
                alt="Close Profile"
              />
              <p className="cursor-pointer hover:text-black text-gray-600 py-1">My Profile</p>
              <p className="cursor-pointer hover:text-black text-gray-600 py-1">Orders</p>
              <p className="cursor-pointer hover:text-black text-gray-600 py-1">Logout</p>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5 cursor-pointer" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {visible && (
        <>
          <div
            className="fixed inset-0 bg-black/40 bg-opacity-40 z-20"
            onClick={() => setVisible(false)}
          ></div>

          <div className="fixed top-0 right-0 w-64 h-screen bg-white z-30 shadow-lg flex flex-col p-5 animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <img
                src={logo}
                alt="Shopwave"
                className="w-24 cursor-pointer"
                onClick={() => {
                  navigate('/')
                  setVisible(false)
                }}
              />
              <img
                src={assets.cross_icon}
                className="w-4 h-4 cursor-pointer"
                alt="Close"
                onClick={() => setVisible(false)}
              />
            </div>

            <ul className="flex flex-col gap-4 text-gray-700 text-sm">
              <NavLink
                to="/"
                onClick={() => setVisible(false)}
                className="hover:text-black"
              >
                HOME
              </NavLink>
              <NavLink
                to="/collection"
                onClick={() => setVisible(false)}
                className="hover:text-black"
              >
                COLLECTION
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setVisible(false)}
                className="hover:text-black"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setVisible(false)}
                className="hover:text-black"
              >
                CONTACT
              </NavLink>
            </ul>

            <div className="mt-auto flex items-center justify-around pt-6 border-t">
              <img
                src={assets.search_icon}
                className="w-5 cursor-pointer"
                alt="Search"
              />
              <img
                src={assets.cart_icon}
                className="w-5 cursor-pointer"
                alt="Cart"
                onClick={() => {
                  navigate('/cart')
                  setVisible(false)
                }}
              />
              <img
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt="Profile"
                onClick={() => {
                  navigate('/profile')
                  setVisible(false)
                }}
              />
            </div>

          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
