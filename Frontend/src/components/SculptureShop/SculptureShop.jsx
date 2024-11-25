import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCarousel from '../Product/ProductSection';

const SculptureShop = () => {
  const [zoomOut, setZoomOut] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false); // State to control ProductCarousel visibility

  const handleShopNowClick = () => {
    setZoomOut(true);
    // Delay showing ProductCarousel until zoom-out animation completes
    setTimeout(() => {
      setShowCarousel(true);
    }, 500); // Adjust this time to match the CSS animation duration
  };

  return (
    <div>
      {/* Conditionally render either the Shop Section or the ProductCarousel */}
      {!showCarousel ? (
        <div className={`shop-section flex items-center justify-around p-8 ${zoomOut ? 'zoom-out' : ''}`}>
          {/* Image Section */}
          <div>
            {/* <img src="/Sculpt.png" alt="Sculpture" className="w-full h-72 max-w-xs" /> */}
            <img src="/Buddha.jpeg" alt="Sculpture" className="w-full h-72 max-w-xs" />
          </div>

          {/* Text and Button Section */}
          <div className="max-w-xl text-center">
            <h1 className="text-xl uppercase tracking-widest font-medium mb-4">Discover Artistic Sculptures</h1>
            <p className="text-gray-700 mb-6 tracking-wider text-xs">
              Explore our exclusive collection of handcrafted sculptures, each piece meticulously designed to bring elegance and creativity into your space.
            </p>
            <button
              className="border uppercase border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition duration-300 text-xs"
              onClick={handleShopNowClick}
            >
              Shop Now
            </button>
          </div>
        </div>
      ) : (
        <ProductCarousel setShowCarousel={setShowCarousel} setZoomOut={setZoomOut} />
      )}
    </div>
  );
};

export default SculptureShop;
