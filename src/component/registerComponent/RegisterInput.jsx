import React, { useState } from "react";
import axios from 'axios'
export default function RegisterInput({
  name,
  typeOfInput = "text",
  amout,
  value,
  textArea,
  textAreaHight,
  textAreaWidth,
  isDropDown,
  positionDropDown,
  
}) {

  const [isOpenPositionDropDown, setIsOpenPositionDropDown] = useState(false);

  const inputs = [];

  const typeOfGender = [
    { title: "Male" },
    { title: "Female" },
    { title: "Other" },
  ];

  if (amout > 1) {
    for (let i = 0; i < amout; i++) {
      inputs.push(
        <div className="rounded-md bg-[#f3f3f5] h-[2rem] w-full flex items-center border-[1px] border-[#DFE0E5]">
          <input
            value={typeOfGender[i]?.title}
            key={i}
            name={name}
            type={typeOfInput}
              className="mx-[0.5rem]"
          />
          <label htmlFor="">{typeOfGender[i]?.title}</label>
        </div>
      );
    }
  }

  const po1 = document.getElementById('position1')

  return (
    <div className="flex flex-row gap-[0.5rem] justify-between">
      {amout > 1 ? (
        inputs
      ) : (
        <>
          {textArea ? (
            <textarea
            rows={4}
            className={`resize-none ${textAreaWidth} rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem]`}
              name={name} 
            ></textarea>
          ) : (
            <div className="w-full"> 
              {isDropDown ? (
                <div>
             {  isOpenPositionDropDown !== true  && <div
                    name={name}
                    onClick={() =>
                      setIsOpenPositionDropDown(!isOpenPositionDropDown)
                    }
                    className="cursor-pointer bg-[#f3f3f5] border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] rounded-md"
                  >
                    {" "}
                    {positionDropDown}
                  </div>}
                  {isOpenPositionDropDown && (
                    <div 
                   
                    name={name} className="flex flex-col ">
                      <div   
                         className="flex gap-2 py-[0.25rem]">
                        <input
                         onClick={()=>setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Accounting & Purchasing"}
                        />
                        <label className="text-[0.8rem]">Accounting & Purchasing</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                         onClick={()=>setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Application Developer"}
                        />
                        <label className="text-[0.8rem]">Application Developer</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                         onClick={()=>setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Administrator"}
                        />
                        <label className="text-[0.8rem]">Administrator</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                         onClick={()=>setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Graphics Designer"}
                        />
                        <label className="text-[0.8rem]">Graphics Designer</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                         onClick={()=>setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Human Resources"}
                        />
                        <label className="text-[0.8rem]">Human Resources</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input 
                         onClick={()=>setIsOpenPositionDropDown(false)}
                        type="radio" name={name} value={"IT Support"} />
                        <label className="text-[0.8rem]">IT Support</label>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <input  className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem]" type={typeOfInput} name={name} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
