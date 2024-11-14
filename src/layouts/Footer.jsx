import React from 'react'

import jobsicon from '../../public/icons/jobsIcon.svg'
import profileicon from '../../public/icons/profileIcon.svg'
import languageicon from '../../public/icons/langIcon.svg'

export default function Footer() {
  return (
    <div className='bottom-0 flex fixed bg-[#D9D9D9] w-full py-[1rem] px-[0.5rem]'>
      <div className='flex flex-col justify-start items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem] duration-300 ease-in '>
        <img src={jobsicon} alt="" className='my-[0.25rem]'/>
        <div className='text-[0.8rem] text-center'>Jobs</div>
      </div>
      <div className='flex flex-col justify-start items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem] duration-300 ease-in bg-[#b2b5be]'>
        <img src={profileicon} alt="" className='my-[0.25rem]'/>
        <div className='text-[0.8rem] text-center'>Send Profile</div>
      </div>
      {/* <div className='flex flex-col justify-start items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem] duration-300 ease-in'>
        <img src={languageicon} alt="" className='my-[0.25rem]'/>
        <div className='text-[0.8rem] text-center'>language</div>
      </div> */}
    </div>

  )
}
