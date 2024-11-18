import React, { useState } from "react";
import Mew from "../assets/Mew.png";
import eva from "../assets/Eva.png";
import kci from "../assets/Kci.png";
import arrowdown from "../assets/arrow-circle-down.png";
import arrowup from "../assets/arrow-circle-down (1).png";
import close from "../assets/close-circle.png";
import Vector from "../assets/Vector (1).svg"
import PositionData from "../component/homePageComponent/PositionData";
import translations from "../pages/translations.json";

const HomePage = () => {
  const [openJobs, setOpenJobs] = useState({});
  const [language, setLanguage] = useState("en");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleJob = (index) => {
    setOpenJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    setShowDropdown(false);
  };

  const t = translations[language];
  const arr = t.positions;

  return (

    <div className="w-full h-[100%] px-[2rem] py-[1rem] mt-[80px] flex flex-col mb-[6rem]">


      <div className="flex flex-row justify-between">
        <div className="font-medium text-[1.75rem] tracking-[0.1em]">{t.jobTitle}</div>
        <div className="flex justify-end mb-4 relative text-[12px]">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 bg-white border border-[#131E3C] shadow-lg rounded-[26px] w-15 text-[#131E3C] flex items-center space-x-2"
          >
            <span>{language === "en" ? "EN" : "TH"}</span>
            <span><img className="pl-2" src={Vector} alt="" /></span>
          </button>

          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-9 bg-white  shadow-lg rounded-lg w-20 flex flex-col items-center justify-center text-[#131E3C]">
              <button
                onClick={() => handleChangeLanguage("en")}
                className="w-full px-4 py-2 rounded-t-lg text-center hover:bg-gray-100"
              >
                EN
              </button>
              <button
                onClick={() => handleChangeLanguage("th")}
                className="w-full px-4 py-2 rounded-b-lg text-center hover:bg-gray-100"
              >
                TH
              </button>
            </div>
          )}
        </div>

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
