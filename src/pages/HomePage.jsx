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
 

  const arr = [
    {
      positionName: "Application Developer",
      jobDes: [
        {
          title: ` Negotiate pricing, sales terms, and delivery schedules with
            suppliers.`,
        },

        { title: `Identify and source new suppliers.` },
        {
          title: `    Track supplier performance to ensure quality standards, costs, and
            delivery timelines are maintained.`,
        },
        { title: `Monitor inventory levels and manage purchase orders.` },
        { title: `Document the purchasing department's activities.` },
        {
          title: ` Analyze market trends to support forecasting and decision-making.`,
        },
      ],
      requirement: [
        {
          title: ` Educational Degree: Bachelor’s degree in Business Administration,`,
        },
        { title: `Supply Chain Management, or a related field.` },
        { title: `Sex: Any` },
        { title: `Age: 30-38 years old` },
        { title: `5 years of experience in procurement as a supervisor.` },
        {
          title: ` Knowledge of procurement best practices, industry trends, and supply`,
        },
        { title: `chain management principles.` },
        { title: `Excellent negotiation skills.` },
        { title: `Proficient in using procurement software and tools.` },
      ],
    },
  ];

  return (
    <div className="w-full px-[2rem] py-[1rem] flex flex-col mb-[6rem]">
      <div className='flex flex-row justify-start'>
        <div className="font-medium text-[1.75rem] tracking-[0.1em]">Jobs</div>
      </div>

      {arr?.map((data, i) => {
        return (
          <div key={i}>
            <div className="flex justify-between w-full items-center border-b-2 py-[1.25rem]">
              <div className="text-[0.7rem] tracking-[0.1em]">{data.positionName}</div>
              <img
                className="w-[1.25rem] h-[1.25rem] cursor-pointer"
                src={isOpenJob1 ? arrowup : arrowdown}
                alt=""
                onClick={() => setIsOpenJob1(!isOpenJob1)}
              />
            </div>
            {isOpenJob1 && (
              <PositionData
                onClose={setIsOpenJob1}
                positionName={arr[i].positionName}
                jobDes={arr[i].jobDes}
                requirement={arr[i].requirement}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
