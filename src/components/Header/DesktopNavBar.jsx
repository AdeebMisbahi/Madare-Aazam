import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from './menuItems';

const DesktopNavBar = () => {
  return (
    <>
      <ul className="lg:flex hidden items-center gap-5 font-[Poppins]">
        {LINKS.map((link, index) => (
            <div key={index}>
          <li className='group' key={index}>
              <Link to={link.to} className='px-3 py-7'>
                {link.name}
              </Link>
              {link.subMenu && (
                <div className='z-60 absolute top-14  hidden group-hover:block hover:block'>
                  <div className='py-3'>
                    <div className='w-4 h-4 absolute mt-1 left-4 rotate-45 bg-[#4c805a]'> 
                    </div>
                  </div>
                  <ul className="list-none border rounded-md text-start p-3.5 bg-white">
                    {link.sub_LINKS.map((sLink, sIndex) => (
                      <li className='my-2.5' key={sIndex}>
                        <Link to={sLink.to} className='text-gray-800'>{sLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
