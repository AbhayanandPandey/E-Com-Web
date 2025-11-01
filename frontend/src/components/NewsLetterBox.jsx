import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='text-center py-16 pt-10 px-6 '>
            <p className='text-2xl sm:text-3xl font-semibold text-gray-800'>
                Subscribe now & get <span className='text-indigo-600'>20% off</span>
            </p>

            <p className='text-gray-500 mt-3 max-w-lg mx-auto'>
                Be the first to know about new arrivals, exclusive offers, and fashion updates straight to your inbox.
            </p>

            <form
                onSubmit={onSubmitHandler}
                className='mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-2/3 lg:w-1/2 mx-auto bg-white border border-gray-300 rounded-full p-2 shadow-sm focus-within:shadow-md transition-shadow duration-200'
            >
                <input
                    type='email'
                    className='flex-1 px-4 py-2 text-sm outline-none border-none rounded-full text-gray-700 placeholder-gray-400'
                    placeholder='Enter your email address'
                    required
                />
                <button
                    type='submit'
                    className='bg-linear-to-r from-indigo-600 to-purple-500 text-white text-sm font-medium px-6 py-2 rounded-full cursor-pointer hover:from-indigo-700 hover:to-purple-600 transition-all duration-300 shadow-sm'
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    )
}

export default NewsLetterBox
