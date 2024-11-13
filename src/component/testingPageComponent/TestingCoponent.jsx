import React from "react";

import { IoIosArrowDropright ,IoIosArrowDropleft } from "react-icons/io";

export default function TestingComponent({
  count,
  input,
  setInput,
  testingPage,
  testingData,
  setTestingPage
}) {
console.log(testingData[testingPage - 1].image)
  return (
    <div className="bg-white w-full h-screen absolute">
      <div className="flex w-full justify-between px-10">
        <div>Question {testingPage} of 20</div>
        <div>Count: {count}</div>
      </div>
      <div>{testingData[testingPage - 1].title}</div>
  { testingData[testingPage - 1].image &&   <img className="w-56 h-56" src={''+ testingData[testingPage - 1].image} alt="Question Image" />}
      <div>
        {
            // eslint-disable-next-line react/prop-types
            testingData[testingPage - 1].choice.map((choice, i) => (
                <div className="flex gap-2" key={i}>
                  <input
                    type="radio"
                    name={`question-${i}`}  // Ensure each question's radio buttons are grouped
                    onClick={() => {
                      // eslint-disable-next-line react/prop-types
                      if (i ===  testingData[testingPage - 1].correct) {
                        setInput({ ...input, [`test${i +1}`]: 1 }); // Update the specific question's state
                      }
                    }}
                  />
                  <label>{choice}</label>
                </div>
              ))
        }
      </div>
      {/* <div>
        {testingData?.map((data, index) => {
          return (
            <div key={index} className="px-5 py-5">
              <div>{data.title}</div>
              <img className="w-56 h-56" src={data.image} alt="Question Image" />
              
              {data.choice.map((choice, i) => (
                <div className="flex gap-2" key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}  // Ensure each question's radio buttons are grouped
                    onClick={() => {
                      if (i === data.correct) {
                        setInput({ ...input, [`test${index +1}`]: 1 }); // Update the specific question's state
                      }
                    }}
                  />
                  <label>{choice}</label>
                </div>
              ))}
              <div className="flex">
              <IoIosArrowDropleft className="text-5xl"/>
              <IoIosArrowDropright 
              onClick={()=>setTestingPage((prev)=>prev+1)}
              className="text-5xl"/>
              </div>
            </div>
          );
        })}
      </div> */}

<div className="flex justify-between items-center">
      {/* Left Arrow (Previous Page) */}
      <IoIosArrowDropleft
        onClick={() =>{
            if (testingPage === 1){
                return
            }
            setTestingPage((prev) => prev - 1)}}
        className={`text-5xl ${testingPage === 1 ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"}`}
      />
      
      {/* Right Arrow (Next Page) */}
      <IoIosArrowDropright
        onClick={() => setTestingPage((prev) => prev + 1)}
        className={`text-5xl ${testingPage === 20 ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"}`}
      />
    </div>
    </div>
  );
}
