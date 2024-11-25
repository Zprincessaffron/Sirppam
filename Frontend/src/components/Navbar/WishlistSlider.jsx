// WishlistSlider.js
import React from 'react';
import { FiX } from 'react-icons/fi';

const WishlistSlider = ({ isOpen, onClose, wishlistItems }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 transform ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } z-50`}
    >
      {/* Close button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-md font-semibold uppercase tracking-widest">Wishlist</h2>
        {/* <button onClick={onClose} className="text-xl">
          <FiX />
        </button> */}
      </div>

      {/* Wishlist Items */}
      <div className="p-4">
        <ul className="flex space-x-8 overflow-x-auto tracking-wider justify-center ">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <li key={item.id} className="flex items-center space-x-2">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover border" />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-700">₹{item.price}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your wishlist is empty</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WishlistSlider;
