import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";

const ProductCarousel = ({ setShowCarousel, setZoomOut }) => {
  const products = [
    { id: 1, name: "A Beautiful Lady", price: "25,000", image: "/Paint.jpg" },
    { id: 2, name: "Dancing Lady", price: "25,000", image: "/paint1.jpeg" },
    { id: 3, name: "Illusional Self portrait", price: "75,000", image: "/paint2.jpeg" },
    { id: 4, name: "Classic Dancer", price: "75,000", image: "/paint3.jpeg" },
    // { id: 5, name: "Fishes", price: "7500", image: "/paint4.jpeg" },
    // { id: 6, name: "A Deer", price: "7500", image: "/paint5.jpeg" },
    // { id: 7, name: "Koi Fishes", price: "7500", image: "/paint6.jpeg" },
    // { id: 8, name: "A Peacock", price: "7500", image: "/paint7.jpeg" },
    // { id: 9, name: "A Beautiful Butterflies", price: "7500", image: "/paint8.jpeg" },
    { id: 10, name: "Man in Lake", price: "25,000", image: "/paint9.jpeg" },
    { id: 11, name: "The Ship", price: "12,500", image: "/paint10.jpeg" },
    { id: 12, name: "Dancing Posture", price: "25,000", image: "/paint11.jpeg" },
    // { id: 13, name: "Gautama Buddha", price: "7500", image: "/paint12.jpeg" },
    // { id: 14, name: "Peace Maker", price: "7500", image: "/paint13.jpeg" },
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCenterIndex(newIndex); // Update center index
    },
    dotsClass: "slick-dots custom-dots",
    className: "center"
  };

  const handleZoomIn = () => {
    const product = products[centerIndex];
    setActiveProduct(product);
    setShowZoom(true); // Show full-screen product details
  };

  const handleZoomOut = () => {
    setShowZoom(false);
  };

  const handleClose = () => {
    setShowCarousel(false);
    setZoomOut(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A] relative">
      <button
        onClick={handleClose}
        className="text-white cursor-pointer absolute top-4 left-4 border border-white p-2 tracking-widest uppercase transition text-xs"
      >
        Close
      </button>
      <button
        onClick={handleZoomIn}
        className="absolute top-4 right-4 border border-white p-2 text-white tracking-widest uppercase transition"
      >
        <MdOutlineZoomOutMap size={15} />
      </button>
      <div className="slider-container p-4 max-w-[56rem] h-96">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col items-center mx-2 p-4 transition-transform transform ${
                index === centerIndex ? "scale-110 elevate" : ""
              }`}
            >
              <img src={product.image} alt={product.name} className="h-56 w-full object-fit mb-2" />
              <h3 className="text-xs font-medium uppercase tracking-widest text-white mb-1">{product.name}</h3>
              <p className="text-xs tracking-wider text-white">₹{product.price}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Full-Screen Product Details View */}
      {showZoom && activeProduct && (
        <div 
          className={`fixed inset-0 bg-[#1A1A1A] text-white flex items-center justify-center z-50 overflow-y-auto ${
            showZoom ? "zoom-in" : "zoom-out"
          }`}
        >
          <div className="w-full max-w-4xl p-6 flex space-x-6">
            {/* Left Section: Product Image */}
            <div className="w-1/2">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Right Section: Product Details */}
            <div className="w-1/2 flex flex-col space-y-4">
              <button
                onClick={handleZoomOut}
                className="absolute top-4 right-4 border border-white p-2 text-white tracking-widest uppercase transition"
              >
                <MdOutlineZoomInMap />
              </button>
              <h2 className="text-2xl font-semibold">{activeProduct.name}</h2>
              <p className="text-lg text-green-500">₹{activeProduct.price}</p>
              <p className="text-sm text-gray-300 mt-4">
                This is a detailed description of the product, {activeProduct.name}. It includes high-quality materials
                and showcases exceptional craftsmanship.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
