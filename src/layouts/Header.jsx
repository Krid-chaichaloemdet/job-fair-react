import React from 'react'
import evalogo from '../../public/logo/evaLogo.svg'
import kcilogo from '../../public/logo/kcilogo.svg'
import meworxlogo from '../../public/logo/meworxlogo.svg'

export default function Header() {
  return (
    <div className='bg-[#131E3C] flex flex-row justify-center items-center py-[1.5rem] fixed w-full top-0 '>
      <img src={evalogo} className='mx-[2%] h-[2rem]' alt="" />
      <img src={kcilogo} className='mx-[2%] h-[2rem]' alt='' />
      <img src={meworxlogo} className='mx-[2%] h-[1.35rem]' alt='' />
    </div>
  )
}
