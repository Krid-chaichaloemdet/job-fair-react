import React from "react";
import { useNavigate } from "react-router-dom";


export default function TestingCompleteComponent({handleSubmitForm, setIsTestFinish, setIsOpenComPlete,setIsAfterTestSurvey}) {
  const navigate = useNavigate()
 
  return (
    <div className={"w-full h-full absolute top-0 left-0 z-50 bg-red-500"}>
      <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col justify-center items-center">
        <div className="text-center max-w-lg px-6 py-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            🎉 Do you want to finish this quiz before time runs out ?
          </h1>
       
          <div className="flex gap-5 items-center justify-center">
            <button
              onClick={() =>{
                handleSubmitForm()
                setIsOpenComPlete(true)
                // setIsTestFinish(true)
                // navigate('/afterTestSurvey')
                setIsAfterTestSurvey(true)
            }
            }
              className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Yes
            </button>
            <button
              onClick={() =>{
                setIsOpenComPlete(false)}
            
            }
              className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
