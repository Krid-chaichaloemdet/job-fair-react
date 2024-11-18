import React, { useState } from "react"; 
import Mew from "../assets/Mew.png";
import eva from "../assets/Eva.png";
import kci from "../assets/Kci.png";
import arrowdown from "../assets/arrow-circle-down.png";
import arrowup from "../assets/arrow-circle-down (1).png";
import close from "../assets/close-circle.png";
import PositionData from "../component/homePageComponent/PositionData";
import translations from "../pages/translations.json";

const HomePage = () => {
  const [openJobs, setOpenJobs] = useState({});
  const [language, setLanguage] = useState("en");

  const toggleJob = (index) => {
    setOpenJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];
  const arr = t.positions; 

  return (
    <div className="w-full h-[100%] px-[2rem] py-[1rem] flex flex-col mb-[6rem]">
      {/* ปุ่มเปลี่ยนภาษา */}
      <div className="flex justify-end mb-4">
        <button onClick={() => handleChangeLanguage("en")}>English</button>
        <button onClick={() => handleChangeLanguage("th")}>ภาษาไทย</button>
      </div>

      <div className="flex flex-row justify-start">
        <div className="font-medium text-[1.75rem] tracking-[0.1em]">{t.jobTitle}</div>
      </div>

      {arr.map((data, i) => (
        <div key={i}>
          <div className="flex justify-between w-full items-center border-b-2 py-[1.25rem]">
            <div className="text-[0.7rem] tracking-[0.1em]">{data.positionName}</div>
            <img
              className="w-[1.25rem] h-[1.25rem] cursor-pointer"
              src={openJobs[i] ? arrowup : arrowdown}
              alt=""
              onClick={() => toggleJob(i)}
            />
          </div>
          {openJobs[i] && (
            <PositionData
              onClose={() => toggleJob(i)}
              positionName={data.positionName}
              jobDes={data.jobDes}
              requirement={data.requirement}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
