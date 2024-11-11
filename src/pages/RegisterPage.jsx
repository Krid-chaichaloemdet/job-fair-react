import React, { useState } from "react";
import RegisterInput from "../component/registerComponent/RegisterInput";
import RegisterLabel from "../component/registerComponent/RegisterLabel";
export default function RegisterPage() {
  const [input, setInput] = useState({
    name: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const arr = [
    { id: 1, title: "First Name - Last Name", name: "name" , typeOfInput: "radio", },
    {
      id: 2,
      title: "Address",
      name: "address",
      typeOfInput: "radio",
      amout: 3,
      radio1: "one",
      radio2: "two",
      radio3: "tree",
    },
    { id: 3, title: "Date Of Birth", name: "dateOfBirth" },
    { id: 4, title: "Gender", name: "gender" },
    { id: 5, title: "Phone Number", name: "phoneNumber" },
    { id: 6, title: "Phone Number", name: "phoneNumber" },
  ];
  console.log(input);
  return (
    <div className="w-screen h-screen bg-red-300 p-10 flex flex-col gap-2">
      {arr.map((data, i) => {
        return (
          <div onChange={handleInput} key={data.id}>
            <RegisterLabel label={arr[i].title} />
            <RegisterInput
              name={arr[i].name}
              // value={arr[i].name}
              typeOfInput={arr[i].typeOfInput}
              amout={arr[i].amout}
              radio1={arr[i].radio1}
              radio2={arr[i].radio2}
              radio3={arr[i].radio3}
            />
          </div>
        );
      })}
    </div>
  );
}
