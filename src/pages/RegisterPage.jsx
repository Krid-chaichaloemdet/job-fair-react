import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RegisterInput from "../component/registerComponent/RegisterInput";
import RegisterLabel from "../component/registerComponent/RegisterLabel";
import axios from "axios";

import translationJson from "../data/translations.json";
export default function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("register")) {
      navigate("/registerError");
    }
    if (!localStorage.getItem("photo")) {
      navigate("/camera");
    }
  }, [navigate]); // Dependency array ensures this runs only on mount
  const [errorValidator, setErrorValidator] = useState("");

  const [input, setInput] = useState({
    targetUserId: localStorage.getItem("userId"),
    firstName: "",
    lastName: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    university: "",
    education: "",
    faculty: "",
    department: "",
    interestedPosition: localStorage.getItem("position")
      ? localStorage.getItem("position")
      : "Select a Position",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const arr = [
    {
      id: 1,
      title: "First Name / ชื่อจริง",
      name: "firstName",
    },
    {
      id: 2,
      title: "Last Name / นามสกุล",
      name: "lastName",
    },

    {
      id: 3,
      title: "Address / ที่อยู่",
      isAddress: true,
      addresData: [
        "Province / จังหวัด",
        "District / อำเภอ",
        "Sub District / ตำบล",
      ],
    },
    {
      id: 4,
      title: "Date Of Birth MM/DD/YYYY / วันเกิด ดด/วว/ปปปป",
      name: "dateOfBirth",
      typeOfInput: "date",
    },
    {
      id: 5,
      title: "Gender / เพศ",
      name: "gender",
      typeOfInput: "radio",
      amout: 2,
      radio1: "male / ชาย",
      radio2: "female / หญิง",
    },
    {
      id: 6,
      title: "Phone Number / เบอร์โทรศัพท์",
      name: "phoneNumber",
      err: "phoneNumber",
    },
    { id: 7, title: "E-mail / อีเมล", name: "email", err: "email" },
    { id: 8, title: "University / มหาวิทยาลัย", name: "university" },
    {
      id: 9,
      title: "Highest Education / การศึกษาสูงสุด",
      name: "education",
      err: "education",
    },
    {
      id: 10,
      title: "Faculty / คณะ",
      name: "faculty",
    },
    {
      id: 11,
      title: "Department / สาขา",
      name: "department",
      err: "department",
    },

    {
      id: 12,
      title: "Interested Position / ตำแหน่งที่สนใจ",
      name: "interestedPosition",
      isDropDown: true,
      positionDropDown: input.interestedPosition,
    },
    {
      id: 13,
      title:
        "How interested are you in applying for a job with our company? / คุณสนใจสมัครงานกับบริษัทเรามากแค่ไหน?",
      name: "interestingRate",
      rateChoice: [
        "5. สนใจมากที่สุด / Very interested",
        "4. สนใจมาก / Interested",
        "3. สนใจปานกลาง / Netral",
        "2. ไม่ค่อยสนใจ / Slightly interested",
        "1. ไม่สนใจเลย / Not interested at all",
      ],
      amout: 5,
      typeOfInput: "radio",
    },
    {
      id: 14,
      title:
        "How much do you like our company's recruitment process? / คุณชอบวิธีการรับสมัครงานของบริษัทเรามากน้อยเพียงใด?",
      name: "likedRate",
      rateChoice: [
        "5. ชอบมากที่สุด / Very much",
        "4. ชอบมาก / Quite a lot",
        "3. ชอบปานกลาง / Netral",
        "2. ไม่ค่อยชอบ /์ Not much",
        "1. ไม่ชอบเลย / Not at all",
      ],
      amout: 5,
      typeOfInput: "radio",
    },
  ];
  const requiredFields = [
    { field: "firstName", errorId: 1 },
    { field: "lastName", errorId: 2 },
    { field: "address", errorId: 3 },
    { field: "dateOfBirth", errorId: 4 },
    { field: "phoneNumber", errorId: 5 },
    { field: "gender", errorId: 6 },
    { field: "email", errorId: 7 },
    { field: "university", errorId: 8 },
    { field: "education", errorId: 9 },
    { field: "faculty", errorId: 10 },
    { field: "department", errorId: 11 },
    { field: "interestedPosition", errorId: 12 },
  ];

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      for (const { field, errorId } of requiredFields) {
        if (!input[field]) {
          setErrorValidator(errorId);
          window.scrollTo({
            top: errorId * 50,
            behavior: "smooth",
          });
          return;
        }
      }

      await axios
        .post("http://localhost:8000/user/register", input)
        .then(() => navigate("/registerSuccess"))
        .catch(() => navigate("/registerError"))
        .finally(() => {
          localStorage.setItem("register", true);
          localStorage.removeItem("position");
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(input);
  return (
    <form
      onSubmit={handleSubmitForm}
      className="w-full px-[2rem] py-[1rem] mt-[80px] flex flex-col gap-2 mb-[6rem] "
    >
      <div className="flex flex-row justify-start">
        <div className="font-medium text-[1.75rem] tracking-[0.1em]">
          Profile
        </div>
      </div>
      {arr.map((data, i) => {
        return (
          <div
            className="flex flex-col gap-1 w-full mb-[0.5rem]"
            onChange={handleInput}
            key={data.id}
          >
            <RegisterLabel
              id={data.id}
              errorValidator={errorValidator}
              label={arr[i].title}
            />
            <RegisterInput
              handleInput={handleInput}
              name={arr[i].name}
              typeOfInput={arr[i].typeOfInput}
              amout={arr[i].amout}
              radio1={arr[i].radio1}
              radio2={arr[i].radio2}
              radio3={arr[i].radio3}
              isDropDown={arr[i].isDropDown}
              positionDropDown={arr[i].positionDropDown}
              setInputPosition={setInput}
              province={arr[i].province}
              district={arr[i].district}
              subDistrict={arr[i].subDistrict}
              isAddress={arr[i].isAddress}
              addressAmout={arr[i].addressAmout}
              setInput={setInput}
              input={input}
              keyProp={arr[i].id}
              allPosition={translationJson.en.positions}
            />
          </div>
        );
      })}
      <button
        onClick={handleSubmitForm}
        className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem]"
      >
        <div className="text-[#ffffff] tracking-[0.12em]">Send Profile</div>
      </button>
    </form>
  );
}
