import React from "react";

export default function PositionData({
  onClose,
  positionName,
  jobDes,
  requirement,
}) {
  console.log("jobDes", jobDes);
  return (
    <div className="fixed inset-0 bg-[#131E3c] bg-opacity-50 flex items-end z-50">
      <div className="bg-white rounded-[20px] w-full h-[80%] p shadow-lg relative">
        <img
          onClick={() => onClose(false)}
          src={"src/assets/close-circle.png"}
          className="absolute top-2 right-2  w-[1.5rem] z-100"
        ></img>
        <div className="bg-[#131E3c] rounded-[20px] h-[100px] w-full flex justify-center items-center ">
          <h1 className="text-center text-[#fff] text-[14px]">
            {positionName}
          </h1>
        </div>

        <div className="flex flex-col pl-5 w-full h-[65%] overflow-y-scroll">
          <h3 className="font-bold text-[14px] py-2">Job Description</h3>
          <ul className="list-disc text-[12px] pl-5">
            {
              // eslint-disable-next-line react/prop-types, no-undef
              jobDes.map((data, i) => {
                console.log(data);
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
          <button className="bg-[#131E3c] rounded-[20px] h-[40px] w-52 text-white text-[14px]">
            Apply for Job
          </button>
        </div>
      </div>
    </div>
  );
}
