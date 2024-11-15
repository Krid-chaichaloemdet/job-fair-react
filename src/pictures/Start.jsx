/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

export default function Start({ setIsStart }) {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState(false);
  const [popup, setPopup] = useState(true);

  const [lang, setLang] = useState("EN");
  const [isOpenLang, setIsOpenLand] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("LANG")) {
      setLang(localStorage.getItem("LANG"));
    }
  }, []);

  const onChange = (e) => {
    setName((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }));
  };
  console.log(name);
  const startGame = (e) => {
    if (!name.firstName) {
      setError(true);
      return;
    }
    if (!name.lastName) {
      setError(true);
      return;
    }

    setIsStart(true);
  };
  return (
    <div className="  w-screen h-screen flex items-center justify-center flex-col gap-10 bg-[url('BG.jpg')] bg-cover bg-center">
      {popup && (
        <div className="w-screen h-screen absolute bg-gray-900 bg-opacity-40 flex items-center justify-center text-[1.5rem]  ">
          <div className="w-auto pb-28 bg-white rounded-md relative">
            <div className=" p-10">
              <div className=" ">
                <div className="flex items-center gap-5 ">
                  <div className="w-5 h-5 bg-[#131E3C]  rounded-full"></div>
                  <div>
                    {lang === "EN"
                      ? "The test consists of 30 images. It's a spot-the-difference game."
                      : "การทดสอบประกอบด้วยภาพ 30 ภาพ เป็นเกมจับผิดภาพค่ะ"}
                  </div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="w-5 h-5 bg-[#131E3C]  rounded-full"></div>
                  <div>
                    {lang == "EN"
                      ? `You have 1 minutes to complete the test.`
                      : `คุณมีเวลา 10 นาทีในการทำแบบทดสอบค่ะ`}
                  </div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="w-5 h-5 bg-[#131E3C]  rounded-full"></div>
                  <div>
                    {lang === "EN"
                      ? `You can skip images.`
                      : `คุณสามารถข้ามภาพได้ค่ะ`}
                  </div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="w-5 h-5 bg-[#131E3C]  rounded-full"></div>
                  <div>
                    {lang == "EN"
                      ? `      When you make 10 incorrect clicks, the game will  automatically skip the image for you. `
                      : ` เมื่อคุณคลิกผิด 10 ครั้ง เกมจะข้ามภาพนั้นให้คุณโดยอัตโนมัติค่ะ`}
                  </div>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="w-5 h-5 bg-[#131E3C]  rounded-full"></div>
                  <div>
                    {lang == "EN"
                      ? `     Each picture will have only one point that is incorrect.`
                      : `เเต่ละภาพจะมีจุดผิดเเค่1จุดเท่านั้น`}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[50%] flex justify-center items-center absolute bottom-0">
              <button
                onClick={() =>{
                  setIsStart(true)
                  setPopup(false)}}
                className="bg-[#131E3C]  w-[20%] h-[30%] rounded-md text-white flex items-center justify-center"
              >
                {lang == "EN" ? "START" : `ตกลง`}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" w-full h-[10%] top-0 absolute flex justify-between">
        <div className="pl-5">
          <img className="w-[50%] h-[100%] " src="EVA.svg" alt="" />
        </div>
        <div className="pr-5 cursor-pointer  text-[2rem]">
          <div onClick={() => setIsOpenLand(true)}>{lang}</div>
          {isOpenLang && (
            <div>
              <div
                onClick={() => {
                  setIsOpenLand(false);
                  localStorage.setItem("LANG", "EN");
                  return setLang("EN");
                }}
              >
                EN
              </div>
              <div
                onClick={() => {
                  setIsOpenLand(false);
                  localStorage.setItem("LANG", "TH");
                  return setLang("TH");
                }}
              >
                TH
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-3xl flex flex-col gap-5 items-center  p-10">
        <div className=" w-[100%] text-5xl ">
          {lang == "EN" ? ` Find Differences Test` : `แบบทดสอบหาความแตกต่าง`}
        </div>
        <div>
          {" "}
          {lang == "EN"
            ? ` Please enter your name`
            : `กรุณากรอกชื่อของคุณ



`}
        </div>
        <div className="flex flex-col  gap-5">
          <input
            onChange={onChange}
            name="firstName"
            className={`rounded-md w-[400px] pl-5 h-[55px] ${
              error && !name.firstName
                ? "border-[5px] border-yellow-300 animate-pulse"
                : ""
            }`}
            placeholder={
              error ? "Please enter this" : lang == "EN" ? "First Name" : "ชื่อ"
            }
            type="text"
          />
          <input
            onChange={onChange}
            name="lastName"
            className={`rounded-md w-[400px] pl-5 h-[55px] ${
              error && !name.lastName
                ? "border-[5px] border-yellow-300 animate-pulse"
                : ""
            }`}
            placeholder={
              error
                ? "Please enter this"
                : lang == "EN"
                ? `Last Name`
                : `นามสกุล`
            }
            type="text"
          />
          <div className="flex gap-5 justify-between">
            <div
              onClick={startGame}
              className="text-2xl w-[40%] cursor-pointer text-white bg-[#131E3C] p-3 rounded-md flex justify-center"
            >
              {lang == "EN" ? " START" : `เริ่ม`}
            </div>
            <div
              onClick={() => (window.location = "/")}
              className="text-2xl w-[40%]  cursor-pointer bg-white p-3 rounded-md flex justify-center"
            >
              {lang == "EN" ? " BACK" : `กลับ`}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[10%] absolute bottom-0  flex justify-center items-center">
        <div className="cursor-pointer">
          <a
            href="https://www.facebook.com/MEWorx/"
            className="" // Add your desired styles here
            target="_blank" // Optional: opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
          >
            © 2024 Application | Created by MEWorx
          </a>
        </div>
      </div> */}
    </div>
  );
}
