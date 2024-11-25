import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const SculptText = () => {
  return (
    <>
    {/* <div>
      Arrow Icon
      <IoIosArrowDown className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl text-white bg-gray-100 bg-opacity-30  p-2 rounded-full cursor-pointer" />
    </div> */}
    <div className='flex items-center justify-center flex-col my-10'>
      <h2 className='uppercase tracking-wider mb-4 text-sm'>do what you want , not what is expected</h2>
      <h1 className='font-bold uppercase tracking-wider text-xl mb-6'>A unique art gallery</h1>
      <div className='w-20 border border-b border-black rounded-md'></div>
    </div>
    </>
    
  )
}

export default SculptText;
