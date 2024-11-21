import React, { useEffect, useState } from "react";
import axios from "axios";



import { PiTimerBold } from "react-icons/pi";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoPlaySkipForwardSharp } from "react-icons/io5";



export default function ResultPage() {
    const [isOpen, setIsOpen] = useState(false);

    const [candidateData, setCandidateData] = useState([]);
    const [selectCandidate, setSelectCandidate] = useState("");

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
        { id: 15 }
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

            var scoreCountsArray = JSON.parse(`[${singleCandidateData.scoreCounts}]`);

            singleCandidateData.skipCounts = singleCandidateData?.skipCounts
                .replace(/^\[\s*,|\s*,\]$/g, "") // Remove leading "[," and trailing ",]"
                .replace(/,,+/g, ",") // Remove any duplicate commas
                .replace(/^\s*|\s*$/g, ""); // Trim any leading/trailing whitespace

            var skipCountsArray = JSON.parse(`[${singleCandidateData.skipCounts}]`);
        } else {
            console.error("picTimes is not defined or is not a string");
        }
    }

    useEffect(() => {
        axios.get("http://192.168.0.169:4567/readAllCandidates").then((res) => {
            console.log(res.data);
            setCandidateData(res.data);
        });

        axios
            .get(`http://192.168.0.169:4567/readSingleCandidate?targetId=${selectCandidate}`)
            .then((res) => {
                setSingleCandidateData(res.data);
            });

        axios
            .get("http://192.168.0.169:4567/readAllPictures")
            .then((res) => setAllpictures(res.data));
    }, [selectCandidate]);

    // const ResultPage = () => {
    return (
        <div className="w-full h-[100%] px-[2rem] py-[1rem] mt-[80px] flex flex-col mb-[6rem]">

            <div className="mb-[1rem]">
                <div className="font-medium text-[1.75rem] tracking-[0.1em]">
                    Header
                </div>
            </div>

            <div className="flex items-center flex-col rounded-md bg-white w-full h-full pb-[1.5rem] overflow-y-auto bg-opacity-80">
                <div className="flex items-center justify-evenly w-full h-[3rem] mb-[0.5rem] bg-[#131E3C]  text-white sticky top-0 ">
                    <div className="w-[25%] flex justify-center">
                        Name
                    </div>
                    <div className="w-[14%] flex justify-center text-center">
                        P.1 Score
                    </div>
                    <div className="w-[14%] flex justify-center text-center">
                        P.2 Score
                    </div>
                    <div className="w-[14%] flex justify-center text-center">
                        Total Score
                    </div>
                    <div className="w-[27%] flex justify-center text-center">
                        Date Time
                    </div>
                </div>

                {candidateData.map((data, i) => {
                    return (
                        <div
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setSelectCandidate(data.id);
                            }}
                            key={data.id}
                            className="flex items-center justify-evenly w-full h-[4rem] mb-[0.5rem]  hover:bg-gray-300 cursor-pointer bg-gray-100"
                        >
                            <div className="w-[25%] flex justify-start indent-[1rem] ">
                                <p className="truncate">{data.firstName} {data.lastName}</p>
                            </div>
                            <div className="w-[14%] flex justify-center">
                                <p>10</p>
                            </div>
                            <div className="w-[14%] flex justify-center">
                                <p>10</p>
                            </div>
                            <div className="w-[14%] flex justify-center">
                                <p>20</p>
                            </div>
                            <div className="w-[27%] flex justify-center">
                                <p>20.11.2024 02.50 AM</p>
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
                                <svg
                                    onClick={() => setIsOpen(!isOpen)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="cursor-pointer w-[1.5rem] h-[1.5rem] text-white  "
                                >
                                    <path d="M6 18 18 6M6 6l12 12"></path></svg>
                            </div>

                            <div className="h-full w-full overflow-y-scroll flex flex-col items-center justify-start">
                                <div className="flex w-full flex-col justify-center  gap-2 p-[1rem] relative border-[#b2b5be] border-b-[1px]">
                                    <div className="font-medium text-[1.75rem] tracking-[0.1em] mb-[0.25rem]">
                                        Profile
                                    </div>
                                    <div>
                                        <p>name lastname</p>
                                    </div>
                                    <div>
                                        gender
                                    </div>
                                    <div>
                                        <p>date of birt</p>
                                    </div>
                                    <div>
                                        <p>phone number</p>
                                    </div>
                                    <div>
                                        <p>email</p>
                                    </div>
                                    <div>
                                        <p>Province + District + Sub District</p>
                                    </div>
                                    <div>
                                        <p>Highest education</p>
                                    </div>
                                    <div>
                                        <p>university</p>
                                    </div>
                                    <div>
                                        <p>faculty</p>
                                    </div>
                                    <div>
                                        <p>department</p>
                                    </div>
                                    <div>
                                        <p>interestedPosition</p>
                                    </div>
                                </div>


                                <div className="w-full p-[1rem] relative border-[#b2b5be] border-b-[1px]">
                                    <div className="font-medium text-[1.75rem] tracking-[0.1em] mb-[0.25rem]">
                                        Part 1 : <span className="text-[1rem]">Spot the Differences</span>
                                    </div>
                                    <div className="flex w-full flex-wrap justify-center  gap-2 relative">
                                        {previewArrays.map((data, i) => {
                                            return (
                                                <div
                                                    onClick={() => setSelectPicturePreview(data.id)}
                                                    key={data.id}
                                                    className={`w-[32%] p-3 rounded-md text-white  ${scoreCountsArray && scoreCountsArray[0][i] > 0
                                                        ? "bg-green-500"
                                                        : "bg-gray-500"
                                                        } flex flex-col items-center gap-1`}
                                                >
                                                    <div>Picture {data.id}</div>
                                                    <img
                                                        className={`w-full cursor-pointer rounded-md object-cover`}
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
                                                            <div> {timeCountsArray && timeCountsArray[0][i]}</div>
                                                        </div>
                                                        {/* <div className="flex gap-1  items-center ">
                                            <MdCheckCircleOutline />
                                            <div>{scoreCountsArray && scoreCountsArray[0][i]}</div>
                                            </div> */}
                                                        <div className="flex gap-1  items-center ">
                                                            <IoPlaySkipForwardSharp />
                                                            <div>{skipCountsArray && skipCountsArray[0][i]}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>


                                <div className=" w-full p-[1rem]">
                                    <div className="font-medium text-[1.75rem] tracking-[0.1em] mb-[0.25rem]">
                                        Part 2 : <span className="text-[1rem]">Multiple-choice Quiz</span>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="flex flex-col">
                                            <div>
                                                1.
                                            </div>
                                            <div>
                                                2.
                                            </div>
                                            <div>
                                                3.
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div>
                                                A
                                            </div>
                                            <div>
                                                B
                                            </div>
                                            <div>
                                                C
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}
// export default ResultPage;