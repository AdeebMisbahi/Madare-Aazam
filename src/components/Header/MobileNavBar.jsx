import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOBILE_LINKS } from './menuItems';

const MobileNavBar = (props) => {
  const { isOpen, onToggle } = props;

  return (
    <>
      <ul className="flex flex-col w-full text-white" onClick={onToggle}>

        {MOBILE_LINKS.map((link, index) => (
          <li className='border-b w-full' key={index}>
            <Link to="/" className='py-4 px-7 text-left w-full block'>{link.name}</Link>
            
          </li>
        ))}

        <li className='py-3 px-3'>
          <button className='bg-primary px-3 py-1/2 rounded-full text-white'>
            Get Started
          </button>
        </li>
      </ul>

    </>
  );
}

export default MobileNavBar;
