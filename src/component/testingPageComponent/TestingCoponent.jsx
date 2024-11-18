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
    <div className="bg-white w-full h-screen absolute">
      <div className="flex w-full justify-between px-10">
        <div>Question {testingPage} of 20</div>
        <div>Count: {count}</div>
      </div>
      <div>{testingData[testingPage - 1].title}</div>
      {testingData[testingPage - 1].image && (
        <img
          style={{
            width: testingData[testingPage - 1].width,
            height: testingData[testingPage - 1].height,
          }}
          src={"" + testingData[testingPage - 1].image}
          alt="Question Image"
        />
      )}
      <div>
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

      <div className="flex gap-16 items-center">
        {/* <=== */}
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
        {/* ===> */}
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
