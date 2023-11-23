import React from 'react';
import { SVG_STAR } from '../../assets/SVG/svg';
import HeaderPic from '../../assets/images/Madare-Azam1.jpg';
import HeaderPic2 from '../../assets/images/MadareAzam4.jpg';
import { Link } from 'react-router-dom';

const MainHeading = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
      })"
      className="w-full inline-flex flex-nowrap overflow-hidden "
    >
      <ul className=" flex items-center justify-center md:justify-start [&_li]:mx-1.5  animate-infinite-scroll font-merienda-b tracking-tight text-xl md:text-2xl">
        <li className='flex justify-center items-center gap-4'>DARGAH </li>
        <li className='flex justify-center items-center gap-4'>SHARIF <SVG_STAR /></li>
        <li>HAZRAT</li>
        <li>SAYYED</li>
        <li>BADIUDDIN</li>
        <li>ZINDA</li>
        <li>SHAH</li>
        <li className='flex justify-center items-center gap-4'>MADAR<span>(R.A)</span> <SVG_STAR /></li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-1.5 animate-infinite-scroll font-merienda-b tracking-tight text-xl md:text-2xl"
        aria-hidden="true"
      >
        <li className='flex justify-center items-center gap-4'> DARGAH </li>
        <li className='flex justify-center items-center gap-4'>SHARIF <SVG_STAR /></li>
        <li>HAZRAT</li>
        <li>SAYYED</li>
        <li>BADIUDDIN</li>
        <li>ZINDA</li>
        <li>SHAH</li>
        <li className='flex justify-center items-center gap-4'>MADAR<span>(R.A)</span> <SVG_STAR /></li>
      </ul>
    </div>
  );
};

const LandingSection = () => {
  return (
    <div className=''>
     
      <div className='relative grid grid-cols-4 gap-x-2 md:grid-cols-12'>
        <div className='col-span-full lg:mb-0 md:col-span-7 md:col-start-6 lg:px-0 shadow-md h-[80vw] md:h-[50vw]'>
          <img
            className='h-full md:rounded-l-lg w-full object-cover object-center '
            src={HeaderPic}
            alt="Okll"
          />
        </div>
        <div className='col-span-full md:col-start-2 md:row-start-2  md:-ml-28 pb-6 md:bg-[#f7c1a7] md:py-4 rounded-full  overflow-hidden border-8 border-white'>
          <MainHeading />
        </div>
        <div className='col-span-full -mt-20 md:-mt-0 md:col-start-1 md:row-start-1 md:flex md:flex-col md:col-span-5  md:h-[50vw]'>
          <img className='h-full md:rounded-r-lg w-full md:object-cover md:object-center' src={HeaderPic2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
