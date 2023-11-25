import React from 'react'
import { SVG_ARROW, SVG_CIRCLE } from '../../assets/SVG/svg'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='m-[4vw]'>
      <div className='bg-gray-50 rounded-lg p-[5vw]'>
          <div className='relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl'>
            <div className='col-span-full flex flex-col justify-center lg:col-span-5 lg:mt-0'>
                <p className='text-lg md:text-xl text-orange-800'>Khadim Sajjada Nashin</p>
                <h2 className='text-xl md:text-2xl font-matter-m  leading-tight lg:leading-relaxed   text-black mt-5 md:mt-12'>Allama Peer Khowaja Syed Misbahul Murad Makanpuri</h2>
                <p className='font-matter-m leading-relaxed lg:leading-loose text-lg md:text-xl text-gray-400 mt-3.5 md:mt-8'>
                Revered as 'Jaane Wali' and 'Misbahe Wali' — A Distinguished Scholar and Illuminating Poetic Visionary
                </p>
              <Link className='inline-flex justify-start items-center mt-4'>
              <span className='tracking-tight mr-4 text-xl font-matter-m '>Learn More About Misbahul Murad</span>
              <div className='relative inline-flex h-14 w-14 flex-none justify-center items-center'>
              <div className='absolute text-gray-200 '>{SVG_CIRCLE}</div> 
              <div className='-rotate-90'>{SVG_ARROW}</div>
              </div>
               </Link>

            </div>
            <div className='relative col-span-full lg:col-span-6 lg:col-start-7 mt-4 lg:block rounded-lg overflow-hidden'>
               <div className='h-[80vw] md:h-[45vw] lg:h-[40vw]'>
                <img className='h-full w-full object-cover object-center' src="https://scontent.fdel65-1.fna.fbcdn.net/v/t1.6435-9/75210331_2371537539827095_4730113556861681664_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=300f58&_nc_ohc=IXUZnkxV8FMAX-riSxs&_nc_ht=scontent.fdel65-1.fna&oh=00_AfCaRgPiQla81cjJ0JgGlcps3UkKhNDAQ2ezZprIoxEYqg&oe=6588EE03" alt="" />
               </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default HeroSection