import React, { useState } from "react";

import axios from "axios";

import TestingCoponent from "../component/testingPageComponent/TestingCoponent";

export default function TestingPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    test1: "",
  });

  const testingData = [
    {
      title: "What number do you see?",
      image: "public/testingImages/Picture1.png",
      choice: [12, 48, 88, 42, 82],
      correct: 3
    },
    {
      title: "What number do you see?",
      image: "public/testingImages/Picture2.jpg",
      choice: [12, 48, 88, 42, 82],
      correct: 3
    }
  ];

  const [testingPage, setTestingPage] = useState(1);

  const [isStartTesting, setIsStartTesting] = useState(false);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8000/user/register", input);
    } catch (error) {
      console.log(error);
    }
  };

  const [count, setCount] = useState(0);

  if (isStartTesting) {
    setTimeout(() => {
      setCount(count + 1);
    }, [1000]);
  }

  

  return (
    <div
      // onSubmit={handleSubmitForm}
      className="w-screen h-screen bg-blue-600 flex flex-col"
    >
      <div className="w-full flex justify-center py-5 ">Challenge</div>
      <div className="grid grid-cols-2 gap-5 px-5">
        <div className="flex flex-col px-5 ">
          <label htmlFor="">Your first name</label>
          <input
            onChange={handleInput}
            name="firstName"
            className="rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col px-5 ">
          <label htmlFor="">Your last name</label>
          <input
            onChange={handleInput}
            name="lastName"
            className="rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col px-5 ">
          <label htmlFor="">Phone number</label>
          <input
            onChange={handleInput}
            name="phoneNumber"
            className="rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col px-5 ">
          <label htmlFor="">E-mail</label>
          <input
            onChange={handleInput}
            name="email"
            className="rounded-sm"
            type="text"
          />
        </div>
      </div>
      <div className="flex justify-center py-5  w-full ">
        <button
          onClick={() => setIsStartTesting(true)}
          className="bg-blue-950 text-white px-16 py-2 rounded-3xl"
        >
          {" "}
          Start Challenge
        </button>
      </div>
      {isStartTesting && (
        <TestingCoponent
          testingPage={testingPage}
          count={count}
          input={input}
          setInput={setInput}
          testingData={testingData}
          setTestingPage={setTestingPage}
        />
      )}
    </div>
  );
}
