import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function TestingSurvey({ targetPhonenumber,setIsAfterTestSurvey }) {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    phoneNumber: targetPhonenumber ,
    survey1: "",
    survey2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value }); 
  };

  const handleSubmit = async () => {
    try {
      axios.post('http://localhost:8000/user/createSurvey', input)
    } catch (error) {
      console.log(error)
    }
  }
console.log(input)
  const arr = [
    {
      titleEn: "1. How interested are you in applying for a job with our company?",
      titleTh: "คุณมีความสนใจในการสมัครงานกับบริษัทเรามากน้อยเพียงใด? ",
      choice: [
        "5. สนใจมากที่สุด / Very interested",
        "4. สนใจมาก / Interested",
        "3. สนใจปานกลาง / Neutral",
        "2. ไม่ค่อยสนใจ / Slightly interested",
        "1. ไม่สนใจเลย / Not interested at all",
      ],
      optional: true,
    },
    {
      titleEn: "2. How much do you like our company's recruitment process?",
      titleTh: "คุณชอบวิธีการรับสมัครงานของบริษัทเรามากน้อยเพียงใด?",
      choice: [
        "5 ชอบมากที่สุด / Very much",
        "4 ชอบมาก / Quite a lot",
        "3 ชอบปานกลาง / Neutral",
        "2 ไม่ค่อยชอบ / Not much",
        "1 ไม่ชอบเลย / Not at all",
      ],
      optional: true,
    },
  ];

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col justify-center items-center">
      <div className="text-center max-w-lg px-6 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">🎉 The quiz has ended!</h1>
        <p className="text-gray-600 mb-5">
          Please help me by completing the survey so we can know you better.
        </p>
        <div className="text-xs">
          {arr.map((item, index1) => (
            <div className="flex flex-col items-start" key={index1}>
              {/* Title Section */}
              <div className="flex flex-col py-5 items-start">
                <p>{item.titleEn}</p>
                <p className="pl-4">{item.titleTh}</p>
              </div>

              {/* Choice Section */}
              <div className="flex flex-col gap-3">
                {item.choice.map((choice, index2) => (
                  <div className="flex gap-5" key={index2}>
                    <input
                      type="radio"
                      id={`choice-${index1}-${index2}`}
                      name={`survey${index1 + 1}`} // Group radio buttons by survey
                      value={choice}
                      onChange={handleChange} // Bind the onChange handler
                      checked={input[`survey${index1 + 1}`] === choice} // Preserve selection
                    />
                    <label htmlFor={`choice-${index1}-${index2}`}>{choice}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            handleSubmit()
            navigate("/testingSuccess");
          }}
          className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
