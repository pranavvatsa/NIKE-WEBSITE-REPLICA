import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-scroll';


const Hero = () => {

  return (
    <div className='text-white' id='hero'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          KEEP RUNNING BEYOND LIMITS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with Nike.
        </h1>
        <h1 className='bg-[#363737] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] hover:opacity-80 cursor-pointer'> <Link to='contact' smooth={true} offset={50} duration={500} >GET STARTED</Link></h1>
      </div>
    </div>
  );
};

export default Hero