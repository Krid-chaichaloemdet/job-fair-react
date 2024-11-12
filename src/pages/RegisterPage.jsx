import React, { useState } from "react";
import RegisterInput from "../component/registerComponent/RegisterInput";
import RegisterLabel from "../component/registerComponent/RegisterLabel";
import axios from "axios";
export default function RegisterPage() {
  const [input, setInput] = useState({
    name: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: '',
    education: '',
    faculty: '',
    department : '',
    dateCanStartWorking :'',

  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const arr = [
    {
      id: 1,
      title: "First Name - Last Name",
      name: "name",
    },
    {
      id: 2,
      title: "Address",
      name: "address",
      typeOfInput: '',
      textArea : true,
      textAreaHight: 'h-10',
      textAreaWidth: 'w-2/5'
    },
    { id: 3, title: "Date of birth MM/DD/YYYY", name: "dateOfBirth" , typeOfInput: 'date'},
    {
      id: 4,
      title: "Gender",
      name: "gender",
      typeOfInput: "radio",
      amout: 3,
      radio1: "male",
      radio2: "female",
      radio3: "other",
    },
    { id: 5, title: "Phone Number", name: "phoneNumber" },
    { id: 6, title: "E-mail", name: "email" },
    { id: 7, title: "Education", name: "education" },
    { id: 8, title: "Faculty", name: "faculty" },
    { id: 9, title: "Department", name: "department" },
    { id: 10, title: "Date you can start working MM/DD/YYYY", name: "dateCanStartWorking", typeOfInput: 'date' },
  ];
  console.log(input);

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
    className="w-screen h-screen bg-blue-500 p-10 flex flex-col gap-2">
      {arr.map((data, i) => {
        return (
          <div 
          className="flex flex-col gap-1 w-full "
          onChange={handleInput} key={data.id}>
            <RegisterLabel label={arr[i].title} />
            <RegisterInput
              name={arr[i].name}
              // value={arr[i].name}
              typeOfInput={arr[i].typeOfInput}
              amout={arr[i].amout}
              radio1={arr[i].radio1}
              radio2={arr[i].radio2}
              radio3={arr[i].radio3}
              textArea={arr[i].textArea}
              textAreaHight={arr[i].textAreaHight}
              textAreaWidth={arr[i].textAreaWidth}
            />
          </div>
        );
      })}
      <button className="bg-green-300">Submit</button>
    </form>
  );
}
