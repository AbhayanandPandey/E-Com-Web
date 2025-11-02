import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProd, setFilterProd] = useState([])

  useEffect(() => {
    setFilterProd(products)
  }, [])

  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 pt-10 border-t border-gray-200 pb-6'>
      <div className='min-w-60 pb-5 sm:pb-0'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" /></p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Women'} /> Women
            </p><p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Kids'} /> Men
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={' Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Bottomwear'} /> Bottomwear
            </p><p className='flex gap-2'>
              <input type="checkbox" className='w-3' name="" id="" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>

      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select className='border border-gray-300 text-sm px-2 outline-none cursor-pointer' >
            <option value="relavent" className='cursor-pointer'>Sort by Relavent</option>
            <option value="low-high" className='cursor-pointer'> Sort by: Low to High</option>
            <option value="high-low" className='cursor-pointer'>Sort by: High to Low</option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProd.map((item, i) => (
              <ProductItem key={i} id={item._id}
                image={item.image}
                name={item.name}
                price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
