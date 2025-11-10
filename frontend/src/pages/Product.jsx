import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext)
  const [image, setImage] = useState('')
  const [productData, setProductData] = useState(false)
  const fetchProductData = async () => {
    products.map((i) => {
      if (i._id === productId) {
        setProductData(i)
        setImage(i.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])
  return productData ? (
    <div>

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
