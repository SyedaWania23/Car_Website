"use client"

import React from 'react'
import Link from 'next/link'

const page = () => {
  
  return (
    <div className='bg-blue-100 h-auto '>
 <h1 className='font-bold text-4xl text-center pt-7'>Enter your Details</h1>
 <div >
  <form className='flex flex-col px-96 py-24 gap-4 '>
    <input type="text" className=' px-2 py-2 border border-gray-500 rounded-md 'placeholder='Enter your Name'/>

    <input type="email" className=' px-2 py-2 rounded-md  border border-gray-500 'placeholder='Enter your Email'/>

    <input type="password" className='border rounded-md  border-gray-500 px-2 py-2 'placeholder='Enter your password'/>

    <input type="text" className='border border-gray-500 rounded-md  px-2 py-2 'placeholder='Enter your Address'/>
     
   <Link href="/Thankyou"className='border border-gray-600 bg-blue-600 hover:bg-white text-white mx-40 p-2 rounded-md hover:text-black w-36 text-center '>Place your Order</Link>
   
  </form>
  
  
  </div>     
    </div>
  )
}

export default page
