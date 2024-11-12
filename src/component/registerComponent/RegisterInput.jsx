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
    { title: "male" },
    { title: "female" },
    { title: "other" },
  ];

  if (amout > 1) {
    for (let i = 0; i < amout; i++) {
      inputs.push(
        <div className="rounded-md bg-[#f3f3f5] h-[2rem] w-full flex items-center border-[1px] mx-[0.25rem] border-[#DFE0E5]">
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

  // Return all inputs as a list of JSX elements
  return (
    <div>
      {amout > 1 ? (
        inputs
      ) : (
        <>
          {textArea ? (
            <textarea
            rows={4}
              className={`resize-none ${textAreaWidth} rounded-sm`}
              name={name} 
            ></textarea>
          ) : (
            <div>
              {isDropDown ? (
                <div>
             {  isOpenPositionDropDown !== true  && <div
                    name={name}
                    onClick={() =>
                      setIsOpenPositionDropDown(!isOpenPositionDropDown)
                    }
                    className="cursor-pointer"
                  >
                    {" "}
                    {positionDropDown}
                  </div>}
                  {isOpenPositionDropDown && (
                    <div 
                    onClick={()=>setIsOpenPositionDropDown(false)}
                    name={name} className="flex flex-col bg-red-500">
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name={name}
                          value={"Accounting & Purchasing"}
                        />
                        <label htmlFor="">Accounting & Purchasing</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name={name}
                          value={"Application Developer"}
                        />
                        <label>Application Developer</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name={name}
                          value={"Administrator"}
                        />
                        <label>Administrator</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name={name}
                          value={"Graphics Designer"}
                        />
                        <label>Graphics Designer</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="radio"
                          name={name}
                          value={"Human Resources"}
                        />
                        <label>Human Resources</label>
                      </div>
                      <div className="flex gap-2">
                        <input type="radio" name={name} value={"IT Support"} />
                        <label>IT Support</label>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <input className="rounded-md" type={typeOfInput} name={name} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
