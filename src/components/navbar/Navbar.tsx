
import React from 'react'

const Navbar = () => {

  return (
    <div>
        <header className='flex justify-between  px-32 bg-black w-full text-white'>
         <div className=' text-xs mt-1 hover:bg-blue-400'>Download App via SMS</div> 
         <div ><ul className=' flex gap-10  w-32 mt-1 text-xs '><li className='hover:bg-blue-400'>Sign Up</li>
         <li className='hover:bg-blue-400'>Sign In</li>
         </ul></div>
         </header>
        
        <nav className='bg-black w-full h-24 flex items-center'>
           
      <div><img src="pak_car_wheel.jpg" alt="logo" className='h-24 py-2 mx-11'/></div>
      <div className='flex justify-evenly w-auto items-center '><ul className='text-white flex gap-8 text-xs py-8  '>
        <li className='hover:bg-red-800'><a href="">Used Cars</a></li>
        <li  className='hover:bg-red-800'><a href="">New Cars</a></li>
        <li className='hover:bg-red-800'><a href="">Bikes</a></li>
        <li className='hover:bg-red-800'><a href="">Auto Store</a></li>
        <li className='hover:bg-red-800'><a href="">Videos</a></li>
        <li className='hover:bg-red-800'><a href="">Forums</a></li>
        <li className='hover:bg-red-800'><a href="">Blog</a></li>
        <li className='hover:bg-red-800'><a href="">More</a></li>
        </ul>
        </div>
      <div>
       
    <button className='rounded-sm bg-red-600 text-white h-8 mx-14 text-xs w-32 hover:bg-red-800'>Post an Ad</button>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
