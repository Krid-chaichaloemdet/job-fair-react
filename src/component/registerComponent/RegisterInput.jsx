import React, { useEffect, useState } from "react";
import axios from "axios";
export default function RegisterInput({
  name,
  typeOfInput = "text",
  amout,
  value,
  // textArea,
  // textAreaHight,
  // textAreaWidth,
  isDropDown,
  positionDropDown,
  province,
  district,
  subDistrict,
  isAddress,
}) {
  const [isOpenPositionDropDown, setIsOpenPositionDropDown] = useState(false);

  const inputs = [];

  const typeOfGender = [
    { title: "Male" },
    { title: "Female" },
    { title: "Other" },
  ];

  if (amout > 1) {
    for (let i = 0; i < amout; i++) {
      inputs.push(
        <div className="rounded-md bg-[#f3f3f5] h-[2rem] w-full flex items-center border-[1px] border-[#DFE0E5]">
          <input
            value={typeOfGender[i]?.title}
            key={i}
            name={name}
            type={typeOfInput}
            className="mx-[0.5rem]"
          />
          <label htmlFor="">{typeOfGender[i]?.title}</label>
        </div>
      );
    }
  }
  // const addressArr = []
  // if(isAddress){
  //   for (let i = 0; i < addressAmout; i++){
  //     addressArr.push(
  //       <div>

  //       </div>
  //     )
  //   }
  // }

  const [isSearchProvince, setIsOpenSearchProvince] = useState(false);
  const [searchProvinceData, setSearchProvinceData] = useState([]);
  const [selectProvince, setSelectProvince] = useState("");

  const [isOpenSearchDistrict, setIsOpenSearchDistrict] = useState(false);
  const [searchDistrictData, setSearchDistrictData] = useState([]);
  const [selectDistrict, setSelectDistrict] = useState('')

  const [isOpenSearchSubDistrict, setIsOpenSearchSubDistrict] = useState(false)
  const [searchSubDistrictData, setSearchSubDistrictData] = useState([])
  const [selectSubDistrict, setSelectSubDistrict] = useState('')
  const handleSearchProvince = async (e) => {
    try {
      if (e.target.value !== "") {
        setSelectDistrict('')
        setSelectSubDistrict('')
        setIsOpenSearchProvince(true);
      }


      const response = await axios.get(
        `http://localhost:8000/user/searchProvince?q=${e.target.value}`
      ).then((res)=>  setSearchProvinceData(res.data))

    } catch (error) {
      console.error("Error fetching province data:", error);
    }
  };
  const handleSearchDistrict = async (e) => {
    try {
      if(e.target.value !== ''){
        setSelectSubDistrict('')
        // setIsOpenSearchDistrict(true)
      }
      if(!selectProvince){
        return
      }
      const resposne = await axios
        .get(
          `http://localhost:8000/user/searchDistrict?q=${selectProvince.province_code}`
        )
        .then((res) => setSearchDistrictData(res.data)).finally(()=>setIsOpenSearchDistrict(true))
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchSubDistrict = async () =>{
    try {
      if(!selectDistrict){
        return
      }
        await axios.get(`http://localhost:8000/user/searchSubDistrict?q=${selectDistrict.district_code}`)
        .then((res)=>setSearchSubDistrictData(res.data)).finally(()=>setIsOpenSearchSubDistrict(true))
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {e
  //   axios
  //     .get("http://localhost:8000/user/searchProvince")
  //     .then((res) => setSearchProvinceData(res.data));
  // }, [isSearchProvince]);

  return (
    <div className="flex flex-row gap-[0.5rem] justify-between">
      {amout > 1 ? (
        inputs
      ) : (
        <>
          {isAddress ? (
            // <textarea
            // rows={4}
            // className={`resize-none ${textAreaWidth} rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem]`}
            //   name={name}
            // ></textarea>
            <div className="flex flex-col text-[14px] gap-0.5">
              <label htmlFor="">Province</label>
              <input
                onClick={() => setSelectProvince(null)}
                value={selectProvince && selectProvince.province_name_th}
                onChange={handleSearchProvince}
                className="bg-[#f3f3f5] border-[1px] border-[#DFE0E5]"
                type="text"
              />
              {isSearchProvince && (
                <div className="h-[150px] overflow-auto ">
                  {searchProvinceData?.map((data, i) => {
                    return (
                      <div
                        onClick={() => {
                          setIsOpenSearchProvince(false);
                          setSelectProvince(data);
                        }}
                        className="bg-gray-200 hover:bg-gray-50 cursor-pointer "
                        key={i}
                      >
                        {" "}
                        {data.province_name_en ? data.province_name_th : data.province_name_th}{" "}
                      </div>
                    );
                  })}
                </div>
              )}
              <label htmlFor="">District</label>
              <input
                // onChange={handleSearchDistrict}
                value={selectDistrict && selectDistrict.district_name_th}
                onClick={handleSearchDistrict}
                className={`bg-[#f3f3f5] border-[1px] border-[#DFE0E5]`}
                type="text"
              />
              {isOpenSearchDistrict && (
                <div className="h-[150px] overflow-auto ">
                  {searchDistrictData?.map((data, i) => {
                                        console.log(data);
                    return <div
                    onClick={()=>{
                      
                      setIsOpenSearchDistrict(false)
                      setSelectDistrict(data)
                    }}
                     className="bg-gray-200 hover:bg-gray-50 cursor-pointer "
                    key={i}>{data.district_name_th}</div>;
                  })}
                </div>
              )}
              <label htmlFor="">Sub District</label>
              <input
                value={selectSubDistrict && selectSubDistrict.sub_district_name_th}
              onClick={handleSearchSubDistrict}
                className="bg-[#f3f3f5] border-[1px] border-[#DFE0E5]"
                type="text"
              />
           {  isOpenSearchSubDistrict &&   <div className="h-[150px] overflow-auto ">
                  {searchSubDistrictData?.map((data, i) => {
                                        console.log(data);
                    return <div
                    onClick={()=>{
                      setIsOpenSearchSubDistrict(false)
                      setSelectSubDistrict(data)
                    }}
                     className="bg-gray-200 hover:bg-gray-50 cursor-pointer "
                    key={i}>{data. sub_district_name_th}</div>;
                  })}
                </div>}
            </div>
          ) : (
            <div className="w-full">
              {isDropDown ? (
                <div>
                  {isOpenPositionDropDown !== true && (
                    <div
                      name={name}
                      onClick={() =>
                        setIsOpenPositionDropDown(!isOpenPositionDropDown)
                      }
                      className="cursor-pointer bg-[#f3f3f5] border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] rounded-md"
                    >
                      {" "}
                      {positionDropDown}
                    </div>
                  )}
                  {isOpenPositionDropDown && (
                    <div name={name} className="flex flex-col ">
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                          onClick={() => setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Accounting & Purchasing"}
                        />
                        <label className="text-[0.8rem]">
                          Accounting & Purchasing
                        </label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                          onClick={() => setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Application Developer"}
                        />
                        <label className="text-[0.8rem]">
                          Application Developer
                        </label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                          onClick={() => setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Administrator"}
                        />
                        <label className="text-[0.8rem]">Administrator</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                          onClick={() => setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Graphics Designer"}
                        />
                        <label className="text-[0.8rem]">
                          Graphics Designer
                        </label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                          onClick={() => setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"Human Resources"}
                        />
                        <label className="text-[0.8rem]">Human Resources</label>
                      </div>
                      <div className="flex gap-2 py-[0.25rem]">
                        <input
                          onClick={() => setIsOpenPositionDropDown(false)}
                          type="radio"
                          name={name}
                          value={"IT Support"}
                        />
                        <label className="text-[0.8rem]">IT Support</label>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <input
                  className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem]"
                  type={typeOfInput}
                  name={name}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
