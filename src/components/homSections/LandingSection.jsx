import React from 'react';
import { SVG_ARROW } from '../../assets/SVG/svg';
import { SVG_CIRCLE } from '../../assets/SVG/svg';
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
      className="w-full inline-flex flex-nowrap overflow-hidden md:-ml-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll">
        <li>Hazrat</li>
        <li>Zinda</li>
        <li>Shah</li>
        <li>Madar</li>
        <li>Syed</li>
        <li>Badiuddin</li>
        <li>Okk</li>
        <li>okk</li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>Hazrat</li>
        <li>Zinda</li>
        <li>Shah</li>
        <li>Madar</li>
        <li>Syed</li>
        <li>Badiuddin</li>
        <li>Okk</li>
        <li>okk</li>
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
            className='h-full rounded-lg w-full object-cover object-center '
            src={HeaderPic}
            alt="Okll"
          />
        </div>
        <div className='col-span-full md:col-start-2 md:row-start-2  bg-transparent md:-mx-28 py-4'>
          <MainHeading />
        </div>
        <div className='col-span-full -mt-20 md:-mt-0 md:col-start-1 md:row-start-1 md:flex md:flex-col md:col-span-5  md:h-[50vw]'>
          <img className='h-full w-full md:object-cover md:object-center' src={HeaderPic2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
