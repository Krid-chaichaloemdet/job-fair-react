import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TestingCoponent from "../component/testingPageComponent/TestingCoponent";
import DifferTestComponent from "../component/testingPageComponent/DifferTestComponent";
import TestingDiiferPage from "./TestingDifferPage";
import TestFinishLoading from "../component/loadingComponent/TestFinishLoading";

export default function TestingPage() {
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
    pic16: 0,
    pic17: 0,
    pic18: 0,
    pic19: 0,
    pic20: 0,

    pic21: 0,
    pic22: 0,
    pic23: 0,
    pic24: 0,
    pic25: 0,
    pic26: 0,
    pic27: 0,
    pic28: 0,
    pic29: 0,
    pic30: 0,

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
    click16: 0,
    click17: 0,
    click18: 0,
    click19: 0,
    click20: 0,

    click21: 0,
    click22: 0,
    click23: 0,
    click24: 0,
    click25: 0,
    click26: 0,
    click27: 0,
    click28: 0,
    click29: 0,
    click30: 0,

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
    skip16: 0,
    skip17: 0,
    skip18: 0,
    skip19: 0,
    skip20: 0,

    skip21: 0,
    skip22: 0,
    skip23: 0,
    skip24: 0,
    skip25: 0,
    skip26: 0,
    skip27: 0,
    skip28: 0,
    skip29: 0,
    skip30: 0,

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
    isCorrect16: 0,
    isCorrect17: 0,
    isCorrect18: 0,
    isCorrect19: 0,
    isCorrect20: 0,

    isCorrect21: 0,
    isCorrect22: 0,
    isCorrect23: 0,
    isCorrect24: 0,
    isCorrect25: 0,
    isCorrect26: 0,
    isCorrect27: 0,
    isCorrect28: 0,
    isCorrect29: 0,
    isCorrect30: 0,

    testTime: 0,
    testScore: 0,
    test1: 0,
    test2: 0,
    test3: 0,
    test4: 0,
    test5: 0,
    test6: 0,
    test7: 0,
    test8: 0,
  });
  const testingData = [
    {
      title: "What number do you see?",
      image: "public/testingImages/Picture1.png",
      choice: [12, 48, 88, 42, 82],
      correct: 3,
      width: 350,
      height: 350
    },
    {
      title: "What number do you see?",
      image: "public/testingImages/Picture2.jpg",
      choice: [28, 73, 18, 42, 82],
      correct: 3,
      width: 350,
      height: 350
    },
    {
      title: "1,3,6,10,",
      image: "public/testingImages/Picture3.png",
      choice: [11, 15, 19, 26],
      correct: 1,
      width: 350,
      height: 350
    },
    {
      title: "8,6,7,5,6,4,",
      image: "public/testingImages/Picture3.png",
      choice: [3, 5, 1, 0],
      correct: 1,
      width: 350,
      height: 350
    },
    {
      title:
        "12 stamps with a face value of 10 Baht make a dozen. So, how many stamps with a face value of 40 Baht make a dozen?",
      // image: "public/testingImages/Picture5.png",
      choice: [1, 48, 20, 12],
      correct: 3,
      width: 350,
      height: 350
    },
    {
      // mps with a face value of 10 Baht make a dozen. So, how many stamps with a face value of 40 Baht make a dozen?",
      image: "public/testingImages/Picture5.png",
      choice: [<img key={1} className="h-[3rem] object-scale-down" src="public/testingImages/Picture5-a.png" alt="" />, <img key={2} className="h-[3rem] object-scale-down" src="public/testingImages/Picture5-b.png" alt="" />, <img className="h-[3rem] object-scale-down" key={3} src="public/testingImages/Picture5-c.png" alt="" />, <img className="h-[3rem] object-scale-down" key={4} src="public/testingImages/Picture5-d.png" alt="" />],
      correct: 3,
      width: 250,
      height: 250
    },
    {
      title: "当你听到“异于常人”这个表达时，你会怎么理解？",
      image: "public/testingImages/Picture1.jpg",
      choice: ['这是指某人的行为、想法或爱好不同于大多数人，可能显得有点奇怪或不合常规', '这是指某人和大多数人完全相同，没有什么区别', '这是指某人非常保守，总是按部就班，不愿意冒险', '这是指某人很普通，什么都不特别'],
      correct: 0,
      width: 350,
      height: 350
    },
    {
      title: "你理解的“坏心思”是什么意思？",
      image: "public/testingImages/Picture8.jpg",
      choice: ['指心中有些無關緊要的想法，沒有特別的目的', '指心中有好意，希望能幫助他人解決問題', '指心中有惡意的念頭，想做一些對他人不利的事情', '指心中沒有任何念頭，只是保持冷靜和理智'],
      correct: 2,
      width: 350,
      height: 350
    },
  ];
  const [count, setCount] = useState(999);   ////////game time

  const [testingPage, setTestingPage] = useState(1);

  const [isStartTesting, setIsStartTesting] = useState(false);
  const [isStartDiffer, setIsStartDiffer] = useState(false);

  const [isTestFinish, setIsTestFinish] = useState(false)
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [errorInput, setErrorInput] = useState(false)
  const handleSubmitForm = async (e) => {
    try {
      // e.preventDefault();

      // if(!input.phoneNumber){
      //   setErrorInput(true)
      //   return
      // }
      // setIsStartDiffer(true)
      // e.preventDefault();
      await axios.post("http://localhost:8000/user/createTestRecord", input);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStartTest = () => {
    if (!input.phoneNumber) {
      setErrorInput(true)
      return
    }
    setIsStartDiffer(true)
  }

  useEffect(() => {
    // Only run the timer if `isStartTesting` is true
    if (isStartTesting && count > 0) {
      const timer = setTimeout(() => {
        // Update testing time and decrement count
        setInput(prevInput => ({ ...prevInput, testTime: prevInput.testTime + 1 }));
        setCount(prevCount => prevCount - 1);
      }, 1000);

      // Cleanup function to clear the timeout when the component unmounts or dependencies change
      return () => clearTimeout(timer);
    }
  }, [isStartTesting, count]);


  useEffect(() => {
    if (count === 0) {
      setIsStartTesting(false)
      setIsTestFinish(true)
      handleSubmitForm()
    }

  }, [count])
  console.log("count", count)
  const navigate = useNavigate()
  return (
    <div
      // onSubmit={handleSubmitForm}
      className="w-full h-screen flex flex-col justify-center items-center  overflow-y-hidden"
    >
      <div className="h-full flex justify-center flex-col w-full px-[8rem]">
        <div className="w-full flex justify-center mb-[2rem] font-medium text-[1.75rem] tracking-[0.1em]">Quiz</div>
        <div className="">
          {/* <div className="flex flex-col px-5 ">
          <label htmlFor="">Your first name</label>
          <input
            onChange={handleInput}
            name="firstName"
            className="rounded-sm"
            type="text"
          />
        </div> */}
          {/* <div className="flex flex-col px-5 ">
          <label htmlFor="">Your last name</label>
          <input
            onChange={handleInput}
            name="lastName"
            className="rounded-sm"
            type="text"
          />
        </div> */}
          <div className="flex flex-col w-full items-start justify-center ">
            <div className="mb-[0.25rem]">
              <label htmlFor="" className="text-[0.8rem] ">Phone number</label>
              {errorInput && <div className="text-red-500">Please enter your phone number</div>}
            </div>
            <input
              onChange={handleInput}
              name="phoneNumber"
              className="bg-[#f3f3f5] border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] rounded-md w-full"
              type="text"
            />
          </div>
          {/* <div className="flex flex-col px-5 ">
          <label htmlFor="">E-mail</label>
          <input
            onChange={handleInput}
            name="email"
            className="rounded-sm"
            type="text"
          />
        </div> */}
        </div>
        <div className="flex justify-center gap-5 pt-[2rem] mb-[6rem] w-full ">
          <button
            onClick={handleStartTest}
            className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem] text-white w-full"
          >
            {" "}
            Start Quiz
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem] text-white w-full"
          >
            {" "}
            Back to Home
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
        {isStartDiffer && (
          <TestingDiiferPage
            setIsStartTesting={setIsStartTesting}
            setIsStartDiffer={setIsStartDiffer}
            input={input}
            setInput={setInput}
          />
        )}

        {isTestFinish && <TestFinishLoading />}
      </div>
    </div>
  );
}
