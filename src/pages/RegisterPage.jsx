import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import RegisterInput from "../component/registerComponent/RegisterInput";
import RegisterLabel from "../component/registerComponent/RegisterLabel";
import axios from "axios";
import Camera from "./Camera";
export default function RegisterPage() {
  const navigate = useNavigate();

  const [isPhotoSuccess, setIsPhotoSuccess] =useState(true)
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    education: "",
    faculty: "",
    department: "",
    dateCanStartWorking: "",
    interestedPosition: localStorage.getItem("position")
      ? localStorage.getItem("position")
      : "click here",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const arr = [
    {
      id: 1,
      title: "First Name",
      name: "firstName",
    },
    {
      id: 2,
      title: "Last Name",
      name: "lastName",
    },
    // {
    //   id: 3,
    //   title: "Address",
    //   name: "address",
    //   typeOfInput: '',
    //   textArea : true,
    //   textAreaHight: 'h-10',
    //   textAreaWidth: 'w-2/5'
    // },
    {
      id: 3,
      title: "address",
      isAddress: true,
      addresData: ["Province", "District", "Sub District"],
      // province: 'Province',
      // name1: 'province',
      // district: 'District',
      // name2: 'district',
      // subDistrict: 'Sub District',
      // name3: 'subDistrict',
      // addressAmout: 3,
    },
    {
      id: 4,
      title: "Date of birth MM/DD/YYYY",
      name: "dateOfBirth",
      typeOfInput: "date",
    },
    {
      id: 5,
      title: "Gender",
      name: "gender",
      typeOfInput: "radio",
      amout: 2,
      radio1: "male",
      radio2: "female",
      radio3: "other",
    },
    { id: 6, title: "Phone Number", name: "phoneNumber" },
    { id: 7, title: "E-mail", name: "email" },
    { id: 8, title: "Education", name: "education" },
    { id: 9, title: "Faculty", name: "faculty" },
    { id: 10, title: "Department", name: "department" },
    {
      id: 11,
      title: "Date you can start working MM/DD/YYYY",
      name: "dateCanStartWorking",
      typeOfInput: "date",
    },
    {
      id: 12,
      title: "Interested position",
      name: "interestedPosition",
      isDropDown: true,
      positionDropDown: input.interestedPosition,
    },
  ];
  console.log(input);
  const handleSubmitForm = async (e) => {
    try {
      if (!input.firstName) {
        return;
      }
      e.preventDefault();
      await axios
        .post("http://localhost:8000/user/register", input)
        .then(() => navigate("/"))
        .finally(() => localStorage.clear());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form 
    onSubmit={handleSubmitForm}

    className="w-full px-[2rem] py-[1rem] flex flex-col gap-2 mb-[6rem]">
      <div className='flex flex-row justify-start'>
      <div className="font-medium text-[1.75rem] tracking-[0.1em]">Profile</div>
      </div>
      {arr.map((data, i) => {
        return (
          <div
            className="flex flex-col gap-1 w-full mb-[0.5rem]"
            onChange={handleInput}
            key={data.id}
          >
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
              province={arr[i].province}
              district={arr[i].district}
              subDistrict={arr[i].subDistrict}
              isAddress={arr[i].isAddress}
              addressAmout={arr[i].addressAmout}
            />
          </div>
        );
      })}
      <button
      onClick={handleSubmitForm}
      className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem]">
        <div className="text-[#ffffff] tracking-[0.12em]">Send Profile</div>
      </button>
   { localStorage.getItem('photo') !== 'true' &&  <Camera setIsPhotoSuccess={setIsPhotoSuccess}/>}
    </form>
  );
}
