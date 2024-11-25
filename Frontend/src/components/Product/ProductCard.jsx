// ProductCard.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect
  const navigate = useNavigate(); // Hook to navigate

  const handleCardClick = () => {
    // Navigate to the product details page, use product.id or product.name depending on your routing setup
    navigate(`/products/${product.id}`); // Ensure the route matches your setup
  };

  return (
    <motion.div
      className="bg-white p-4 relative shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick} // Handle card click for navigation
    >
      <div
        className="relative" // Set relative position for absolute elements inside
        // onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
        // onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
      >
        <div className="w-full h-full transition ease-in-out duration-300">
          <img
            // src={product.image || "/Paint.jpg]"}
            src="/Paint.jpg"
            alt={product.name}
            className="w-full h-60 object-cover hover:object-contain transition ease-in-out duration-300 mb-4 rounded"
          />
        </div>

        {/* Show the Quick View button on hover */}
        {/* {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded transition-opacity duration-300">
            <button className="mt-4 text-black-500 border border-white p-2 uppercase tracking-wider text-sm text-white transition">
              Quick View
            </button>
          </div>
        )} */}
      </div>

      <h3 className="text-md font-semibold uppercase tracking-wider">
        {product.name}
      </h3>
      <p className="text-sm  mb-2">₹{product.price}</p>

      {/* <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-2"
      >
        Add to Cart
      </button> */}
    </motion.div>
  );
};

export default ProductCard;
