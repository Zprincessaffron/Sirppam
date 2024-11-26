import React from 'react';

const PaintText = () => {
  return (
    <div className="flex items-center justify-center flex-col my-6 sm:my-10 px-4">
      {/* Subtitle */}
      <h2 className="uppercase tracking-wider mb-2 sm:mb-4 text-xs sm:text-sm text-center">
        Do what you want, not what is expected
      </h2>
      
      {/* Title */}
      <h1 className="font-bold uppercase tracking-wider text-lg sm:text-xl mb-4 sm:mb-6 text-center">
        A unique art gallery
      </h1>
      
      {/* Divider */}
      <div className="w-16 sm:w-20 border-b border-black rounded-md"></div>
    </div>
  );
};

export default PaintText;
