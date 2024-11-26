import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className="h-screen sm:h-screen h-64 w-full relative">
      {/* Background Image */}
      <img
        src="/hero1.png"
        className="h-full w-full object-cover"
        alt="Hero Background"
      />

      {/* Arrow Icon */}
      <IoIosArrowDown
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl text-white bg-gray-100 bg-opacity-30 p-1 sm:p-2 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Hero;
