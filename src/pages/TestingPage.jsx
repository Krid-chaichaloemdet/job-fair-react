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

    testTime : 0,
    testScore : 0,
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
    },
    {
      title: "What number do you see?",
      image: "public/testingImages/Picture2.jpg",
      choice: [28, 73, 18, 42, 82],
      correct: 3,
    },
    {
      title: "1,3,6,10,",
      image: "public/testingImages/Picture3.png",
      choice: [11, 15, 19, 26],
      correct: 1,
    },
    {
      title: "8,6,7,5,6,4,",
      image: "public/testingImages/Picture3.png",
      choice: [3, 5, 1, 0],
      correct: 1,
    },
    {
      title:
        "12 stamps with a face value of 10 Baht make a dozen. So, how many stamps with a face value of 40 Baht make a dozen?",
      // image: "public/testingImages/Picture5.png",
      choice: [1, 48, 20, 12],
      correct: 3,
    },
    {
      // mps with a face value of 10 Baht make a dozen. So, how many stamps with a face value of 40 Baht make a dozen?",
      image: "public/testingImages/Picture5.png",
      choice: [<img key={1} src="public/testingImages/Picture5-a.png" alt="" />, <img key={2} src="public/testingImages/Picture5-b.png" alt="" />, <img key={3} src="public/testingImages/Picture5-c.png" alt="" />, <img key={4} src="public/testingImages/Picture5-d.png" alt="" />],
      correct: 3,
    },
    {
      title: "Based on the following dialogue, what are they talking about?",
      image: "public/testingImages/Picture7.png",
      choice: ['Smart Shopping', 'Financial Planning', 'Saving Money', 'Spending Less'],
      correct: 3,
      width: 600,
      height: 500
    },
    {
      title: "Based on the following dialogue, what are they talking about?",
      image: "public/testingImages/Picture8.png",
      choice: ['Growing Up', 'Maturity', 'Adulthood', 'Fashion Choices'],
      correct: 3,
      width: 600,
      height: 500
    },
  ];

  const [testingPage, setTestingPage] = useState(1);

  const [isStartTesting, setIsStartTesting] = useState(false);
  const [isStartDiffer, setIsStartDiffer] = useState(false);

  const [isTestFinish, setIsTestFinish] =useState(false)
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {

      // e.preventDefault();
      await axios.post("http://localhost:8000/user/createTestRecord", input);
    } catch (error) {
      console.log(error);
    }
  };
  const [count, setCount] = useState(5);



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

  
  useEffect(()=>{
    if(count === 0 ) {
      setIsStartTesting(false)
      setIsTestFinish(true)
      handleSubmitForm()
    }

  },[count])

  const navigate = useNavigate()
  return (
    <div
      // onSubmit={handleSubmitForm}
      className="w-full flex flex-col justify-center items-center"
    >
      <div className="h-screen flex justify-center flex-col">
      <div className="w-full flex justify-center py-5 ">Challenge</div>
      <div className="gap-5 px-5">
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
        <div className="flex flex-col px-5 w-full items-center justify-center ">
          <label htmlFor="">Phone number</label>
          <input
            onChange={handleInput}
            name="phoneNumber"
            className="rounded-sm bg-gray-300"
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
      <div className="flex justify-center gap-5 py-5  w-full ">
        <button
          onClick={() => setIsStartDiffer(true)}
          className="bg-blue-950 text-white px-16 py-2 rounded-3xl"
        >
          {" "}
          Start Challenge
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-950 text-white px-16 py-2 rounded-3xl"
        >
          {" "}
          Back To Home
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

   { isTestFinish &&  <TestFinishLoading />}
   </div>
    </div>
  );
}
