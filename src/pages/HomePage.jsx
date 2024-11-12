import React, { useState } from "react";
import Mew from "../assets/Mew.png";
import eva from "../assets/Eva.png";
import kci from "../assets/Kci.png";
import arrowdown from "../assets/arrow-circle-down.png";
import arrowup from "../assets/arrow-circle-down (1).png";
import close from "../assets/close-circle.png";
import PositionData from "../component/homePageComponent/PositionData";

const HomePage = () => {
  const [isOpenJob1, setIsOpenJob1] = useState(false);
  const [isOpenJob2, setIsOpenJob2] = useState(false);
  const [isOpenJob3, setIsOpenJob3] = useState(false);
  const [isOpenJob4, setIsOpenJob4] = useState(false);
  const [isOpenJob5, setIsOpenJob5] = useState(false);
  const [isOpenJob6, setIsOpenJob6] = useState(false);

  
  const arr = [
    {
      positionName: "Application Developer",
      jobDes: (
        <ul className="list-disc text-[12px] pl-5">
          <li>
            Negotiate pricing, sales terms, and delivery schedules with
            suppliers.
          </li>
          <li>Identify and source new suppliers.</li>
          <li>
            Track supplier performance to ensure quality standards, costs, and
            delivery timelines are maintained.
          </li>
          <li>Monitor inventory levels and manage purchase orders.</li>
          <li>Document the purchasing department's activities.</li>
          <li>
            Analyze market trends to support forecasting and decision-making.
          </li>
        </ul>
      ),
      requirement: (
        <ul className="list-disc text-[12px] pl-5">
          <li>
            Educational Degree: Bachelor’s degree in Business Administration,
          </li>
          <li>Supply Chain Management, or a related field.</li>
          <li>Sex: Any</li>
          <li>Age: 30-38 years old</li>
          <li>5 years of experience in procurement as a supervisor.</li>
          <li>
            Knowledge of procurement best practices, industry trends, and supply
          </li>
          <li>chain management principles.</li>
          <li>Excellent negotiation skills.</li>
          <li>Proficient in using procurement software and tools.</li>
        </ul>
      ),
    },
  ];
  
  return (
    <div>
      <div className="flex flex-row justify-start px-5 py-5 ">
        <h1 className="font-bold text-[20px] text-[#131E3c]">JOBS</h1>
      </div>

      {/* <div className="flex flex-col justify-center items-center">
        <div className="h-[1px] w-[90%] bg-[#131E3c]"></div>
        <div className="flex flex-row justify-between items-center w-[80%]">
          <p className="py-2 text-[12px]">Accounting & Purchasing</p>
          <img
            className="w-4 h-4 cursor-pointer"
            src={isOpenJob1 ? arrowup : arrowdown}
            alt=""
            onClick={() => setIsOpenJob1(!isOpenJob1)}
          />
        </div>
        <div className="h-[0.5px] w-[90%] bg-[#131E3c]"></div>

      </div> */}

      {/* <div className='flex flex-col justify-center items-center '>
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
      </div> */}

      {arr?.map((data, i) => {
        return (
          <div key={i}>
            <div className="flex justify-between w-full items-center px-5 border-b-2 py-5">
              <div>{data.positionName}</div>
              <img
                className="w-4 h-4 cursor-pointer"
                src={isOpenJob1 ? arrowup : arrowdown}
                alt=""
                onClick={() => setIsOpenJob1(!isOpenJob1)}
              />
            </div>
            {  isOpenJob1 &&  <PositionData onClose={setIsOpenJob1}/>}
          </div>
        );
      })}

      {/* <div className='flex flex-col justify-center items-center'>
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
      </div> */}
    </div>
  );
};
export default HomePage;
