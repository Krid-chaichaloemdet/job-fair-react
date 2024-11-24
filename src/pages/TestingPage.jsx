import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

import TestingCoponent from "../component/testingPageComponent/TestingCoponent";
import TestingDiiferPage from "./TestingDifferPage";
import TestFinishLoading from "../component/loadingComponent/TestFinishLoading";
import TestingSurvey from "../component/testingPageComponent/TestingSurvey";

export default function TestingPage() {
  const navigate = useNavigate();

  const [count, setCount] = useState(120); ////////game time

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    totalClick: 0,
    totalSkip: 0,
    score: 0,
    time: 0,
    pic1: 0,
    pic2: 0,
    pic3: 0,
    pic4: 0,
    pic5: 0,
    pic6: 0,
    pic7: 0,
    pic8: 0,
    pic9: 0,
    pic10: 0,

    pic11: 0,
    pic12: 0,
    pic13: 0,
    pic14: 0,
    pic15: 0,
   

    click1: 0,
    click2: 0,
    click3: 0,
    click4: 0,
    click5: 0,
    click6: 0,
    click7: 0,
    click8: 0,
    click9: 0,
    click10: 0,

    click11: 0,
    click12: 0,
    click13: 0,
    click14: 0,
    click15: 0,
  

    skip1: 0,
    skip2: 0,
    skip3: 0,
    skip4: 0,
    skip5: 0,
    skip6: 0,
    skip7: 0,
    skip8: 0,
    skip9: 0,
    skip10: 0,

    skip11: 0,
    skip12: 0,
    skip13: 0,
    skip14: 0,
    skip15: 0,
 

    isCorrect1: 0,
    isCorrect2: 0,
    isCorrect3: 0,
    isCorrect4: 0,
    isCorrect5: 0,
    isCorrect6: 0,
    isCorrect7: 0,
    isCorrect8: 0,
    isCorrect9: 0,
    isCorrect10: 0,

    isCorrect11: 0,
    isCorrect12: 0,
    isCorrect13: 0,
    isCorrect14: 0,
    isCorrect15: 0,
 

    testTime: 0,
    test1: false,
    test2: false,
    test3: false,
    test4: false,
    test5: false,
    test6: false,
    test7: false,
    test8: false,
    test9: false,
    test10: false,
  });
  const testingData = [
    {
      title: "What number do you see?",
      image: "public/testingImages/Picture1.png",
      choice: [12, 48, 88, 42],
      correct: 3,
      width: 350,
      height: 350,
      textSize: 20,
    },
    {
      title: "What number do you see?",
      image: "public/testingImages/1.png",
      choice: [28, 73, 18, 42],
      correct: 1,
      width: 350,
      height: 350,
    },
    {
      title: "What is the next number?",
      image: "public/testingImages/nextnumber1.jpg",
      choice: [11, 15, 19, 26],
      correct: 1,
      width: 350,
      height: 350,
    },
    {
      title: "What is the next number?",
      image: "public/testingImages/nextnumber2.jpg",
      choice: [3, 5, 1, 0],
      correct: 1,
      width: 350,
      height: 350,
    },
    {
      title:
        "12 stamps with a face value of 10 Baht make a dozen. So, how many stamps with a face value of 40 Baht make a dozen?",
      choice: [1, 48, 20, 12],
      correct: 3,
      width: 350,
      height: 350,
    },
    {
      image: "public/testingImages/Picture5.png",
      choice: [
        <img
          key={1}
          className=" h-14 object-scale-down"
          src="public/testingImages/Picture5-a.png"
          alt=""
        />,
        <img
          key={2}
          className=" h-14 object-scale-down"
          src="public/testingImages/Picture5-b.png"
          alt=""
        />,
        <img
          className=" h-14 object-scale-down"
          key={3}
          src="public/testingImages/Picture5-c.png"
          alt=""
        />,
        <img
          className=" h-14 object-scale-down"
          key={4}
          src="public/testingImages/Picture5-d.png"
          alt=""
        />,
      ],
      correct: 3,
      width: 200,
      height: 200,
    },
    {
      title: "Based on the following dialogue, what are they talking about?",
      image: "public/testingImages/Picture7.png",
      choice: [
        "A.	Methods to control monthly costs.",
        "B.	Practicing mindful spending habits.",
        "C.	Finding balance between needs and wants.",
        "D.	Adjusting lifestyle to meet financial goals.",
        "E.	Understands English but cannot respond.",
        "F.	Does not understand English. / ไม่เข้าใจภาษาอังกฤษ",
      ],
      correct: 1,
      width: 200,
      height: 200,
    },
    {
      title: "在这张对话中，求职者因为什么原因被录取了？",
      image: "public/testingImages/PictureCh.jpg",
      choice: [
        "A.	他懂得如何使用最新技术",
        "B.	他会做美味的炒饭",
        "C.	他擅长重复利用旧的东西",
        "D.	他有丰富的领导经验",
        "E.	懂中文但无法回答",
        "F.	Does not understand Chinese / ไม่เข้าใจภาษาจีน",
      ],
      correct: 2,
      width: 200,
      height: 200,
    },
    {
      title: "Which of the following statements do you agree with the most?",
      choice: [
        "A. Work is just a means to earn enough money to sustain life.",
        "B. Work is the primary means of earning money, but if possible, one should also fulfill personal needs.",
        "c. Work is everything in life.",
      ],
      optional: true,
    },
    {
      title: "What do you dislike the most happening during work?",
      choice: [
        "A. I have no rest time of my own.",
        "B. I have too much leisure time and don't know what to do.",
        "C. Unable to work according to your own thoughts.",
      ],
      optional: true,
    },

  ];

  const [testingPage, setTestingPage] = useState(1);

  const [isStartTesting, setIsStartTesting] = useState(false);
  const [isStartDiffer, setIsStartDiffer] = useState(false);

  const [isTestFinish, setIsTestFinish] = useState(false);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [errorInput, setErrorInput] = useState(false);

  const [isOpenComplete, setIsOpenComPlete] = useState(false);

  const handleSubmitForm = async () => {
    try {
      localStorage.setItem("phoneNumber", input.phoneNumber)
      await axios.post("/user/createTestRecord", input)
    } catch (error) {
      console.log(error);
    }
  };

  const [isErrorCheckNumber, setIsErrorCheckNumber] = useState(false);
  const handleCheckPhoneNumber = async () => {
    try {
      await axios
        .post("/user/checkPhoneNumber", {
          phoneNumber: input.phoneNumber,
        })
        .then(() => {
          setIsErrorCheckNumber(false);
          handleStartTest();
        })
        .catch((res) => setIsErrorCheckNumber(res.response.data.message));
    } catch (error) {
      console.log(error);
    }
  };

  const handleStartTest = () => {
    if (!input.phoneNumber) {
      setErrorInput(true);
      return;
    }
    setIsStartDiffer(true);
  };
  useEffect(() => {
    if (isStartTesting && count > 0) {
      if (!isOpenComplete) {
        const timer = setTimeout(() => {
          setInput((prevInput) => ({
            ...prevInput,
            testTime: prevInput.testTime + 1,
          }));
          setCount((prevCount) => prevCount - 1);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [isStartTesting, count, isOpenComplete]);

  const [isNeedMoreTime, setIsNeedMoreTime] = useState(false);
  
  const [isAfterTestSurvey, setIsAfterTestSurvey] = useState(false)

  useEffect(() => {
    if (count === 0) {
      setIsAfterTestSurvey(true)
      setIsStartTesting(false);
      // setIsTestFinish(true);
      handleSubmitForm();
    }
  }, [count]);
  console.log(input);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center  overflow-y-hidden">
      <div className="h-full flex justify-center flex-col w-full px-[8rem]">
        <div className="w-full flex justify-center mb-[2rem] font-medium text-[1.75rem] tracking-[0.1em]">
          Quiz
        </div>
        <div className="">
          <div className="flex flex-col w-full items-start justify-center ">
            <div className="mb-[0.25rem] pb-5">
              <label htmlFor="" className="">
                Please enter the phone number you submitted during the
                registration.
              </label>
              {isErrorCheckNumber && (
                <div className="text-red-500 pb-5" htmlFor="">
                  {isErrorCheckNumber}
                </div>
              )}
              {errorInput && (
                <div className="text-red-500 pb-5">This field is required.</div>
              )}
            </div>
            <input
              onChange={handleInput}
              name="phoneNumber"
              className="bg-[#f3f3f5] border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] rounded-md w-full"
              type="text"
              value={input.phoneNumber}
            />
          </div>
        </div>
        <div className="flex justify-center gap-5 pt-[2rem] mb-[6rem] w-full ">
          <button
            onClick={handleCheckPhoneNumber}
            className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem] text-white w-full"
          >
            {" "}
            Start The Quiz
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem] text-white w-full"
          >
            {" "}
            Back to Home
          </button>
        </div>
    
        {isStartTesting && (
          <TestingCoponent
          setIsAfterTestSurvey={setIsAfterTestSurvey}
          setIsNeedMoreTime={setIsNeedMoreTime}
          isNeedMoreTime={isNeedMoreTime}
            testingPage={testingPage}
            count={count}
            input={input}
            setInput={setInput}
            testingData={testingData}
            setTestingPage={setTestingPage}
            handleSubmitForm={handleSubmitForm}
            setIsTestFinish={setIsTestFinish}
            setIsStartTesting={setIsStartTesting}
            isOpenComplete={isOpenComplete}
            setIsOpenComPlete={setIsOpenComPlete}
          />
        )}
            {
          isAfterTestSurvey && <TestingSurvey setIsAfterTestSurvey={setIsAfterTestSurvey} isAfterTestSurvey={isAfterTestSurvey} targetPhonenumber={input.phoneNumber}/>
        }
        {isStartDiffer && (
          <TestingDiiferPage
            setIsStartTesting={setIsStartTesting}
            setIsStartDiffer={setIsStartDiffer}
            input={input}
            setInput={setInput}
          />
        )}

        {isTestFinish && (
          <TestFinishLoading
            setCount={setCount}
            setInput={setInput}
            setIsTestFinish={setIsTestFinish}
            setIsOpenComPlete={setIsOpenComPlete}
            setIsStartTesting={setIsStartTesting}
          />
        )}
      </div>
    </div>
  );
}
