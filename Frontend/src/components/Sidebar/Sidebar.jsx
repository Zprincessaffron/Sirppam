import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'Sculptures', path: '/sculpture' },
    { name: 'Paintings', path: '/paintings' },
    { name: 'Customized Work', path: '/custom' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <>
      {/* Menu Icon */}
      <div className="flex items-center">
        <CiMenuBurger className="text-lg cursor-pointer" onClick={toggleSidebar} />
      </div>
      {/* <button class="group h-[1.5rem] w-[2rem] " onClick={toggleSidebar}>
        <div class="grid justify-items-center gap-1.5 bg-white">
          <span class="h-1 w-6 rounded-full bg-black transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
          <span class="h-1 w-6 rounded-full bg-black group-hover:scale-x-0 transition"></span>
          <span class="h-1 w-6 rounded-full bg-black group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
        </div>
      </button> */}


      {/* Full-screen Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-white bg-opacity-90 text-black flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Fade out when closing
            transition={{ duration: 0.5 }}
          >
            {/* Close button */}
            <button className="absolute top-8 left-4 text-xl bg-white" onClick={toggleSidebar}>
              <FiX className='bg-white'/>
            </button>

            {/* Sidebar Menu Options */}
            <nav className="space-y-6 text-xs font-semibold flex flex-col items-center uppercase tracking-widest">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: '-100%', opacity: 0 }} // Start off-screen to the left
                  animate={{ x: 0, opacity: 1 }} // Animate in
                  exit={{ x: '-100%', opacity: 0 }} // Animate out
                  transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
                >
                  <Link to={item.path} onClick={toggleSidebar} className='tracking-widest'>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
