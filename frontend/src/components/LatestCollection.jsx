import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProduct, setLatestProduct] = useState([])
  const [screenSize, setScreenSize] = useState('')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize('mobile')     
      else if (width >= 640 && width < 1024) setScreenSize('tablet')
      else setScreenSize('desktop') 
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    let displayCount = 10 
    if (screenSize === 'mobile') displayCount = 10   
    else if (screenSize === 'tablet') displayCount = 8 
    else if (screenSize === 'desktop') displayCount = 10 

    setLatestProduct(products.slice(0, displayCount))
  }, [products, screenSize])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque consequatur suscipit tempora laborum sapiente qui.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProduct.map((item, i) => (
          <ProductItem
            key={i}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
