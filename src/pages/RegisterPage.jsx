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
    interestedPosition : localStorage.getItem('position')  ? localStorage.getItem('position')  :  'click here'
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
    { id: 11, title: "Interested position", name: "interestedPosition", isDropDown: true  , positionDropDown: input.interestedPosition},
  ];

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
    className="w-screen px-[2rem] py-[1rem] flex flex-col gap-2">
      <div className="font-semibold text-[1.75rem] tracking-[0.1em]">Profile</div>
      {arr.map((data, i) => {
        return (
          <div 
          className="flex flex-col gap-1 w-full mb-[0.5rem]"
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
              isDropDown={arr[i].isDropDown}
              positionDropDown={arr[i].positionDropDown}
              setInputPosition={setInput}
            />
          </div>
        );
      })}
      <button className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem]">
        <div className="text-[#ffffff] tracking-[0.12em]">Send Profile</div>
      </button>
    </form>
  );
}
