import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const { products } = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 pt-10 border-t border-gray-200'>
        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
          <div className={``}>

          </div>
        </div>
    </div>
  )
}

export default Collection
