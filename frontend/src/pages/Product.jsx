import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext)

  const [size, setSize] = useState('')
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
    <div className='border-gray-300 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,i)=>(
                <img onClick={()=>setImage(item)} src={item} alt="" key={i} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className='w-3.5 ' />
                <img src={assets.star_icon} alt="" className='w-3.5 ' />
                <img src={assets.star_icon} alt="" className='w-3.5 ' />
                <img src={assets.star_icon} alt="" className='w-3.5 ' />
                <img src={assets.star_dull_icon} alt="" className='w-3.5 ' />
                <p className='pl-2'>(292)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'> {currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 w-4/5'>{productData.description}</p>
            <div className='flex flex-col gap-2 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,i)=>(
                    <button onClick={()=>setSize(item)} key={i} className={`border-gray-100 border py-2 px-4 bg-gray-100 cursor-pointer rounded ${item=== size ? 'border-orange-500 border-2' : ''}`}>{item}</button>
                  ))}
                </div>
            </div>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5 text-gray-300' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original products.</p>
              <p>Cash on delivey is available on this product. </p>
              <p> Easy return & exchange Policy in 10 days</p>
            </div>
        </div>
      </div>
      <div className='mt-20 '>
          <div className='flex '>
            <b className=' border border-gray-300 px-5 py-3 text-sm'>Description</b>
            <p className=' border border-gray-300 px-5 py-3 text-sm'> Reviews (292)</p>
          </div>
          <div className='flex flex-col gap-4 border border-gray-300 p-6 text-sm text-gray-500'>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quo non illo delectus similique velit maxime nulla pariatur, doloribus perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis ducimus maiores dicta illo nihil optio ullam perspiciatis voluptates aut.</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati quod recusandae placeat ducimus nemo a quae. Fugit, vel iure culpa velit beatae necessitatibus qui quis, eum at voluptatibus consectetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sunt aliquid! Quam fugit ex asperiores ducimus fugiat quisquam, natus dolores?</p>
          </div>
      </div>

      <div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
