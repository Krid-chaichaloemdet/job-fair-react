import React, { useState } from 'react';
import Mew from '../assets/Mew.png';
import eva from '../assets/Eva.png';
import kci from '../assets/Kci.png';
import arrowdown from '../assets/arrow-circle-down.png'
import arrowup from '../assets/arrow-circle-down (1).png'
import close from '../assets/close-circle.png'


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

      <div className='flex flex-col justify-center items-center'>
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
        {isOpenJob1 && (
          <div className="fixed inset-0 bg-[#131E3c] bg-opacity-50 flex items-end z-50">
            <div className="bg-white rounded-[20px] w-full h-[80%] p shadow-lg relative">
              <img src={close}
                className="absolute top-2 right-2  w-[1.5rem] z-100"
                onClick={() => setIsOpenJob1(false)}
              >
              </img>
              <div className='bg-[#131E3c] rounded-[20px] h-[100px] w-full flex justify-center items-center '>
                <h1 className='text-center text-[#fff] text-[14px]'>Accounting & Purchasing</h1>
              </div>

              <div className='flex flex-col pl-5 w-full h-[65%] overflow-y-scroll'>
                <h3 className='font-bold text-[14px] py-2'>Job Description</h3>
                <ul className='list-disc text-[12px] pl-5'>
                  <li>Negotiate pricing, sales terms, and delivery schedules with suppliers.</li>
                  <li>Identify and source new suppliers.</li>
                  <li>Track supplier performance to ensure quality standards, costs, and
                    delivery timelines are maintained.</li>
                  <li>Monitor inventory levels and manage purchase orders.</li>
                  <li>Document the purchasing department's activities.</li>
                  <li>Analyze market trends to support forecasting and decision-making.</li>
                </ul>
                <h3 className='font-bold text-[14px] py-2'>Requirements</h3>
                <ul className='list-disc text-[12px] pl-5'>
                  <li>Educational Degree: Bachelor’s degree in Business Administration,</li>
                  <li>Supply Chain Management, or a related field.</li>
                  <li>Sex: Any</li>
                  <li>Age: 30-38 years old</li>
                  <li>5 years of experience in procurement as a supervisor.</li>
                  <li>Knowledge of procurement best practices, industry trends, and supply</li>
                  <li>chain management principles.</li>
                  <li>Excellent negotiation skills.</li>
                  <li>Proficient in using procurement software and tools.</li>
                </ul>
              </div>
              <div className='py-5 flex justify-center items-center'>
                <button className='bg-[#131E3c] rounded-[20px] h-[40px] w-52 text-white text-[14px]'>Apply for Job</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='flex flex-col justify-center items-center'>
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

      <div className='flex flex-col justify-center items-center'>
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
      <div className='flex flex-col justify-center items-center'>
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
      <div className='flex flex-col justify-center items-center'>
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
      <div className='flex flex-col justify-center items-center'>
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