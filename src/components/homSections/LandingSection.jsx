import React from 'react';
import { SVG_ARROW } from '../../assets/SVG/svg';
import { SVG_CIRCLE } from '../../assets/SVG/svg';
import HeaderPic from '../../assets/images/Madare-Azam1.jpg'
import { Link } from 'react-router-dom';

const LandingSection = () => {
  return (

    <div className='h-4/5'>
      <div className='relative grid grid-cols-1 lg:grid-cols-2'>
        <div className='order-2 lg:order-1 mt-4 mx-[8vw] lg:mt-16'>
          <div className='flex flex-auto flex-col items-start gap-6'>

          <h1 className='text-3xl md:text-4xl font-matter-r'><span className='font-matter-r leading-relaxed tracking-wide'>Dargah Shareef</span> <span className='font-matter-b leading-relaxed tracking-wide'>Hazrat Sayyed Badiuddin Zinda Shah Madar <span className='text-xl'>(R.A)</span></span></h1>
          <Link className='inline-flex justify-center items-center'>
              <div className='relative inline-flex h-14 w-14 flex-none justify-center items-center'>
             <div className='absolute text-gray-200 '>{SVG_CIRCLE}</div> 
           <div>{SVG_ARROW}</div>
            
           </div>
           <span className='tracking-tight ml-4 text-xl font-matter-m '>Learn More About Zinda Shah Madar</span>
          </Link>
          </div>
        
          
          
         
          </div>
        <div className='shadow-inner rounded-lg order-1 lg:order-2'>
          <img
            className='rounded-lg w-full object-cover object-center max-h-[80vh]'
            src={HeaderPic}
            alt="Okll"
          />
        </div>
      </div>
    </div>
  
  )
}

export default LandingSection;