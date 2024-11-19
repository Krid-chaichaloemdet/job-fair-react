import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function TestFinishLoading() {

    const navigate = useNavigate()
  return (
    <ul className='w-screen h-screen absolute top-0 left-0 bg-white flex justify-center items-center flex-col'>
        <li>Well done !! the test was already sent to us, please wait for us to contact back</li>
        <li>Please return i-pad back to our staff</li>
        <li>Thank you very much</li>
        <li
        className='cursor-pointer
        bg-gray-500 p-5 rounded-3xl
        '
        onClick={()=>navigate('/')}
        >Back to home page</li>
    </ul>
  )
}
