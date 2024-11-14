import React from 'react'

export default function Pic24() {
  return (
    <div className="flex pt-3 gap-2 w-full justify-between">
    <div className="">
      <img
        className="h-[600px] w-[800px]  object-cover"
        src="images/pic24-1.jpg"
      />
    </div>
    <div>
      <img
        className="h-[600px] w-[800px]  object-cover"
        src="images/pic24-2.jpg"
      />
    </div>
  </div>
  )
}
