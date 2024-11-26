import React, { useEffect, useState } from "react";
import axios from "../config/axios";

import { PiTimerBold } from "react-icons/pi";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoPlaySkipForwardSharp } from "react-icons/io5";

export default function ResultPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [allCandidateData, setAllCandidateData] = useState([]);

  const [selectSingleCandidateTestData, setSelectSingleCandidateTestData] =
    useState("");

  const [displaySingUserData, setDisplaySingleUserData] = useState({});
  const [singleCandidateData, setSingleCandidateData] = useState([]);

  const [isOpenPreviewPicture, setIsOpenPreviewPicture] = useState(false);

  const [selectPicturePreview, setSelectPicturePreview] = useState("");

  const [timeCountData, setTimeCountData] = useState([]);

  const [allPictures, setAllpictures] = useState([]);
  const previewArrays = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];
  // Check if singgleCandidateData is defined and is an object
  if (singleCandidateData && typeof singleCandidateData === "object") {
    // Check if picTimes is defined and is a string
    if (
      singleCandidateData?.timeCounts &&
      typeof singleCandidateData?.timeCounts === "string"
    ) {
      singleCandidateData.timeCounts = singleCandidateData?.timeCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var timeCountsArray = JSON.parse(`[${singleCandidateData.timeCounts}]`);

      singleCandidateData.clickCounts = singleCandidateData?.clickCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var clickCountsArray = JSON.parse(`[${singleCandidateData.clickCounts}]`);

      singleCandidateData.scoreCounts = singleCandidateData?.scoreCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var scoreCountsArray = JSON.parse(
        `[${singleCandidateData?.scoreCounts}]`
      );

      singleCandidateData.skipCounts = singleCandidateData?.skipCounts
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var skipCountsArray = JSON.parse(`[${singleCandidateData?.skipCounts}]`);

      singleCandidateData.testAllResult = singleCandidateData?.testAllResult
        .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
        .replace(/,,+/g, ",") // Remove any duplicate commas
        .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

      var countScoreTest2 = JSON.parse(
        `[${singleCandidateData?.testAllResult}]`
      );
    }
  }
  console.log(countScoreTest2);
  useEffect(() => {
    axios.get("/user/readAllCandidatedata").then((res) => {
      setAllCandidateData(res.data);
    });

    axios
      .get(
        `/user/readSingleCandidateTestData?userId=${selectSingleCandidateTestData}`
      )
      .then((res) => setSingleCandidateData(res.data));
    axios
      .get(
        `/user/readSingleCandidateUser?userId=${selectSingleCandidateTestData}`
      )
      .then((res) => setDisplaySingleUserData(res.data));
  }, [selectSingleCandidateTestData]);

  //   useEffect(()=>{

  //     axios.get(`/user/readSingleCandidateTestData?userId=${selectSingleCandidateTestData}`).then((res)=>setSingleCandidateData(res.data))
  //   },[selectSingleCandidateTestData])
  console.log(displaySingUserData?.profileImage);
  return (
    <div className="w-full h-[100%] px-[2rem] py-[1rem] mt-[80px] flex flex-col mb-[6rem]">
      <div className="mb-[1rem]">
        <div className="font-medium text-[1.75rem] tracking-[0.1em]">
          HR Department
        </div>
      </div>

      <div className="flex items-center flex-col rounded-md bg-white w-full h-full pb-[1.5rem] overflow-y-auto bg-opacity-80">
        <div className="flex items-center justify-evenly w-full h-[6rem] mb-[0.5rem] bg-[#131E3C]  text-white sticky top-0 ">
          <div className="w-[25%] flex justify-center">Name</div>
          <div className="w-[14%] flex justify-center text-center">
            Interesting Rate Before Test
          </div>
          <div className="w-[14%] flex justify-center text-center">
            Satisfaction Rate Before Test
          </div>
          <div className="w-[14%] flex justify-center text-center">
            Interesting Rate After Test
          </div>
          <div className="w-[14%] flex justify-center text-center">
            Satisfaction Rate After Test
          </div>
          <div className="w-[27%] flex justify-center text-center">
            Date Time
          </div>
        </div>

        {allCandidateData?.map((data, i) => {
          const date = new Date(+data.createdAt);
          const time = new Date(+data.createdAt);
          const formatterDate = new Intl.DateTimeFormat("en-TH", {
            timeZone: "Asia/Bangkok",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const formatterTime = new Intl.DateTimeFormat("en-TH", {
            timeZone: "Asia/Bangkok",
            hour: "2-digit",
            minute: "2-digit",
          });
          const formattedDate = formatterDate.format(date);
          const formattedTime = formatterTime.format(time);
          const thailandTimeWithMillis = `${
            formattedDate + " " + formattedTime
          }`;

          return (
            <div
              onClick={() => {
                console.log(data.userId);
                setSelectSingleCandidateTestData(data.userId);
                setIsOpen(!isOpen);
              }}
              key={i}
              className="flex items-center justify-evenly w-full h-[4rem] mb-[0.5rem]  hover:bg-gray-300 cursor-pointer bg-gray-100"
            >
              <div className="w-[25%] flex justify-start indent-[1rem] ">
                <p className="truncate">
                  {data.firstName} {data.lastName}
                </p>
              </div>
              <div className="w-[14%] flex justify-center">
                <p>{data.interestingRate}</p>
              </div>
              <div className="w-[14%] flex justify-center">
                <p>{data.likedRate}</p>
              </div>
              <div className="w-[14%] flex justify-center">
                <p>{data.survey1}</p>
              </div>
              <div className="w-[14%] flex justify-center">
                <p>{data.survey2}</p>
              </div>
              <div className="w-[27%] flex justify-center">
                <p>{thailandTimeWithMillis}</p>
              </div>
            </div>
          );
        })}
      </div>

      {isOpen && (
        <div className="fixed right-[3rem] top-[13rem] flex items-start w-[60%]">
          <div className="bg-gray-200 w-[100%] h-[60vh] flex justify-start items-center flex-col rounded-md pb-[1rem]">
            <div className="flex w-full h-full flex-col">
              <div className="w-full flex flex-row justify-between items-center px-[0.5rem] py-[0.5rem] bg-[#131E3C]  rounded-t-md">
                <p className="font-bold text-[1.5rem] text-white"></p>

                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white text-[40px]"
                >
                  X
                </div>
              </div>

              <div className="h-full w-full overflow-y-scroll flex flex-col items-center justify-start">
                <div className="flex w-full flex-col justify-center  gap-2 p-[1rem] relative border-[#b2b5be] border-b-[1px]">
                  <div className="font-medium text-[1.75rem] tracking-[0.1em] ">
                    Profile
                  <div className="w-full bg-red- flex items-center justify-center">
                    <img
                      className="w-[60%]  h-[50%] items-center rounded-md"
                      src={`uploads/${displaySingUserData.profileImage}`}
                      alt=""
                    />
                  </div>
                  </div>
                  <div>
                    <div>First Name : {displaySingUserData?.firstName}</div>
                    <div>Last Name : {displaySingUserData?.lastName}</div>
                  </div>
                  <div>Dender : {displaySingUserData?.gender}</div>
                  <div>
                    <p>
                      Date Of Birth yyyy/mm/dd :{" "}
                      {displaySingUserData?.dateOfBirth}
                    </p>
                  </div>
                  <div>
                    <p>Phone Number : {displaySingUserData?.phoneNumber}</p>
                  </div>
                  <div>
                    <p>E-mail : {displaySingUserData?.email}</p>
                  </div>
                  <div>
                    <p>Address : {displaySingUserData?.address}</p>
                  </div>
                  <div>
                    <p>Highest education : {displaySingUserData?.education}</p>
                  </div>
                  <div>
                    <p>University : {displaySingUserData?.university}</p>
                  </div>
                  <div>
                    <p>Faculty : {displaySingUserData?.faculty}</p>
                  </div>
                  <div>
                    <p>Department : {displaySingUserData?.department}</p>
                  </div>
                  <div>
                    <p>
                      Interested Position :{" "}
                      {displaySingUserData?.interestedPosition}
                    </p>
                  </div>
                </div>

                <div className="w-full p-[1rem] relative border-[#b2b5be] border-b-[1px]">
                  <div className="font-medium text-[1.75rem] tracking-[0.1em] mb-[0.25rem]">
                    Part 1 :{" "}
                    <span className="text-[1rem]">Spot the Differences</span>
                  </div>
                  <div className="flex w-full flex-wrap justify-center  gap-2 relative">
                    {previewArrays.map((data, i) => {
                      return (
                        <div
                          key={data.id}
                          className={`w-[20%] h-[20%] px-1 rounded-md text-white  ${
                            scoreCountsArray && scoreCountsArray[0][i] > 0
                              ? "bg-green-500"
                              : "bg-gray-500"
                          } flex flex-col items-center gap-1`}
                        >
                          <div>Picture {data.id}</div>
                          <img
                            className={`w-full h-[50px] cursor-pointer rounded-md `}
                            onClick={() =>
                              setIsOpenPreviewPicture(!isOpenPreviewPicture)
                            }
                            src={`images/pic${data.id}-1.jpg`}
                            alt=""
                          />
                          <div className=" justify-around  text-[100%] flex ">
                            <div className="flex gap-1 items-center ">
                              <FaMousePointer />
                              <div>
                                {clickCountsArray && clickCountsArray[0][i]}
                              </div>
                            </div>
                            <div className="flex gap-1  items-center ">
                              <PiTimerBold />
                              <div>
                                {" "}
                                {timeCountsArray && timeCountsArray[0][i]}
                              </div>
                            </div>
                            {/* <div className="flex gap-1  items-center ">
                                            <MdCheckCircleOutline />
                                            <div>{scoreCountsArray && scoreCountsArray[0][i]}</div>
                                            </div> */}
                            <div className="flex gap-1  items-center ">
                              <IoPlaySkipForwardSharp />
                              <div>
                                {skipCountsArray && skipCountsArray[0][i]}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className=" w-full p-[1rem]">
                  <div className="font-medium text-[1.75rem] tracking-[0.1em] mb-[0.25rem]">
                    Part 2 :{" "}
                    <span className="text-[1rem]">Multiple-choice Quiz</span>
                  </div>
                  <div className="flex flex-col">
                    {(() => {
                      let totalCorrectAnswers = 0;

                      return (
                        <>
                          {countScoreTest2 && (
                            <div className="flex ">
                              {countScoreTest2[0]?.map((data, i) => {
                                const isCorrectTest2 = [
                                  3,
                                  1,
                                  1,
                                  1,
                                  3,
                                  3,
                                  1,
                                  2,
                                  true,
                                  true,
                                ];
                                const isCorrect = isCorrectTest2[i] === data;

                                if (isCorrect) {
                                  totalCorrectAnswers++;
                                }

                                return (
                                  <div
                                    key={i}
                                    className="flex flex-row  border-[1px] border-black "
                                  >
                                    <div className="flex flex-col">
                                      <div className="px-1">Test : {i + 1}</div>

                                      <div
                                        className={`${
                                          isCorrect
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                        }  flex items-center justify-center`}
                                      >
                                        {data}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          <div className="mt-4 text-lg font-bold">
                            Total Correct Answers: {totalCorrectAnswers}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
