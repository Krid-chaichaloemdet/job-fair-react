import React from "react";

export default function TestingComponentNeedMoreTime({setIsNeedMoreTime}) {
  return (
    <div className="w-screen h-screen z-50 absolute top-0 left-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col justify-center items-center">
      <div className="text-center max-w-lg px-6 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          🎉 Time's up!
        </h1>
        <p className="text-gray-600 mb-5">
          Do you need more time, or would you like to finish this quiz?
        </p>
        <div className="flex gap-5 items-center w-full justify-center">
          <button 
        //   onClick={()=>setIsNeedMoreTime(false)}
          className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
            Yes
          </button>
          <button 
              onClick={()=>setIsNeedMoreTime(false)}
          className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
