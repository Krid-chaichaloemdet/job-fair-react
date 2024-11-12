import React from 'react'

export default function PositionData({onClose}) {
  return (
    <div className="fixed inset-0 bg-[#131E3c] bg-opacity-50 flex items-end z-50">
            <div className="bg-white rounded-[20px] w-full h-[80%] p shadow-lg relative">
              <img
              onClick={()=>onClose(false)}
                src={'src/assets/close-circle.png'}
                className="absolute top-2 right-2  w-[1.5rem] z-100"
              ></img>
              <div className="bg-[#131E3c] rounded-[20px] h-[100px] w-full flex justify-center items-center ">
                <h1 className="text-center text-[#fff] text-[14px]">
                  Accounting & Purchasing
                </h1>
              </div>

              <div className="flex flex-col pl-5 w-full h-[65%] overflow-y-scroll">
                <h3 className="font-bold text-[14px] py-2">Job Description</h3>
                <ul className="list-disc text-[12px] pl-5">
                  <li>
                    Negotiate pricing, sales terms, and delivery schedules with
                    suppliers.
                  </li>
                  <li>Identify and source new suppliers.</li>
                  <li>
                    Track supplier performance to ensure quality standards,
                    costs, and delivery timelines are maintained.
                  </li>
                  <li>Monitor inventory levels and manage purchase orders.</li>
                  <li>Document the purchasing department's activities.</li>
                  <li>
                    Analyze market trends to support forecasting and
                    decision-making.
                  </li>
                </ul>
                <h3 className="font-bold text-[14px] py-2">Requirements</h3>
                <ul className="list-disc text-[12px] pl-5">
                  <li>
                    Educational Degree: Bachelor’s degree in Business
                    Administration,
                  </li>
                  <li>Supply Chain Management, or a related field.</li>
                  <li>Sex: Any</li>
                  <li>Age: 30-38 years old</li>
                  <li>5 years of experience in procurement as a supervisor.</li>
                  <li>
                    Knowledge of procurement best practices, industry trends,
                    and supply
                  </li>
                  <li>chain management principles.</li>
                  <li>Excellent negotiation skills.</li>
                  <li>Proficient in using procurement software and tools.</li>
                </ul>
              </div>
              <div className="py-5 flex justify-center items-center">
                <button className="bg-[#131E3c] rounded-[20px] h-[40px] w-52 text-white text-[14px]">
                  Apply for Job
                </button>
              </div>
            </div>
          </div>
  )
}
