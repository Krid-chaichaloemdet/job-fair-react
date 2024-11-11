import React from "react";

export default function RegisterInput({
  name,
  typeOfInput = "text",
  amout,
  radio1,
  radio2,
  radio3,
  value
}) {
  const inputs = [];

  if (amout > 1) {
    for (let i = 0; i < amout; i++) {
      inputs.push(
        <input value={`radio${i + 1}`} key={i} name={name} type={typeOfInput} />
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
          <input type="text" name={name}/>
        </>
      )}
    </div>
  );
}
