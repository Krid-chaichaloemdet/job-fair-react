import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";

export default function PositionData({
  onClose,
  positionName,
  jobDes,
  requirement,
}) {

  const handleApply = () => {

    localStorage.setItem('position',positionName)
    console.log("first")
  }
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

        <div className="flex flex-col pl-5 w-full h-[65%] overflow-y-scroll">
          <h3 className="font-bold text-[14px] py-2">Job Description</h3>
          <ul className="list-disc text-[12px] pl-5">
            {
              // eslint-disable-next-line react/prop-types, no-undef
              jobDes.map((data, i) => {
                return <li key={i}>{data.title}</li>;
              })
            }
          </ul>
          <h3 className="font-bold text-[14px] py-2">Requirements</h3>
          <ul className="list-disc text-[12px] pl-5">
            {
              // eslint-disable-next-line react/prop-types
              requirement.map((data, i) => {
                return <li key={i}>{data.title}</li>;
              })
            }
          </ul>
        </div>
        <div className="py-5 flex justify-center items-center">
          <Link to={ localStorage.getItem('photo') !== 'true' ? '/camera' : '/registerPage'}>
          <button
          onClick={()=>handleApply()}
          className="bg-[#131E3c] rounded-[20px] h-[40px] w-52 text-white text-[14px]">
            Apply for Job
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
