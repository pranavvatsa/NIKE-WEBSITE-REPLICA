import React from 'react'

const contact = () => {
  return (
    <div className='w-full py-6 text-white bg-black border-b border-gray-600 ' id='contact'>
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-3xl sm:text-2xl text-xl py-4'>
                    Get in touch...
                </h1>
                <p>Sign up to get the best deals out there.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                    <button className='bg-[#363737] w-[150px] rounded-md font-medium my-6 ml-4 px-6  py-3 text-[#00df9a] hover:opacity-80'> SIGN UP</button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default contact