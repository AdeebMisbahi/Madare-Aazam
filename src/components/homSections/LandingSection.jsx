import React from 'react';
import { SVG_ARROW } from '../SVG/svg';
import { SVG_CIRCLE } from '../SVG/svg';
import { Link } from 'react-router-dom';

const LandingSection = () => {
  return (

    <div className='h-4/5 border'>
      {/* landing lequid */}
      <div className='relative grid grid-cols-1 lg:grid-cols-2'>
        <div className='order-2 lg:order-1'>
          <div className='m-8 lg:m-24 flex flex-auto flex-col items-start gap-8'>

          <h1 className='text-3xl md:text-4xl font-matter-r'><span className='font-matter-r leading-snug tracking-wide'>Dargah Shareef</span> <span className='font-matter-b leading-snug tracking-wide'>Hazrat Sayyed Badiuddin Zinda Shah Madar RA</span></h1>
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
            src="https://scontent.fdel14-2.fna.fbcdn.net/v/t39.30808-6/400445679_3693916104175407_3554535353440732362_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=F4kaI9xYZNMAX8LeaHc&_nc_ht=scontent.fdel14-2.fna&oh=00_AfC8wxHVvFP0NSO2u5FbwJvHYAfHdmB2IDV2S16zuY7IZg&oe=6559CCA8"
            alt="Ok"
          />
        </div>
      </div>
    </div>
  
  )
}

export default LandingSection;