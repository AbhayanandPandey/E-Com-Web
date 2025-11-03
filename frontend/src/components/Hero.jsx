import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    const [imgLoaded, setImgLoaded] = useState(false)

    return (
        <div className='flex flex-col sm:flex-row border border-gray-300 shadow:sm'>
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
                    </div>
                    <h1 className='prata-regular text-3xl  lg:text-5xl leading-relaxed '>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 mdLw-11 h-0.5 bg-[#414141] '></p>
                    </div>
                </div>
            </div>

            {/* Hero Image with Loading State */}
            <div className='w-full sm:w-1/2 relative flex items-center justify-center'>
                {!imgLoaded && (
                    <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
                        <div className='w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin'></div>
                    </div>
                )}
                <img
                    src={assets.hero_img}
                    className={`w-full transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                    alt=""
                    onLoad={() => setImgLoaded(false)}
                />
            </div>
        </div>
    )
}

export default Hero
