import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)

  return showSearch ? (
    <div className="border-t border-b border-gray-300 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder-gray-500"
          type="text"
          placeholder="Search products..."
        />
        <img src={assets.search_icon} className="w-4 opacity-70" alt="Search" />
      </div>
      <img
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer ml-2 opacity-70 hover:opacity-100 transition"
        onClick={() => {
          setShowSearch(false)
          setSearch('') 
        }}
        alt="Close"
      />
    </div>
  ) : null
}

export default SearchBar
