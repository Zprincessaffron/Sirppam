import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/custom")
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white">
        <div className={`text-center`}>
          <h1 className="text-3xl uppercase tracking-widest font-medium mb-4">Customized Artworks</h1>
          <p className="text-gray-700 mb-6 tracking-wider text-xs max-w-xl">
            Create a unique painting or sculpture tailored to your style. Our artists bring your vision to life with meticulous craftsmanship.
          </p>
          <button
            onClick={handleExploreClick}
            className="border uppercase border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition duration-300 text-xs"
          >
            Explore Custom Orders
          </button>
        </div>
      
    </div>
  );
};

export default CustomSection;
