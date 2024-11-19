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
    <div className="bg-white w-full h-full absolute top-0 left-0">
      <div className="flex w-full justify-between px-10  p-5">
        <div className="">Question {testingPage} of 8</div>
        <div>Count: {count}</div>
      </div>
      <div className=" flex flex-col  items-center">
        <div className="p-5 w-full  ">
          <div className="">

          {testingData[testingPage - 1].title}
          </div>
        </div>

        {testingData[testingPage - 1].image && (
          <img
            // className="w-40 h-40  "
            style={{
              width: testingData[testingPage - 1].width,
              height: testingData[testingPage - 1].height,
            }}
            src={"" + testingData[testingPage - 1].image}
            alt="Question Image"
          />
        )}
      </div>
      <div className=" pl-20">
        {testingData[testingPage - 1].choice.map((choice, i) => (
          <div className="flex gap-2" key={`choice-${testingPage}-${i}`}>
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

      <div className="flex justify-center gap-16 items-center ">
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
            if (testingPage === 8) {
              return;
            }
            setTestingPage(testingPage + 1);
          }}
          className={`text-5xl ${
            testingPage === 8
              ? "text-gray-400 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        />
      </div>
    </div>
  );
}
