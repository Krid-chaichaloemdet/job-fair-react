import React, { useEffect, useState } from "react";
import axios from "../config/axios";
export default function ProfilePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const response = axios
      .post("/user/getMe", { id: localStorage.getItem("userId") })
      .then((res) => setUser(res.data));
    console.log(response);
  }, []);
  return (
    <div className="w-full h-[100%] px-[2rem] py-[1rem] mt-[80px] flex flex-col mb-[6rem]">
      <div className="flex flex-row items-start justify-start">
        <h1 className="font-medium text-[1.75rem] tracking-[0.1em]">
          Your Profile
        </h1>
      </div>

      <div className="flex flex-col justify-center w-full py-2">
        <div className="py-2">
          <p className="pb-2 text-[12px]">First Name / ชื่อจริง</p>

          <div className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 text-[12px]">
            {user?.firstName ? user.firstName : "--"}
          </div>
        </div>
        <div className="py-2">
          <p className="pb-2 text-[12px]">Last Name / นามสกุล</p>

          <div className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 text-[12px]">
            {user?.lastName ? user.lastName : "--"}
          </div>
        </div>
        <div className="py-2">
          <p className="pb-2 text-[12px]">Phone Number / เบอร์โทรศัพท์</p>

          <div className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 text-[12px]">
            {user?.phoneNumber ? user.phoneNumber : "--"}
          </div>
        </div>
        <div className="py-2">
          <p className="pb-2 text-[12px]">E-mail / อีเมล</p>

          <div className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 text-[12px]">
            {user?.email ? user.email : "--"}
          </div>
        </div>
      </div>
    </div>
  );
}
