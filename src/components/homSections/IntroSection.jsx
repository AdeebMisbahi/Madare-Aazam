import React from 'react'
import { SVG_ARROW, SVG_CIRCLE } from '../../assets/SVG/svg'
import IntroSectionPic from '../../assets/images/MadareAzam5.png'
import { Link } from 'react-router-dom'
const IntroSection = () => {
  return (
    <>
       <div className='m-[4vw]'>
        <div className='bg-gray-50 rounded-lg p-[5vw]'>
            <div className='relative grid grid-cols-4 md:grid-cols-12 '>
            <div className='col-span-2 md:col-span-5 flex flex-col justify-center gap-2  items-start'>
            <h1 className='leading-tight lg:leading-relaxed font-matter-b text-xl md:text-2xl'>
                Zinda Shah Madar: The Living Sufi Saint
            </h1>
            <p className='leading-relaxed lg:leading-loose font-matter-m text-base lg:text-lg text-[#1a2231]'>
            <span className='hidden sm:inline'>Syed Badiuddin Zinda Shah Madar is </span>
            <span className=' hidden md:inline'>known as Qutub-ul-Madar, Qutb-ul-Aqtab, Qutb-ul-Madar, Fard-ul-Afrad, Qutb-e-Wahdat among the group of Auliya  while the common people call him as Madare Alam,</span>
            <span className=' hidden lg:inline'> while the common people call him as Madare Alam, Madare-Do-Jahan, Madar-ul-Alameen, Zinda Wali, Zinda Madar, Zinda Shah Madar</span>
           </p> 
           </div>

           <div className='pb-4 col-span-2 md:col-span-7'>
            <img className='rounded-lg' src={IntroSectionPic} alt="" />
            
           </div>
            </div>
            <div className=''>
                <p className='leading-relaxed lg:leading-loose font-matter-m text-base lg:text-lg text-[#1a2231]'>
            <span className='inline sm:hidden'>Sayed Badiuddin Zinda Shah Madar is </span>
            <span className=' inline md:hidden'>known as Qutub-ul-Madar, Qutb-ul-Aqtab, Qutb-ul-Madar, Fard-ul-Afrad, Qutb-e-Wahdat among the group of Auliya while the common people call him as Madare Alam,</span>
            <span className=' inline lg:hidden'> Madare-Do-Jahan, Madar-ul-Alameen, </span>
            <span>
            Sayed Badiuddin Zinda Shah Madar, born on the auspicious day of 1st Shawwal 242 AD (5th February 856 CE) in Chinar, Aleppo, Syria, emerged from a lineage deeply connected to the Noble Prophet (SAWS). His father, Sayyid Qudwatuddin Ali al-Halabi, and mother, Sayyida Fatima Sania (Bibi Hajira), bestowed upon him a heritage that intertwined the noble lines of Imam Hasan and Imam Hussain, making him a distinguished Hasani-Hussaini Sayyid.
            
            In tracing his family roots, Sayed Badiuddin proudly declared his ancestry: "I hail from Aleppo. My name is Badiuddin. I am Hasani from my mother's side and Hussaini from my father's side, and thus my grandfather is Mustafa, the king of both the worlds and the most praised." This illustrious lineage serves as a testament to his esteemed heritage, further enriching the spiritual legacy of Zinda Shah Madar.
            
            </span>
            </p>
            </div>
            
            <Link className='inline-flex justify-center items-center'>
              <div className='relative inline-flex h-14 w-14 flex-none justify-center items-center'>
             <div className='absolute text-gray-200 '>{SVG_CIRCLE}</div> 
           <div className='-rotate-90'>{SVG_ARROW}</div>
            
           </div>
           <span className='tracking-tight ml-4 text-xl font-matter-m '>Learn More About Zinda Shah Madar</span>
          </Link>
            
            

        </div>
       </div>
    </>
  )
}

export default IntroSection