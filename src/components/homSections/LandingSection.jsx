import React from 'react';
import { SVG_ARROW } from '../../assets/SVG/svg';
import { SVG_CIRCLE } from '../../assets/SVG/svg';
import HeaderPic from '../../assets/images/Madare-Azam1.jpg'
import HeaderPic2 from '../../assets/images/MadareAzam4.jpg'
import { Link } from 'react-router-dom';

const LandingSection = () => {
  const styles = {
    background: `url(${HeaderPic2}) center/cover`,
   
  }
  return (

    <div className=''>
      <div className='relative grid grid-cols-4 gap-x-2 md:grid-cols-12'>
      <div className='col-span-full lg:mb-0 md:col-span-7 md:col-start-6 lg:px-0 shadow-md h-[70vw] md:h-[50vw]'>
          <img 
            className='h-full rounded-lg w-full object-cover object-center '
            src={HeaderPic}
            alt="Okll"
          />
        </div>
        <div className='col-span-full pt-6 md:col-start-1 md:row-start-1 md:flex md:h-full md:flex-col md:col-span-5 h-screen' style={styles}>
          <div className='flex flex-auto flex-col items-start '>

          {/* <h1 className='text-3xl md:text-4xl font-matter-r'><span className='font-matter-r leading-relaxed tracking-wide'>Dargah Shareef</span> <span className='font-matter-b leading-relaxed tracking-wide'>Hazrat Sayyed Badiuddin Zinda Shah Madar <span className='text-xl'>(R.A)</span></span></h1> */}
          <Link className='inline-flex justify-center items-center'>
              <div className='relative inline-flex flex-none justify-center items-center'>
             <div className='absolute text-gray-200 '>{SVG_CIRCLE}</div> 
           <div>{SVG_ARROW}</div>
            
           </div>
           <span className='tracking-tight text-xl font-matter-m '>Learn More About Zinda Shah Madar</span>
          </Link>
          </div>
          </div>
      
      </div>
    </div>
  
  )
}

export default LandingSection;