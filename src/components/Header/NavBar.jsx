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
        <div className='absolute left-0 top-20  w-full' >
          <MobileNavBar onToggle={handleToggle} isOpen={isOpen} />
        </div>
      ) : (
        <DesktopNavBar />
      )}
    </>
  );
};

export default NavBar;
