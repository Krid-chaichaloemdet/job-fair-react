import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ProfilePage() {

  const [user, setUser] =useState({})

  useEffect(() => {
    const response = axios.post(
      "http://localhost:8000/user/getMe",
   { id:   localStorage.getItem("userId")}
    ).then((res)=>setUser(res.data))
    console.log(response)
  }, []);
  return (
    <div className="w-full h-[100%] px-[2rem] py-[1rem] mt-[80px] flex flex-col mb-[6rem]">
      <div className="flex flex-row items-start justify-start">
        <h1 className="font-medium text-[1.75rem] tracking-[0.1em]">Your Profile</h1>
      </div>

 
      <div className="flex flex-col justify-center w-full py-2">
        <div className="py-2">
          <p className="pb-2">First Name</p>
          {/* <input
            className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
            type="text"
            name="firstName"
            fdprocessedid="6kf01q"
          ></input> */}
          <div
           className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
          >{user.firstName ? user.firstName : '--'}</div>
        </div>
        <div className="py-2">
          <p className="pb-2">Last Name</p>
          {/* <input
            className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 "
            type="text"
            name="lastName"
            fdprocessedid="6kf01q"
          ></input> */}
                    <div
           className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
          >{user.lastName ? user.lastName : '--'}</div>
        </div>
        <div className="py-2">
          <p className="pb-2">Phone Number</p>
          {/* <input
            className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 "
            type="number"
            name="phonenumber"
            fdprocessedid="6kf01q"
          ></input> */}
                      <div
           className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
          >{user.phoneNumber ? user.phoneNumber : '--'}</div>
        </div>
        <div className="py-2">
          <p className="pb-2">E-mail</p>
          {/* <input
            className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0 "
            type="email"
            name="email"
            fdprocessedid="6kf01q"
          ></input> */}
               <div
           className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
          >{user.email ? user.email : '--'}</div>
        </div>
      </div>


      {/* <button className="bg-[#131E3C] rounded-full py-[0.75rem] my-[0.5rem]" fdprocessedid="rfa0wpn"><div class="text-[#ffffff] tracking-[0.12em]">Edit Profile</div></button> */}

    </div>
  );
}
