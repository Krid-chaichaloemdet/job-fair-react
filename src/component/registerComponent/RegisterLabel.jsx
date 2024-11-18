import React from 'react'

export default function RegisterLabel({label,  id, errorValidator}) {

  return (
    <div className='text-[0.8rem] flex gap-5'>
      <div>{label}</div>
      {
        id === errorValidator &&      <div className='text-red-500'>
        {"This field is required."}
      </div>
      }
 
    </div>
  )
}
