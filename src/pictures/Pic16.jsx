import React from 'react'

export default function Pic16() {
  return (
    <div className="flex pt-3 gap-2 w-full justify-between">
    <div className="">
      <img
        className="h-[600px] w-[800px]  object-cover"
        src="images/pic16-1.jpg"
      />
    </div>
    <div>
      <img
        className="h-[600px] w-[800px]  object-cover"
        src="images/pic16-2.jpg"
      />
    </div>
  </div>
  )
}
