import React, { useState } from "react";

import axios from "axios";

export default function TestingPage() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input)


  const handleSubmitForm =  async(e) =>{
    try {
      e.preventDefault()
      axios.post('http://localhost:8000/user/register', input )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form
    onSubmit={handleSubmitForm}
    className="w-screen h-screen bg-blue-600">
      <div className="w-full flex justify-center py-5 ">Challenge</div>
      <div className="grid grid-cols-2 gap-5 px-5">
        <div className="flex flex-col px-5 ">
          <label htmlFor="">Your first name</label>
          <input
            onChange={handleInput}
            name="firstName"
            className="rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col px-5 ">
          <label htmlFor="">Your last name</label>
          <input
            onChange={handleInput}
            name="lastName"
            className="rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col px-5 ">
          <label htmlFor="">Phone number</label>
          <input
            onChange={handleInput}
            name="phoneNumber"
            className="rounded-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col px-5 ">
          <label htmlFor="">E-mail</label>
          <input
            onChange={handleInput}
            name="email"
            className="rounded-sm"
            type="text"
          />
        </div>
      </div>
      <div className="flex justify-center py-5  w-full ">
        <button className="bg-blue-950 text-white px-16 py-2 rounded-3xl">
          {" "}
          Start Challenge
        </button>
      </div>
    </form>
  );
}
