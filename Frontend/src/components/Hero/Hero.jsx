import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <img src="/hero1.png" className="bg-cover h-full w-full" alt="" />

      {/* Arrow Icon */}
      <IoIosArrowDown className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl text-white bg-gray-100 bg-opacity-30  p-2 rounded-full cursor-pointer" />
    </div>
  );
}

export default Hero;
