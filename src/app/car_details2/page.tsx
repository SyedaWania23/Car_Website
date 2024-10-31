
import Link from 'next/link';
import React from 'react'

const page = () => {

  return (
    <div className='bg-blue-50 pb-20 '>
      <div>
        <h1 className='font-semibold text-center text-2xl underline mt-4 pt-4'>Suzuki Alto 2024 Price in Pakistan,Images,Reviews & <br />Specs</h1>
        
      </div>
      
      <div className='' >
        <img src="suzuki-aulto.jpg" alt="" className='mx-96 h-56 w-auto px-28 mt-10 ' />
      </div>

      <div className='flex gap-5 justify-center mt-10'>    <button className='rounded-sm bg-white text-black h-8  text-xs w-32 hover:bg-blue-700 hover:text-white border border-black'>Book a test drive</button>
      
      <button className='rounded-sm bg-white text-black h-8 text-xs w-36 hover:bg-blue-700 hover:text-white border border-black'>Request Bank Finance</button>
      
      
      <button className='rounded-sm bg-white text-black h-8 text-xs w-28 hover:bg-blue-700 border hover:text-white  border-black'>Visit Place</button>
      
      
      <button className='rounded-sm bg-white text-black h-8  text-xs w-32 hover:bg-blue-700 border border-black hover:text-white'>Car Inspection</button>
      </div>
      <div>
      <h1 className='text-center text-2xl mt-5'>Vehicle Description</h1>
      </div>
    <div className='flex justify-center gap-7 text-xs mt-4'>
       
        <p><b>Number of Doors </b>4</p>
        <p><b>Engine 1800 </b>CC</p>
        <p><b>Condition</b> 8.5/10 km</p>
        <p><b>Driven</b> 9,500 KM</p>
        <p><b>Suspension Type </b>:Soft Suspension</p>
        
       

    </div>
    <div className='flex justify-start mx-64 px-5 gap-7 text-xs mt-4'>
    <p><b>Average </b>12 km per ltr</p>
        <p><b>Transmission Automatic</b></p>
        <p><b>Fuel Type</b> High Octane</p>
    </div>
    <div>
        <h1 className='text-green-600 font-semibold text-lg text-center mt-5'>PKR 50,00,000</h1>
    </div>
    <div className='flex gap-5 justify-center mt-10'>
    <Link href="/form" className='rounded-sm bg-blue-700 text-white h-8  text-xs w-32 hover:bg-white border border-black hover:text-blue-800 text-center py-2'>Make Payment</Link>
    </div>
      </div>
    
  )
}

export default page

