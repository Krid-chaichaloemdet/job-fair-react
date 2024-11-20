import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TestFinishLoading() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col justify-center items-center">
      <div className="text-center max-w-lg px-6 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">🎉 Well Done!</h1>
        <p className="text-gray-600 mb-2">
        Your test has been successfully submitted. Please wait for us to contact you soon..
        </p>
        <p className="text-gray-600 ">Kindly return the iPad to our staff.</p>
        <p className='text-gray-600 '>and receive the souvenir from the staff at the booth.</p>
        <p className='text-gray-600 mb-6'>Thank you for your cooperation!</p>
        <button
          className="bg-[#131E3C]  text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
          onClick={() => navigate('/testingPage')}
        >
          Countinue
        </button>
      </div>
    </div>
  );
}
