import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const OurPolicy = () => {
    const policies = [
        {
            icon: assets.exchange_icon,
            title: 'Easy Exchange Policy',
            desc: 'We offer a hassle-free exchange process for your convenience.',
        },
        {
            icon: assets.quality_icon,
            title: '7 Days Return Policy',
            desc: 'Return products within 7 days — no questions asked!',
        },
        {
            icon: assets.support_img,
            title: '24/7 Customer Support',
            desc: 'Our team is here round the clock to assist you anytime.',
        },
    ]

    return (
        <div className='py-10 '>
            <div className='max-w-6xl mx-auto px-4 text-center'>
                <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800 mb-10'>
                    <Title text1={'OUR'} text2={'POLICIES'} />
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                    {policies.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300'
                        >
                            <div className='relative mb-5'>
                                <div className='absolute inset-0 blur-xl bg-indigo-200 rounded-full opacity-30'></div>
                                <img
                                    src={item.icon}
                                    className='relative w-14 h-14 mx-auto z-10'
                                    alt={item.title}
                                />
                            </div>
                            <p className='font-semibold text-gray-800 mb-2'>{item.title}</p>
                            <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurPolicy
