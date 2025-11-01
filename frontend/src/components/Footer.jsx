import React from 'react'
import { assets } from '../assets/assets'
import logo from '../assets/SHOPWAVE-removebg-preview (1).png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-6 md:px-20 relative'>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-indigo-500 via-pink-500 to-orange-400"></div>

      <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 text-sm'>

        <div>
          <img src={logo} className='mb-5 w-36' alt="Shopwave logo" />
          <p className='w-full md:w-3/4 text-gray-600 leading-relaxed'>
            Discover fashion that fits your lifestyle. Shopwave brings you top-quality products at unbeatable prices.
          </p>
          <div className='flex gap-4 mt-5'>
            <a href="#" className='p-2 bg-white border rounded-full shadow-sm hover:bg-indigo-500 hover:text-white transition'>
              <FaFacebookF />
            </a>
            <a href="#" className='p-2 bg-white border rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition'>
              <FaInstagram />
            </a>
            <a href="#" className='p-2 bg-white border rounded-full shadow-sm hover:bg-sky-500 hover:text-white transition'>
              <FaTwitter />
            </a>
            <a href="#" className='p-2 bg-white border rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <p className='text-lg font-semibold mb-5 text-gray-800'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            {['Home', 'About Us', 'Delivery', 'Privacy Policy'].map((item, i) => (
              <li
                key={i}
                className='cursor-pointer hover:text-indigo-600 hover:translate-x-1 transition-transform duration-200'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='text-lg font-semibold mb-5 text-gray-800'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-indigo-600 transition'>+1 234 567 890</li>
            <li className='hover:text-indigo-600 transition'>contact@shopwave.com</li>
          </ul>
        </div>
      </div>

      <div className='mt-10'>
        <hr className='border-gray-300' />
        <p className='py-5 text-xs sm:text-sm text-center text-gray-500'>
          © {new Date().getFullYear()} <span className='font-semibold text-indigo-600'>Shopwave</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
