"use client"
import { useRouter } from "next/navigation"
import React from "react"


const Featured = () => {
 const router = useRouter();
  return (
      <div className='bg-gray-200 h-96 mt-24 '>
        <div className='flex justify-between px-28 mt-8  '>
          <h1 className='font-semibold mt-3 text-lg'>Featured New Cars</h1>
          <h1 className='text-blue-400 text-xs mt-3 '>View All New Cars</h1>
        </div>
        <div>
          <ul className='flex gap-9 mx-28 mt-6 text-gray-600 text-sm'>
            <li className=''>Popular</li>
            <li className=''>Upcoming</li>
            <li className=''>Newly Launched</li>
          </ul>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-10 px-28'>
        
            <div className='bg-white'>
              <img  src="car2.webp"onClick= {()=>router.push("/car_details")} className='h-36 mx-9 cursor-pointer' alt="" />
            <div className='text-sm text-center'>
            <h1 className='font-semibold text-sm text-gray-600'>Toyota Corolla</h1>
            <h1 className='text-green-500'>PKR 59.7-75.5 Lacs</h1>
            <h1 className='text-gray-500 mb-4'>***** 621 Reviews</h1>
            </div>
    
            </div>
         
          <div className='bg-white'><img src="suzuki-aulto.jpg"onClick= {()=>router.push("/car_details2")} alt="" className='h-36 mx-9 cursor-pointer'/>
          <div className='text-sm text-center'>
            <h1 className='font-semibold text-sm text-gray-600'>Suzuki Alto</h1>
            <h1 className='text-green-500'>PKR 23.3-30.5 Lacs</h1>
            <h1 className='text-gray-500 mb-4'>***** 199 Reviews</h1>
            </div>
            </div>
  
            <div className='bg-white'><img src="honda-civic.jpg"onClick= {()=>router.push("/car_details3")} alt="" className='h-36 mx-0 cursor-pointer'/>
          <div className='text-sm text-center'>
            <h1 className='font-semibold text-sm text-gray-600'>Honda City</h1>
            <h1 className='text-green-500'>PKR 46.5-58.5 Lacs</h1>
            <h1 className='text-gray-500 mb-4'>***** 458 Reviews</h1>
            </div>
            </div>
            <div className='bg-white'><img src="city2.jpg"onClick= {()=>router.push("/car_details4")} alt="" className='h-36 mx-0 cursor-pointer'/>
          <div className='text-sm text-center'>
            <h1 className='font-semibold text-sm text-gray-600'>Honda Civic</h1>
            <h1 className='text-green-500'>PKR 86.6-99.0 Lacs</h1>
            <h1 className='text-gray-500 mb-4'>***** 357 Reviews</h1>
            </div>
            </div>
         
        </div>
  
       
  
      </div>
    )
  }
  
  export default Featured
  