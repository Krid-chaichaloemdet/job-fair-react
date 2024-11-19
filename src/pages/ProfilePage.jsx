import React from 'react'

export default function ProfilePage() {
  return (
    <div className='w-full h-[100%] px-[2rem] py-[1rem] mt-[80px] flex flex-col mb-[6rem]'>
      <div className='flex flex-row items-start justify-start'>
        <h1 className='font-medium text-[1.75rem] tracking-[0.1em]'>Profile</h1>
      </div>
      <div className='flex flex-col justify-center w-full py-2'>
        <div className='py-2'>
          <p className='pb-2'>Your first name</p>
          <input class="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0" type="text" name="firstName" fdprocessedid="6kf01q"></input>
        </div>
        <div className='py-2'>
          <p className='pb-2'>Your last name</p>
          <input class="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 " type="text" name="lastName" fdprocessedid="6kf01q"></input>
        </div>
        <div className='py-2'>
          <p className='pb-2'>Phone number</p>
          <input class="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 " type="number" name="phonenumber" fdprocessedid="6kf01q"></input>
        </div>
        <div className='py-2'>
          <p className='pb-2'>Email</p>
          <input class="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 " type="email" name="email" fdprocessedid="6kf01q"></input>
        </div>
      </div>
      <button class="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem]" fdprocessedid="rfa0wpn"><div class="text-[#ffffff] tracking-[0.12em]">Edit Profile</div></button>
    </div>
  )
}
