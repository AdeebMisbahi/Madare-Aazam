import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className='lg:hidden px-7'>
        <motion.button
          className='shadow-none text-3xl'
          onClick={handleToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {!isOpen ? <FiMenu /> : <FiX />}
        </motion.button>
      </div>
      {isOpen ? (
        <motion.div className='z-50 bg-white absolute left-0 top-20   w-full' 
        initial ={{y:-20 ,x:0}}
        animate ={{y:0, x:0}}
        transition={{ duration: 0.15 }}
        >
          <MobileNavBar onToggle={handleToggle} isOpen={isOpen} />
        </motion.div>
      ) : (
        <DesktopNavBar />
      )}
    </>
  );
};

export default NavBar;
