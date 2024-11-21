import React, { useEffect, useState } from "react";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import TestingCompleteComponent from "./TestingCompleteComponent";

export default function TestingComponent({
  count,
  input,
  setInput,
  testingPage,
  testingData,
  setTestingPage,
  handleSubmitForm,
  setIsTestFinish,
  setIsStartTesting,
  setIsOpenComPlete
  ,isOpenComplete
}) {


  return (
    <div className="bg-white w-full h-full fixed top-0 left-0 mt-[80px] ">
      {isOpenComplete && (
        <TestingCompleteComponent
          setIsOpenComPlete={setIsOpenComPlete}
          handleSubmitForm={handleSubmitForm}
          setIsTestFinish={setIsTestFinish}
        />
      )}
      <div className="px-[2rem] py-[2rem] h-screen w-screen">
        <div className="flex w-full justify-between items-center pb-[1rem]">
          <div className="font-medium text-[1.75rem] tracking-[0.1em]">
            Question {testingPage} of 11
          </div>
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
              className="h-[400px] object-scale-down"
              src={"" + testingData[testingPage - 1].image}
              alt="Question Image"
            />
          )}
        </div>

        <div className="w-full pb-[1rem] pt-[3rem] px-[4rem]">
          {testingData[testingPage - 1].choice.map((choice, i) => (
            <div
              className="flex gap-[0.5rem] items-center "
              key={`choice-${testingPage}-${i}`}
            >
              <input
                type="radio"
                name={`question-${testingPage}`}
                onClick={() => {
                  if (testingData[testingPage - 1].optional) {
                    setInput((prevInput) => ({
                      ...prevInput,
                      [`test${testingPage}`]: choice,
                    }));

                    return;
                  }

                  if (testingData[testingPage - 1].correct === i) {
                    setInput((prevInput) => ({
                      ...prevInput,
                      [`test${testingPage}`]: 1,
                      testScore: input.testScore + 1,
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

        <div className="flex w-full justify-center gap-16 items-center bottom-0 fixed  pb-1 left-0">
          <IoIosArrowDropleft
            onClick={() => {
              if (testingPage === 1) {
                return;
              }
              setTestingPage(testingPage - 1);
            }}
            className={`text-5xl ${
              testingPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          />
          <IoIosArrowDropright
            onClick={() => {
              if (testingPage === 11) {
                return;
              }
              setTestingPage(testingPage + 1);
            }}
            className={`text-5xl ${
              testingPage === 11
                ? "text-gray-400 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          />
          <div
            onClick={() => {
              setIsTestFinish(false);
              // setIsStartTesting(false)
              setIsOpenComPlete(true);
            }}
            className="bg-[#131E3C] py-[0.5rem] rounded-full cursor-pointer px-[2rem] text-white font-medium fixed right-[2rem]"
          >
           Complete
          </div>
        </div>
      </div>
    </div>
  );
}
