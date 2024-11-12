import React from "react";
import axios from 'axios'
export default function RegisterInput({
  name,
  typeOfInput = "text",
  amout,
  value,
  textArea,
  textAreaHight,
  textAreaWidth,
}) {
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
            <input className="rounded-md" type={typeOfInput} name={name} />
          )}
        </>
      )}
    </div>
  );
}
