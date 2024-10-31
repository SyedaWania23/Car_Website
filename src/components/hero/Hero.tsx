import React from 'react'



const Hero = () => {
  return (
    <div className='h-auto'>
        <div className=''>
      <h1 className='text-lg text-center mt-10 font-semibold  '>Sell Your Car On PakWheels and Get the Best Price</h1>
      </div>
      <div className='flex justify-evenly px-24'>
        <div>
        <h1 className='text-blue-800 mt-10 text-xl mx-5 font-semibold'>Post Your Ad On PakWheels</h1>
        <ul className='list-disc mx-10 mt-3 text-sm text-gray-600 '>
            <li className=''> Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell Your car Fast at the Best Price</li>
        </ul>
        <div>
        <button className='rounded-md bg-red-600 text-white h-10 text-base w-52 mx-5  mt-4 hover:bg-red-800'>Post an Ad</button>
        </div>
      </div>
  <div className='mt-28 text-gray-400 text-lg font-semibold'>OR</div>    
  
  
      
      <div>
        <h1 className='text-blue-800 mt-10 text-xl mx-5 font-semibold'>Try PakWheels Sell It For Me</h1>
        <ul className='list-disc mx-10 mt-3 text-sm text-gray-600 '>
            <li className=''> Dedicated Sales Expert to Sell your Car</li>
            <li>We Bargain For you and Share the Best Offer</li>
            <li>We ensure Safe & Secure Transaction</li>
        </ul>
        <div>
        <button className='rounded-md bg-blue-400 text-white h-10 text-base w-52 mx-5  mt-4 hover:bg-blue-800'> Register Your Car</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
