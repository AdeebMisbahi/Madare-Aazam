import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOBILE_LINKS } from './menuItems';
import { TbChevronDown } from "react-icons/tb";

const MobileNavBar = (props) => {
  const { isOpen, onToggle } = props;

  return (
    <>
      <ul className=" flex border-y flex-col w-full text-black" >
        {MOBILE_LINKS.map((link, index) => (
          <Link className='border-b w-full px-10 py-4 hover:bg-gray-100 group' to={link.to} key={index}>
            <li  className=''>{link.name}</li> 
            <TbChevronDown className='float-right -my-5'/>
       {link.subMenu && (
               <ul className='mt-4 -mb-4 w-full border-t -mx-10 hidden group-hover:block hover:block'>  
                    {link.sub_LINKS.map((sLink, sIndex) => (
                      <li className=' w-full border-b' to={sLink.to} key={sIndex}>
                        <Link className='text-left px-16 py-3 hover:bg-red-100 w-screen block'>{sLink.name}</Link>
                      </li>
                    ))}
                  </ul>
             
              )}   
          </Link>
        ))}

        <li className='py-3 px-3'>
          <button className='bg-primary px-3 py-1/2 rounded-full text-black'>
            Get Started
          </button>
        </li>
      </ul>

    </>
  );
}

export default MobileNavBar;
