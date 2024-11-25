import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* About Section */}
          <div className='max-w-[250px] tracking-wider'>
            <h2 className="text-md font-semibold mb-4">About Us</h2>
            <p className="text-[0.7rem] mb-2">
              At Artistry, we curate a unique collection of handcrafted sculptures and paintings, designed to enhance your living space with elegance and creativity.
            </p>
            <Link to="/about" className="text-black hover:text-gray-600 text-xs underline underline-offset-2">
              Learn More
            </Link>
          </div>

          {/* Customer Service Section */}
          <div>
            <h2 className="text-md font-semibold mb-4 tracking-wider">Customer Service</h2>
            <ul className="space-y-2 text-xs tracking-wider">
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
          <div>
            <h2 className="text-md font-semibold mb-4 tracking-wider">Our Collection</h2>
            <ul className="space-y-2 text-xs tracking-wider">
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
          <div className='tracking-wider'>
            <h2 className="text-md font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xs mb-4">
              Get the latest updates on new arrivals and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow border border-black px-4 py-2 text-xs"
                required
              />
              <button className="border-t border-r border-b border-black text-black px-4 py-2 hover:bg-gray-800 transition duration-300 text-xs uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-4 mt-10 bg-red-500">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-xs">&copy; {new Date().getFullYear()} Sirppam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
