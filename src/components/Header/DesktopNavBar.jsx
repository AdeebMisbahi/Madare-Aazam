import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from './menuItems';
import { motion } from 'framer-motion';

const DesktopNavBar = () => {
  // Define variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <ul className="lg:flex hidden items-center gap-4 text-[#181a1c]">
        {LINKS.map((link, index) => (
            <div key={index}>
          <li className='relative group' key={index}>
              <Link to={link.to} className='py-4 px-5'>
                {link.name}
              </Link>
              {link.subMenu && (
                <motion.div className='z-50 absolute hidden left-3 top-8 group-hover:block hover:block '
               
                >
                  
                  <div className="w-0 h-0 ml-2 border-[8px] border-l-transparent border-b-[13px] border-b-[#b40a0a] border-r-[8px] border-r-transparent rounded-full">
                  </div>
                  
                  <ul className='z-70 lg:flex hidden flex-col justify-center rounded-lg shadow w-34 bg-white text-sm text-gray-700'>
                    
                    {link.sub_LINKS.map((sLink, sIndex) => (
                      <motion.li className='px-4 py-2 hover:bg-gray-100' key={sIndex}>
                        <Link to={sLink.to} className='text-gray-800 py-2 px-2 '>{sLink.name}</Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
          </li>
            </div>
        ))}
        <li>
          <button className='bg-white rounded-full px-3 py-2 mr-5'>Get Started</button>
        </li>
      </ul>
    </>
  );
};

export default DesktopNavBar;
