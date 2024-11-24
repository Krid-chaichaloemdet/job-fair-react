import React, { useEffect, useState } from "react";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import TestingCompleteComponent from "./TestingCompleteComponent";
import TestingComponentNeedMoreTime from "./TestingComponentNeedMoreTime";

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
  setIsOpenComPlete,
  isOpenComplete,
  isNeedMoreTime,
  setIsNeedMoreTime,
  setIsAfterTestSurvey

}) {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  console.log(testingPage);
  return (
    <div className="bg-white w-full h-full fixed top-0 left-0 mt-[80px] ">
      {isOpenComplete && (
        <TestingCompleteComponent
        setIsAfterTestSurvey={setIsAfterTestSurvey}
          setIsOpenComPlete={setIsOpenComPlete}
          handleSubmitForm={handleSubmitForm}
          setIsTestFinish={setIsTestFinish}
        />
      )}
      {isNeedMoreTime && (
        <TestingComponentNeedMoreTime setIsNeedMoreTime={setIsNeedMoreTime} />
      )}
      <div className="px-[2rem] py-[2rem] h-screen w-screen">
        <div className="flex w-full justify-between items-center pb-[1rem]">
          <div className="font-medium text-[1.75rem] tracking-[0.1em]">
            Question {testingPage} of 10
          </div>
          <div className="">
            {" "}
            <div className="w-full flex justify-center  gap-3 items-end">
              <div> {minutes + " m "}</div>
              <div>{seconds + " s"}</div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  items-center">
          <div className="pb-[1rem] w-full">
            <div className={`indent-[2rem]`}>
              {testingData[testingPage - 1].title}
            </div>
          </div>

          {testingData[testingPage - 1].image && (
            <img
              className="h-[450px] object-scale-down"
              src={"" + testingData[testingPage - 1].image}
              alt="Question Image"
            />
          )}
        </div>

        <div className="w-full pb-[1rem] pt-[1rem] px-[4rem] flex flex-col gap-2 ">
          {testingData[testingPage - 1].choice.map((choice, i) => {
          //  let selectRadio =  input.test[testingPage]
          // console.log(input.test[testingPage])
            return (
              <div
                onClick={() =>
                  document.getElementById(`testingPage-${i}`).click()
                }
                className="flex gap-5 items-center bg-gray-100   border-2 p-1"
                key={`choice-${testingPage}-${i}`}
              >
                <input
                  checked={input[`test${testingPage}`] === i }
                  id={`testingPage-${i}`}
                  type="radio"
                  name={`question-${testingPage}`}
                  onClick={() => {
        
                    setInput((prevInput)=> ({ ...prevInput, [`test${testingPage}`]: i}))
                    if (testingData[testingPage - 1].correct === i) {
                      setInput((prevInput) => ({
                        ...prevInput,
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
                          testScore: newTestScore,
                        };
                      });
                    }


                    // if (testingData[testingPage - 1].optional) {
                    //   setInput((prevInput) => ({
                    //     ...prevInput,
                    //     [`test${testingPage}`]: choice,
                    //   }));

                    //   return;
                    // }
                  }}
                />
                <label>{choice}</label>
              </div>
            );
          })}
        </div>

        <div className="flex z-10 w-full justify-center gap-16 items-center bottom-0 fixed  pb-1 left-0">
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
              if (testingPage === 10) {
                return;
              }
              setTestingPage(testingPage + 1);
            }}
            className={`text-5xl ${
              testingPage === 10
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
