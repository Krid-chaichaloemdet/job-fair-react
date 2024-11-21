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
    <div className="w-full h-screen flex items-center justify-center flex-col gap-10 bg-[url('BG.jpg')] bg-cover bg-center">
      {popup && (
        <div className="w-full h-screen absolute bg-gray-900 bg-opacity-40 flex items-center justify-center  ">
          <div className="w-[80%] px-[2rem] py-[2rem] bg-white rounded-md relative">
            <div className="w-full flex justify-center mb-[2rem] text-[1.5rem]">Instruction</div>
            <div className="mb-[1.5rem]">
              <div className="mb-[0.25rem]"><span className="font-medium text-[1.25rem]">Part 1 :</span> Spot the Differences</div>
              <div className=" ">
              <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang === "EN"
                      ? "The Spot the Difference game includes a total of 30 images."
                      : "เกมจับผิดภาพประกอบไปด้วยภาพทั้งหมด 30 รูป"}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang == "EN"
                      ? `You have 1 minute to complete the test.`
                      : `คุณมีเวลา 1 นาทีในการทำแบบทดสอบให้เสร็จ`}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang === "EN"
                      ? `You can skip to any image at any time.`
                      : `คุณสามารถข้ามไปยังรูปภาพใด ๆ ได้ตามที่ต้องการ`}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang == "EN"
                      ? `If you make 10 incorrect guesses, the game will automatically change the image for you.`
                      : `หากคุณทายผิดครบ 10 ครั้ง เกมจะเปลี่ยนรูปภาพให้คุณโดยอัตโนมัติ`}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang == "EN"
                      ? `Each image contains only one spot that is different.`
                      : `แต่ละภาพมีจุดที่แตกต่างกันเพียงจุดเดียวเท่านั้น`}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-[1.5rem]">
            <div className="mb-[0.25rem]"><span className="font-medium text-[1.25rem]">Part 2 :</span> Multiple-Choice Quiz</div>
              <div className=" ">
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang === "EN"
                      ? "The quiz consists of 10 questions."
                      : "แบบทดสอบประกอบไปด้วยคำถามทั้งหมด 10 ข้อ"}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang == "EN"
                      ? `Choose the most accurate answer.`
                      : `จงเลือกคำตอบที่ถูกต้องที่สุด`}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang === "EN"
                      ? `You have 2 minutes to complete the test.`
                      : `คุณมีเวลา 2 นาทีในการทำแบบทดสอบให้เสร็จ`}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[1rem]">
                  <div className="w-[0.75rem] h-[0.75rem] bg-[#131E3C] rounded-full"></div>
                  <div className="text-[1rem] w-[94%]">
                    {lang == "EN"
                      ? `You can skip or go back to any question as needed.`
                      : `คุณสามารถข้ามหรือย้อนกลับไปยังคำถามใด ๆ ได้ตามที่ต้องการ`}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[50%] mt-[2.5rem] flex justify-center items-center  bottom-0">
              <button
                onClick={() => {
                  setIsStart(true)
                  setPopup(false)
                }}
                className="bg-[#131E3C]  w-full py-[0.5rem] rounded-full text-white flex items-center justify-center"
              >
                {lang == "EN" ? "START" : `ตกลง`}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div className="text-3xl flex flex-col gap-5 items-center  p-10">
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
              className="text-2xl w-full cursor-pointer text-white bg-[#131E3C] p-3 rounded-md flex justify-center"
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
      </div> */}

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
