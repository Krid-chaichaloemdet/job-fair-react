import React from "react";
import successIcon from "../../../public/icons/success_icon.svg";
import { useNavigate } from "react-router-dom";

export default function SuccessUpload() {
    const navigate = useNavigate()
  return (
    <div>
      {" "}
      <div className=" absolute z-50 top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white tracking-widest p-6">
        <div className="w-full h-[40%] bg-white p-4 rounded-lg shadow-2xl border-2 border-black-400 flex flex-col items-center justify-center text-[#131E3C]">
          <p className="text-[20px] font-bold  tracking-widest pb-4">
            Upload successfully!
          </p>
          <img src={successIcon} alt="success" className="w-[4rem] h-[100px]" />
        </div>
        <button
                //   onClick={() => setIsOpenUploadSuccess(false)}
                onClick={()=>navigate('/registerPage')}
          className="mt-4 px-6 py-2 w-full bg-[#131E3C] text-white rounded-3xl hover:bg-[#373e50] tracking-widest"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
