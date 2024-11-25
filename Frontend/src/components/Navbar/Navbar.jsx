import React, { useState } from 'react';
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import WishlistSlider from './WishlistSlider';
import UserProfile from '../UserProfile/UserProfile';

const Navbar = () => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // New state for user profile

  const wishlistItems = [
    { id: 1, name: 'Elegant Sculpture', image: '/Sculpt.png', price: 120 },
    { id: 2, name: 'Abstract Painting', image: '/Paint.jpg', price: 150 },
  ];

  const toggleWishlist = () => {
    setIsWishlistOpen((prev) => !prev);
  };

  const toggleProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <Sidebar />
        <div className="text-2xl font-semibold tracking-wider flex items-center justify-center flex-col">
          <img src="/logo2.png" className="h-8 mb-1" alt="Logo" />
          <p className="border px-3  border-black text-[1rem] tracking-widest font-normal text-[#030148f4]">SIRPPAM</p>
        </div>
        <div className="flex items-center space-x-4">
          {isWishlistOpen ? (
            <FiX onClick={toggleWishlist} className="text-lg cursor-pointer" />
          ) : (
            <CiHeart onClick={toggleWishlist} className="text-lg cursor-pointer" />
          )}

          <CiUser onClick={toggleProfile} className="text-lg cursor-pointer" /> {/* Toggle profile on click */}
          
          <div>
            <Link to="/cart">
              <CiShoppingCart className="text-xl cursor-pointer" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Wishlist Slider */}
      <WishlistSlider
        isOpen={isWishlistOpen}
        onClose={toggleWishlist}
        wishlistItems={wishlistItems}
      />

      {/* User Profile Section */}
      {isProfileOpen && <UserProfile onClose={toggleProfile} />} {/* Render profile section */}
    </>
  );
};

export default Navbar;
