import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TestFinishLoading({setIsTestFinish, setInput,setCount, setIsOpenComPlete, setIsStartTesting}) {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col justify-center items-center">
      <div className="text-center max-w-lg px-6 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">🎉 Well Done!</h1>
        <p className="text-gray-600 mb-2">
        Your quiz has been successfully submitted.
        </p>
        <p className="text-gray-600 ">Please kindly return the iPad to our staffs</p>
        <p className='text-gray-600 '>and receive a souvenir from the staffs at our booth.</p>
        <p className='text-gray-600 mb-6'>Thank you for your cooperation!</p>
        <button
          className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
          onClick={() =>{
            setInput({
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
    test9: 0,
    test10: 0,
    test11: 0,
            })
            setCount(120)
            setIsTestFinish(false)
            setIsOpenComPlete(false)
            setIsStartTesting(false)
          }
          
          }
        >
          Countinue
        </button>
      </div>
    </div>
  );
}
