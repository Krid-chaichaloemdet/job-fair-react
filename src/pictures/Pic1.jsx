import React, { useState } from "react";

export default function Pic1() {
  return (
    <div className="flex gap-2 w-full justify-between">
      <div className="">
        <img
          className="h-[600px] w-[800px]  object-scale-down"
          src="images/pic1-1.jpg"
          alt="Description of pic1-1"
        />
      </div>
      <div>
        <img
          className="h-[600px] w-[800px]  object-scale-down"
          src="images/pic1-2.jpg"
          alt="Description of pic1-2"
        />
      </div>
    </div>
  );
}
