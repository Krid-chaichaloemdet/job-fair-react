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
        <div className="flex gap-2">
          <input
            value={typeOfGender[i]?.title}
            key={i}
            name={name}
            type={typeOfInput}
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
