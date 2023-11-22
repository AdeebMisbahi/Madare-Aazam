import React from 'react'
import { SVG_ARROW, SVG_CIRCLE } from '../../assets/SVG/svg'
import { Link } from 'react-router-dom'
const IntroSection = () => {
  return (
    <>
       <div className='bg-[#f6f7fb]'>
        <div className='mx-[8vw] my-[4vh] rounded-md '>
            <div className='relative grid grid-cols-2 gap-10'>
            <div className='pb-4'>
            <img className='rounded-lg' src="https://scontent.fbek1-1.fna.fbcdn.net/v/t1.6435-9/51156315_840789886271945_5781479331393961984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=FUF7JmyGw1MAX8M1h3i&_nc_ht=scontent.fbek1-1.fna&oh=00_AfCEIFsjZo6nGcShHlRoOqcS30pdQrMKKYGs6WeWd_WRJQ&oe=6580D833" alt="" />
            
           </div>
           <div className='flex flex-col justify-center gap-2  items-start'>
            <h1 className='leading-tight lg:leading-relaxed font-matter-b text-xl md:text-2xl'>
                Zinda Shah Madar: The Living Sufi Saint
            </h1>
            <p className='leading-relaxed lg:leading-loose font-matter-m text-justify text-base lg:text-lg text-[#1a2231]'>
            <span className='hidden sm:inline'>Sayed Badiuddin Zinda Shah Madar is </span>
            <span className=' hidden md:inline'>known as Qutub-ul-Madar, </span>
            <span className=' hidden lg:inline'>Qutb-ul-Aqtab, Qutb-ul-Madar, Fard-ul-Afrad, Qutb-e-Wahdat among the group of Auliya while the common people call him as Madare Alam, Madare-Do-Jahan, Madar-ul-Alameen, Zinda Madar, Zinda Wali, Zinda, Shah Madar</span>
           </p> 
           </div>
            </div>
            <div className=''>
                <p className='leading-relaxed lg:leading-loose font-matter-m text-justify text-base lg:text-lg text-[#1a2231]'>
            <span className='inline sm:hidden'>Sayed Badiuddin Zinda Shah Madar is </span>
            <span className=' inline md:hidden'>known as Qutub-ul-Madar, </span>
            <span className=' inline lg:hidden'>Qutb-ul-Aqtab, Qutb-ul-Madar, Fard-ul-Afrad, Qutb-e-Wahdat among the group of Auliya while the common people call him as Madare Alam, Madare-Do-Jahan, Madar-ul-Alameen, </span>
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