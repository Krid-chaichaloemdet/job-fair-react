import React, { useState, useEffect } from "react";

export default function PositionData({
  onClose,
  positionName,
  jobDes,
  requirement,
}) {
  console.log("jobDes", jobDes);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  const handleClose = () => {
    setOpenModal(false);
    setTimeout(() => {
      onClose(false);
    }, 300);
  };


  return (
    <div className={`fixed inset-0 bg-[#131E3c] flex items-end z-50 duration-200 ease-in
        ${
          openModal ? "bg-opacity-50" : "bg-opacity-0"
        }`}>
      <div className={`bg-white rounded-t-[20px] w-full h-[80%] relative duration-300 flex flex-col justify-start transform 
        ${
          openModal ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <img
          onClick={handleClose}
          src={"src/assets/close-circle.png"}
          className="absolute top-3 right-3 w-[1.75rem] z-100 cursor-pointer rounded-full"
        ></img>
        <div className="flex bg-[#131E3c] rounded-[20px] min-h-[140px] w-full  justify-center items-center ">
          <div className="text-center text-[#fff] text-[1rem] tracking-[0.2em] font-medium">
            {positionName}
          </div>
        </div>

        <div className="flex flex-col px-[1.5rem] py-[0.5rem] w-full h-full overflow-y-scroll">
          <div className="my-[0.5rem]">
            <div className="font-medium text-[1rem] py-[0.75rem] tracking-[0.1em]">Job Description</div>
            <ul className="list-disc text-[12px] pl-5">
              {
                // eslint-disable-next-line react/prop-types, no-undef
                jobDes.map((data, i) => {
                  console.log(data);
                  return <li key={i}>{data.title}</li>;
                })
              }
            </ul>
          </div>
          <div className="my-[0.5rem]">
            <div className="font-medium text-[1rem] py-[0.75rem] tracking-[0.1em]">Requirements</div>
            <ul className="list-disc text-[12px] pl-5">
              {
                // eslint-disable-next-line react/prop-types
                requirement.map((data, i) => {
                  return <li key={i}>{data.title}</li>;
                })
              }
            </ul>
          </div>
          
          
        </div>
        <div className="py-5 flex justify-center items-center">
          <button className="bg-[#131E3c] rounded-full py-[0.75rem] w-[80%] text-white text-[0.9rem] tracking-[0.2em]">
            Apply for Job
          </button>
        </div>
      </div>
    </div>
  );
}
