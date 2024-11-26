import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 border-t lg:border-gray-200 border-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* About Section */}
          <div className="tracking-wider text-center md:text-left">
            <h2 className="text-md font-semibold mb-2">About Us</h2>
            <p className="text-[0.7rem] mb-3">
              At Artistry, we curate a unique collection of handcrafted sculptures and paintings, designed to enhance your living space with elegance and creativity.
            </p>
            <Link
              to="/about"
              className="text-black hover:text-gray-600 text-xs underline underline-offset-2"
            >
              Learn More
            </Link>
          </div>

          {/* Customer Service Section */}
          <div className="tracking-wider text-center md:text-left">
            <h2 className="text-md font-semibold mb-2">Customer Service</h2>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/contact" className="text-black hover:text-gray-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-black hover:text-gray-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-black hover:text-gray-600">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-black hover:text-gray-600">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-black hover:text-gray-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Collection Section */}
          <div className="tracking-wider text-center md:text-left">
            <h2 className="text-md font-semibold mb-2">Our Collection</h2>
            <ul className="space-y-1 text-xs">
              <li>
                <Link to="/sculptures" className="text-black hover:text-gray-600">
                  Sculptures
                </Link>
              </li>
              <li>
                <Link to="/paintings" className="text-black hover:text-gray-600">
                  Paintings
                </Link>
              </li>
              <li>
                <Link to="/custom-sculptures" className="text-black hover:text-gray-600">
                  Custom Sculptures
                </Link>
              </li>
              <li>
                <Link to="/custom-paintings" className="text-black hover:text-gray-600">
                  Custom Paintings
                </Link>
              </li>
              <li>
                <Link to="/abstract-art" className="text-black hover:text-gray-600">
                  Abstract Art
                </Link>
              </li>
              <li>
                <Link to="/modern-art" className="text-black hover:text-gray-600">
                  Modern Art
                </Link>
              </li>
              <li>
                <Link to="/traditional-art" className="text-black hover:text-gray-600">
                  Traditional Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div className="tracking-wider text-center md:text-left">
            <h2 className="text-md font-semibold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-xs mb-4">
              Get the latest updates on new arrivals and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow border border-black px-4 py-2 text-xs mb-2 sm:mb-0"
                required
              />
              <button className="border border-black px-4 py-2 text-xs uppercase hover:bg-black hover:text-white transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <i className="fab fa-linkedin-in text-lg"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Sirppam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
