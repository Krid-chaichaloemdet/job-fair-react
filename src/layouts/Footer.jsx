import { useState } from "react";
import { useNavigate } from "react-router-dom";

import jobsicon from "../../public/icons/jobsIcon.svg";
import profileicon from "../../public/icons/profileIcon.svg";
import languageicon from "../../public/icons/langIcon.svg";

export default function Footer() {

  const navigate = useNavigate();
  const [select, setSelect] = useState(1);



  const footerBar = [
    { id: 1, title: "Jobs", image: jobsicon, path: "/" },
    { id: 2, title: "Send Profile", image: profileicon, path: "/registerPage" },
    { id: 3, title: "language", image: languageicon, path: "/testingPage" },
  ];

  return (
    <div className="bottom-0 flex fixed bg-[#D9D9D9] w-full py-[1rem] px-[0.5rem]">
      {footerBar.map((data, i) => {
        return (
          <div
            onClick={() => {
              navigate(data.path);
              setSelect(data.id);
            }}
            key={i}
            className={`flex flex-col justify-start items-center w-full mx-[0.5rem] rounded-lg py-[0.5rem] duration-300 ease-in ${
              data.id == select ? "bg-[#b2b5be] " : "bg-[#D9D9D9]"
            } `}
          >
            <img className="my-[0.25rem]" src={data.image} alt="" />
            <div className="text-[0.8rem] text-center">{data.title}</div>
          </div>
        );
      })}
    </div>
  );
}
