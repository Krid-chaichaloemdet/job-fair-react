import React from 'react'
import jobsicon from '../../public/icons/jobsIcon.svg'
import profileicon from '../../public/icons/profileIcon.svg'
import languageicon from '../../public/icons/langIcon.svg'

export default function Footer() {
  return (
    <div className='bottom-0 flex fixed bg-[#D9D9D9] w-screen py-[1rem] px-[0.5rem]'>
      <div className='flex flex-col justify-center items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem] bg-[#b2b5be]'>
        <img src={jobsicon} alt="" className='my-[0.25rem]'/>
        <div>Jobs</div>
      </div>
      <div className='flex flex-col justify-center items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem]'>
        <img src={profileicon} alt="" className='my-[0.25rem]'/>
        <div>Send Profile</div>
      </div>
      <div className='flex flex-col justify-center items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem]'>
        <img src={languageicon} alt="" className='my-[0.25rem]'/>
        <div>language</div>
      </div>
    </div>
  )
}
