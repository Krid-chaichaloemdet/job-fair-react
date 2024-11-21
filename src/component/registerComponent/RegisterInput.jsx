import React, { useEffect, useState } from "react";
import axios from "axios";


export default function RegisterInput({
  name,
  typeOfInput = "text",
  amout,
  isDropDown,
  positionDropDown,
  isAddress,
  setInput,
  input,
  keyProp,
}) {
  const [isOpenPositionDropDown, setIsOpenPositionDropDown] = useState(false);

  const inputs = [];

  const typeOfGender = [
    { title: "Male / ชาย" },
    { title: "Female / หญิง" },
    { title: "Other" },
  ];

  const testHaned = () => {};
  if (keyProp == 5) {
    for (let i = 0; i < amout; i++) {
      inputs.push(
        <div className="rounded-md text-xs bg-[#f3f3f5] h-[2rem] w-full flex items-center border-[1px] border-[#DFE0E5]">
          <input
            value={typeOfGender[i]?.title}
            key={i}
            name={name}
            type={typeOfInput}
            className="mx-[0.5rem]"
          />
          <div>
            <label htmlFor="">{typeOfGender[i]?.title}</label>
          </div>
        </div>
      );
    }
  }

  const howInterested = [
    "5. สนใจมากที่สุด / Very interested",
    "4. สนใจมาก / Interested",
    "3. สนใจปานกลาง / Netral",
    "2. ไม่ค่อยสนใจ / Slightly interested",
    "1. ไม่สนใจเลย / Not interested at all",
  ];
  if (keyProp == 13) {
    for (let i = 0; i < amout; i++) {
      inputs.push(
        <div className="rounded-md text-xs bg-[#f3f3f5] h-[2rem] w-full flex items-center border-[1px] border-[#DFE0E5]">
          <input
            value={howInterested[i]}
            key={i}
            name={name}
            type={typeOfInput}
            className="mx-[0.5rem]"
          />
          <div>
            <label htmlFor="">{howInterested[i]}</label>
          </div>
        </div>
      );
    }
  }

  const [isSearchProvince, setIsOpenSearchProvince] = useState(false);
  const [searchProvinceData, setSearchProvinceData] = useState([]);
  const [selectProvince, setSelectProvince] = useState("");

  const [isOpenSearchDistrict, setIsOpenSearchDistrict] = useState(false);
  const [searchDistrictData, setSearchDistrictData] = useState([]);
  const [selectDistrict, setSelectDistrict] = useState("");

  const [isOpenSearchSubDistrict, setIsOpenSearchSubDistrict] = useState(false);
  const [searchSubDistrictData, setSearchSubDistrictData] = useState([]);
  const [selectSubDistrict, setSelectSubDistrict] = useState("");
  const handleSearchProvince = async (e) => {
    try {
      if (e.target.value !== "") {
        setSelectDistrict("");
        setSelectSubDistrict("");
        setIsOpenSearchProvince(true);
      }

      await axios
        .get(`http://localhost:8000/user/searchProvince?q=${e.target.value}`)
        .then((res) => setSearchProvinceData(res.data));
    } catch (error) {
      console.error("Error fetching province data:", error);
    }
  };
  const handleSearchDistrict = async (e) => {
    try {
      if (e.target.value !== "") {
        setSelectSubDistrict("");
      }
      if (!selectProvince) {
        return;
      }
      await axios
        .get(
          `http://localhost:8000/user/searchDistrict?q=${selectProvince.province_code}`
        )
        .then((res) => setSearchDistrictData(res.data))
        .finally(() => setIsOpenSearchDistrict(true));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchSubDistrict = async () => {
    try {
      if (!selectDistrict) {
        return;
      }
      await axios
        .get(
          `http://localhost:8000/user/searchSubDistrict?q=${selectDistrict.district_code}`
        )
        .then((res) => setSearchSubDistrictData(res.data))
        .finally(() => setIsOpenSearchSubDistrict(true));
    } catch (error) {
      console.log(error);
    }
  };

  const [isSearchUniversity, setIsSearchUniversity] = useState(false);
  const [universityData, setUniversityData] = useState([]);
  const [selectUniversity, setSelectUniversity] = useState({
    uni: "",
  });
  const handleSearchUniversity = async (e) => {
    if (e.target.value) {
      setIsSearchUniversity(true);
      await axios
        .get(`http://localhost:8000/user/searchUniversity?q=${e.target.value}`)
        .then((res) => setUniversityData(res.data));
    }
  };

  const [isSearchEducation, setIsSearchEducation] = useState(false);
  const [educationData, setEducationData] = useState([]);
  const [selectEducation, setSelectEducation] = useState("");

  const handleSearchEducation = async () => {
    await axios
      .get(`http://localhost:8000/user/searchEducation`)
      .then((res) => setEducationData(res.data))
      .finally(() => setIsSearchEducation(true));
  };

  return (
    <div key={keyProp} className="flex flex-row gap-[0.5rem] justify-between">
      {amout ? (
        <div className={`${keyProp == 5 ? "flex w-[100%]" : "w-[100%]"} `}>
          {inputs}
        </div>
      ) : (
        <>
          {isAddress ? (
            <div className="flex flex-col text-[14px] gap-0.5">
              <label className="text-xs" htmlFor="">
                Province / จังหวัด
              </label>
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
                          setInput({
                            ...input,
                            address: "จ." + data.province_name_th,
                          });
                        }}
                        className="bg-gray-200 hover:bg-gray-50 cursor-pointer "
                        key={i}
                      >
                        {" "}
                        {data.province_name_en
                          ? data.province_name_th
                          : data.province_name_th}{" "}
                      </div>
                    );
                  })}
                </div>
              )}
              <label className="text-xs" htmlFor="">
                District / อำเภอ
              </label>
              <input
                onChange={testHaned}
                value={selectDistrict && selectDistrict.district_name_th}
                onClick={handleSearchDistrict}
                className={`bg-[#f3f3f5] border-[1px] border-[#DFE0E5]`}
                type="text"
              />
              {isOpenSearchDistrict && (
                <div className="h-[150px] overflow-auto ">
                  {searchDistrictData?.map((data, i) => {
                    return (
                      <div
                        onClick={() => {
                          setIsOpenSearchDistrict(false);
                          setSelectDistrict(data);
                          setInput({
                            ...input,
                            address:
                              input.address + " อ." + data.district_name_th,
                          });
                        }}
                        className="bg-gray-200 hover:bg-gray-50 cursor-pointer"
                        key={i}
                      >
                        {data.district_name_th}
                      </div>
                    );
                  })}
                </div>
              )}
              <label className="text-xs" htmlFor="">
                Sub District / ตำบล
              </label>
              <input
                value={
                  selectSubDistrict && selectSubDistrict.sub_district_name_th
                }
                onClick={handleSearchSubDistrict}
                className="bg-[#f3f3f5] border-[1px] border-[#DFE0E5]"
                type="text"
              />
              {isOpenSearchSubDistrict && (
                <div className="h-[150px] overflow-auto ">
                  {searchSubDistrictData?.map((data, i) => {
                    return (
                      <div
                        onClick={() => {
                          setIsOpenSearchSubDistrict(false);
                          setSelectSubDistrict(data);
                          setInput({
                            ...input,
                            address:
                              input.address + " ต." + data.sub_district_name_th,
                          });
                        }}
                        className="bg-gray-200 hover:bg-gray-50 cursor-pointer "
                        key={i}
                      >
                        {data.sub_district_name_th}
                      </div>
                    );
                  })}
                </div>
              )}
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
                <div>
                  {name == "university" ? (
                    <input
                      onChange={handleSearchUniversity}
                      onClick={() => setSelectUniversity(null)}
                      className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
                      type={typeOfInput}
                      name={name}
                      value={selectUniversity?.uni}
                    />
                  ) : (
                    <>
                      {name == "education" ? (
                        <input
                          onClick={() => {
                            handleSearchEducation();
                            setSelectEducation(null);
                          }}
                          className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
                          type={typeOfInput}
                          name={name}
                          value={selectEducation}
                        />
                      ) : (
                        <input
                          className="rounded-md bg-[#f3f3f5] w-full border-[1px] border-[#DFE0E5] py-[0.25rem] px-[0.25rem] z-0"
                          type={typeOfInput}
                          name={name}
                        />
                      )}
                    </>
                  )}

                  {name == "education" && isSearchEducation && (
                    <div className=" h-auto overflow-auto ">
                      {educationData.map((data, i) => {
                        return (
                          <div
                            onClick={() => {
                              setInput({
                                ...input,
                                education: data.education_th,
                              });
                              setSelectEducation(data.education_th);

                              setIsSearchEducation(false);
                            }}
                            className="hover:bg-gray-300 cursor-pointer"
                            key={i}
                          >
                            {data.education_th}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {name == "university" && isSearchUniversity && (
                    <div className=" h-40 overflow-auto">
                      {universityData.map((data, i) => {
                        return (
                          <div
                            onClick={() => {
                              setInput({
                                ...input,
                                university:
                                  `[${data.enCode}] - ` + data.university,
                              });
                              setSelectUniversity({
                                ...selectUniversity,
                                uni: `[${data.enCode}] - ` + data.university,
                              });
                              setIsSearchUniversity(false);
                            }}
                            className="z-10 hover:bg-gray-200 cursor-pointer"
                            key={i}
                          >
                            {" "}
                            {`[${data.enCode}] - ` + data.university}{" "}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
