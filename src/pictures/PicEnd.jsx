/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function PicEnd() {
  const [isStart, setIsStart] = useState(false);
  return (
    <div className="bg-red-500   flex items-center justify-center">
      {/* <div className="flex gap-[100px]  justify-between">
        <div className="flex flex-col items-center gap-10 ">
          <div className="text-8xl text-white">END</div>
          <div className="flex gap-5">
            <div
              onClick={() => setIsStart(false)}
              className="text-5xl bg-green-500 p-5 rounded-md text-white cursor-pointer"
            >
              Try again
            </div>
            <div
              onClick={() => (window.location = "/")}
              className="text-5xl bg-black p-5 rounded-md text-white cursor-pointer"
            >
              Back
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
