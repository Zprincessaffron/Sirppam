import React, { useState } from 'react';
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import WishlistSlider from './WishlistSlider';
import UserProfile from '../UserProfile/UserProfile';

const Navbar = () => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
      {/* Navbar */}
      <nav className="flex items-center justify-between px-3 py-2 border-b border-gray-200 sm:px-4">
        {/* Sidebar for mobile menu */}
        <Sidebar />

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wider flex items-center justify-center flex-col">
          <img src="/logo2.png" className="h-6 sm:h-8 mb-1" alt="Logo" />
          <p className="border px-2 sm:px-3 border-black text-sm sm:text-base tracking-widest font-normal text-[#030148f4]">
            SIRPPAM
          </p>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {isWishlistOpen ? (
            <FiX onClick={toggleWishlist} className="text-base sm:text-lg cursor-pointer" />
          ) : (
            <CiHeart onClick={toggleWishlist} className="text-base sm:text-lg cursor-pointer" />
          )}

          <CiUser
            onClick={toggleProfile}
            className="text-base sm:text-lg cursor-pointer"
          />

          <Link to="/cart">
            <CiShoppingCart className="text-base sm:text-lg cursor-pointer" />
          </Link>
        </div>
      </nav>

      {/* Wishlist Slider */}
      <WishlistSlider
        isOpen={isWishlistOpen}
        onClose={toggleWishlist}
        wishlistItems={wishlistItems}
      />

      {/* User Profile Section */}
      {isProfileOpen && <UserProfile onClose={toggleProfile} />}
    </>
  );
};

export default Navbar;
