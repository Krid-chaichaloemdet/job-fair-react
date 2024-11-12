import React, { useState } from 'react';
import Mew from '../assets/Mew.png';
import eva from '../assets/Eva.png';
import kci from '../assets/Kci.png';
import arrowdown from '../assets/arrow-circle-down.png'
import arrowup from '../assets/arrow-circle-down (1).png'


const HomePage = () => {
  const [isOpenJob1, setIsOpenJob1] = useState(false);
  const [isOpenJob2, setIsOpenJob2] = useState(false);
  const [isOpenJob3, setIsOpenJob3] = useState(false);
  const [isOpenJob4, setIsOpenJob4] = useState(false);
  const [isOpenJob5, setIsOpenJob5] = useState(false);
  const [isOpenJob6, setIsOpenJob6] = useState(false);

  return (
    <div>
    <div className='flex flex-row justify-start pl-5 py-5 '>
      <h1 className='font-bold text-[20px] text-[#131E3c]'>JOBS</h1>
    </div>
    <div className='flex flex-col justify-center items-center' id='job1'>
      <div className='h-[1px] w-[90%] bg-[#131E3c]'></div>
      <div className='flex flex-row justify-between items-center w-[80%]'>
      <p className='py-2 text-[12px]'>Accounting & Purchasing</p>
      <img
            className='w-4 h-4 cursor-pointer'
            src={isOpenJob1 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob1(!isOpenJob1)}
          />
      </div>
      <div className='h-[0.5px] w-[90%] bg-[#131E3c]'></div> 
    </div>
      <div className='flex flex-col justify-center items-center' id='job2'>
        <div className='flex flex-row justify-between items-center w-[80%]'>
          <p className='py-2 text-[12px]'>Application Developer</p>
          <img
            className='w-4 h-4 cursor-pointer'
            src={isOpenJob2 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob2(!isOpenJob2)}
          />
        </div>
        <div className='h-[0.5px] w-[90%] bg-[#131E3c]'></div>
      </div>
      <div className='flex flex-col justify-center items-center' id='job3'>
        <div className='flex flex-row justify-between items-center w-[80%]'>
          <p className='py-2 text-[12px]'>Administrator</p>
          <img
            className='w-4 h-4 cursor-pointer'
            src={isOpenJob3 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob3(!isOpenJob3)}
          />
        </div>
        <div className='h-[0.5px] w-[90%] bg-[#131E3c]'></div>
      </div>
      <div className='flex flex-col justify-center items-center' id='job4'>
        <div className='flex flex-row justify-between items-center w-[80%]'>
          <p className='py-2 text-[12px]'>Graphics Designer</p>
          <img
            className='w-4 h-4 cursor-pointer'
            src={isOpenJob4 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob4(!isOpenJob4)}
          />
        </div>
        <div className='h-[0.5px] w-[90%] bg-[#131E3c]'></div>
      </div>
      <div className='flex flex-col justify-center items-center' id='job5'>
        <div className='flex flex-row justify-between items-center w-[80%]'>
          <p className='py-2 text-[12px]'>Human Resources</p>
          <img
            className='w-4 h-4 cursor-pointer'
            src={isOpenJob5 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob5(!isOpenJob5)}
          />
        </div>
        <div className='h-[0.5px] w-[90%] bg-[#131E3c]'></div>
      </div>
      <div className='flex flex-col justify-center items-center' id='job7'>
        <div className='flex flex-row justify-between items-center w-[80%]'>
          <p className='py-2 text-[12px]'>IT Support</p>
          <img
            className='w-4 h-4 cursor-pointer'
            src={isOpenJob6 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob6(!isOpenJob6)}
          />
        </div>
        <div className='h-[0.5px] w-[90%] bg-[#131E3c]'></div>
      </div>
    </div>
  );
}
export default HomePage;