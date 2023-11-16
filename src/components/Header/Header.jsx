import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const Header = () => {
  return (
    <header className=" bg-white text-black">
      <nav className="flex items-center font-medium justify-between h-20 mx-8">
        <Link to="/" className="">
         <h1 className='text-2xl font-medium px-7'>Azam</h1> 
        </Link>
        {/* NavBar Component */}
        <NavBar />
      </nav>
     
    </header>
  );
}

export default Header;
