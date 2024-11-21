import React, { useEffect, useState } from "react";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function TestingComponent({
  count,
  input,
  setInput,
  testingPage,
  testingData,
  setTestingPage,
}) {
  return (
    <div className="bg-white w-full h-full fixed top-0 left-0 mt-[80px] ">
      <div className="px-[2rem] py-[2rem] h-screen w-screen">
        <div className="flex w-full justify-between items-center pb-[1rem]">
          <div className="font-medium text-[1.75rem] tracking-[0.1em]">Question {testingPage} of 8</div>
          <div className="">Count: {count}</div>
        </div>
        <div className=" flex flex-col  items-center">
          <div className="pb-[1rem] w-full">
            <div className="indent-[2rem]">

              {testingData[testingPage - 1].title}
            </div>
          </div>

          {testingData[testingPage - 1].image && (
            <img
              // className="w-40 h-40  "
              // style={{
              //   width: testingData[testingPage - 1].width,
              //   height: testingData[testingPage - 1].height,
              // }}
              className="h-[400px] object-scale-down"
              src={"" + testingData[testingPage - 1].image}
              alt="Question Image"
            />
          )}
        </div>

        <div className="w-full pb-[1rem] pt-[3rem] px-[4rem]">
          {testingData[testingPage - 1].choice.map((choice, i) => (
            <div className="flex gap-[0.5rem] items-center" key={`choice-${testingPage}-${i}`}>
              <input
                type="radio"
                name={`question-${testingPage}`}
                onClick={() => {
                  if (testingData[testingPage - 1].correct === i) {
                    setInput((prevInput) => ({
                      ...prevInput,
                      [`test${testingPage}`]: 1,
                      testScore: prevInput.testScore + 1,
                    }));

                    return;
                  } else {
                    setInput((prevInput) => {
                      const newTestScore =
                        prevInput.testScore > 0
                          ? prevInput.testScore - 1
                          : prevInput.testScore;

                      return {
                        ...prevInput,
                        [`test${testingPage}`]: 0,
                        testScore: newTestScore,
                      };
                    });
                  }
                }}
              />
              <label>{choice}</label>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center gap-16 items-center bottom-0 fixed mb-[2rem] left-0">
          <IoIosArrowDropleft
            onClick={() => {
              if (testingPage === 1) {
                return;
              }
              setTestingPage(testingPage - 1);
            }}
            className={`text-5xl ${testingPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "cursor-pointer"
              }`}
          />
          <IoIosArrowDropright
            onClick={() => {
              if (testingPage === 8) {
                return;
              }
              setTestingPage(testingPage + 1);
            }}
            className={`text-5xl ${testingPage === 8
                ? "text-gray-400 cursor-not-allowed"
                : "cursor-pointer"
              }`}

          />
          <div className="bg-[#131E3C] py-[0.5rem] rounded-full cursor-pointer px-[2rem] text-white font-medium fixed right-[2rem]">Complete</div>
        </div>
        
      </div>


    </div>
  );
}
