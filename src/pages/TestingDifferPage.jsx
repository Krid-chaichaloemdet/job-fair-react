import { useState, useEffect } from "react";
import Pic1 from "../pictures/Pic1";
import Pic2 from "../pictures/Pic2";
import Pic3 from "../pictures/Pic3";
import Pic4 from "../pictures/Pic4";
import Pic5 from "../pictures/Pic5";
import PicEnd from "../pictures/PicEnd";
import Start from "../pictures/Start";
import Pic6 from "../pictures/Pic6";
import Pic7 from "../pictures/Pic7";
import Pic8 from "../pictures/Pic8";
import Pic9 from "../pictures/Pic9";
import Pic10 from "../pictures/Pic10";

import axios from "axios";
import Pic11 from "../pictures/Pic11";
import Pic12 from "../pictures/Pic12";
import Pic13 from "../pictures/Pic13";
import Pic14 from "../pictures/Pic14";
import Pic15 from "../pictures/Pic15";
import Pic16 from "../pictures/Pic16";
import Pic17 from "../pictures/Pic17";
import Pic18 from "../pictures/Pic18";
import Pic19 from "../pictures/Pic19";
import Pic20 from "../pictures/Pic20";
import Pic21 from "../pictures/Pic21";
import Pic22 from "../pictures/Pic22";
import Pic23 from "../pictures/Pic23";
import Pic24 from "../pictures/Pic24";
import Pic25 from "../pictures/Pic25";
import Pic26 from "../pictures/Pic26";
import Pic27 from "../pictures/Pic27";
import Pic28 from "../pictures/Pic28";
import Pic29 from "../pictures/Pic29";
import Pic30 from "../pictures/Pic30";

export default function TestingDiiferPage({
  setIsStartTesting,
  setIsStartDiffer,
  input,
  setInput,
}) {
  const [count, setCount] = useState(3);

  const [countEachPhoto, setCountEachPhoto] = useState(0);
  const [pic, setPic] = useState(0);

  const [isStart, setIsStart] = useState(false);

  const [topScorer, setTopScorer] = useState([]);
  //   const [input, setInput] = useState({
  //     firstName: "",
  //     lastName: "",
  //     totalClick: 0,
  //     totalSkip: 0,
  //     score: 0,
  //     time: 0,
  //     pic1: 0,
  //     pic2: 0,
  //     pic3: 0,
  //     pic4: 0,
  //     pic5: 0,
  //     pic6: 0,
  //     pic7: 0,
  //     pic8: 0,
  //     pic9: 0,
  //     pic10: 0,

  //     pic11: 0,
  //     pic12: 0,
  //     pic13: 0,
  //     pic14: 0,
  //     pic15: 0,
  //     pic16: 0,
  //     pic17: 0,
  //     pic18: 0,
  //     pic19: 0,
  //     pic20: 0,

  //     pic21: 0,
  //     pic22: 0,
  //     pic23: 0,
  //     pic24: 0,
  //     pic25: 0,
  //     pic26: 0,
  //     pic27: 0,
  //     pic28: 0,
  //     pic29: 0,
  //     pic30: 0,

  //     click1: 0,
  //     click2: 0,
  //     click3: 0,
  //     click4: 0,
  //     click5: 0,
  //     click6: 0,
  //     click7: 0,
  //     click8: 0,
  //     click9: 0,
  //     click10: 0,

  //     click11: 0,
  //     click12: 0,
  //     click13: 0,
  //     click14: 0,
  //     click15: 0,
  //     click16: 0,
  //     click17: 0,
  //     click18: 0,
  //     click19: 0,
  //     click20: 0,

  //     click21: 0,
  //     click22: 0,
  //     click23: 0,
  //     click24: 0,
  //     click25: 0,
  //     click26: 0,
  //     click27: 0,
  //     click28: 0,
  //     click29: 0,
  //     click30: 0,

  //     skip1: 0,
  //     skip2: 0,
  //     skip3: 0,
  //     skip4: 0,
  //     skip5: 0,
  //     skip6: 0,
  //     skip7: 0,
  //     skip8: 0,
  //     skip9: 0,
  //     skip10: 0,

  //     skip11: 0,
  //     skip12: 0,
  //     skip13: 0,
  //     skip14: 0,
  //     skip15: 0,
  //     skip16: 0,
  //     skip17: 0,
  //     skip18: 0,
  //     skip19: 0,
  //     skip20: 0,

  //     skip21: 0,
  //     skip22: 0,
  //     skip23: 0,
  //     skip24: 0,
  //     skip25: 0,
  //     skip26: 0,
  //     skip27: 0,
  //     skip28: 0,
  //     skip29: 0,
  //     skip30: 0,

  //     isCorrect1: 0,
  //     isCorrect2: 0,
  //     isCorrect3: 0,
  //     isCorrect4: 0,
  //     isCorrect5: 0,
  //     isCorrect6: 0,
  //     isCorrect7: 0,
  //     isCorrect8: 0,
  //     isCorrect9: 0,
  //     isCorrect10: 0,

  //     isCorrect11: 0,
  //     isCorrect12: 0,
  //     isCorrect13: 0,
  //     isCorrect14: 0,
  //     isCorrect15: 0,
  //     isCorrect16: 0,
  //     isCorrect17: 0,
  //     isCorrect18: 0,
  //     isCorrect19: 0,
  //     isCorrect20: 0,

  //     isCorrect21: 0,
  //     isCorrect22: 0,
  //     isCorrect23: 0,
  //     isCorrect24: 0,
  //     isCorrect25: 0,
  //     isCorrect26: 0,
  //     isCorrect27: 0,
  //     isCorrect28: 0,
  //     isCorrect29: 0,
  //     isCorrect30: 0,
  //   });

  const [totalClick, setTotalClcik] = useState(0);

  useEffect(() => {
    const saveRecord = () => {
      axios.post("http://192.168.0.169:4567/create", input);
    };
    if (pic === 15) {
      saveRecord();
    }
  }, [pic]);

  const [orientation, setOrientation] = useState(
    window.innerWidth > window.innerHeight ? "Landscape (X)" : "Portrait (Y)"
  );
  const [isIpad, setIsIpad] = useState(false);

  // Function to check device type (iPad or not)
  const checkIfIpad = () => {
    const isIpadDevice =
      /iPad|Macintosh/.test(navigator.userAgent) && "ontouchend" in document;
    setIsIpad(isIpadDevice);
  };

  // Function to update orientation
  const updateOrientation = () => {
    setOrientation(
      window.innerWidth > window.innerHeight ? "Landscape (X)" : "Portrait (Y)"
    );
  };

  useEffect(() => {
    // Check if the device is an iPad on component mount
    checkIfIpad();

    // Listen for resize events to detect orientation changes
    window.addEventListener("resize", updateOrientation);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  const [pageX1, setPageX1] = useState("");
  const [pageY1, setPageY1] = useState("");

  const [pageX2, setPageX2] = useState("");
  const [pageY2, setPageY2] = useState("");

  const [testX, setTestX] = useState("");
  const [testY, setTestY] = useState("");

  let picss = [
    { pic: 0, y1: 35, x1: 260, y2: 35, x2: 665 },
    { pic: 1, y1: 350, x1: 290, y2: 350, x2: 685 },
    { pic: 2, y1: 360, x1: 230, y2: 360, x2: 635 },
    { pic: 3, y1: 490, x1: 105, y2: 490, x2: 505 },

    { pic: 4, y1: 405, x1: 115, y2: 405, x2: 515 },

    { pic: 5, y1: 225, x1: 165, y2: 225, x2: 555 },

    { pic: 6, y1: 335, x1: 185, y2: 335, x2: 585 },

    { pic: 7, y1: 135, x1: 205, y2: 135, x2: 595 },

    { pic: 8, y1: 35, x1: 305, y2: 35, x2: 695 },

    { pic: 9, y1: 40, x1: 255, y2: 40, x2: 655 },

    { pic: 10, y1: 355, x1: 105, y2: 355, x2: 505 },

    { pic: 11, y1: 295, x1: 285, y2: 295, x2: 685 },

    { pic: 12, y1: 95, x1: 365, y2: 95, x2: 760 },

    { pic: 13, y1: 215, x1: 335, y2: 215, x2: 735 },

    { pic: 14, y1: 490, x1: 350, y2: 490, x2: 750 },
    { pic: 15, y1: 140, x1: 360, y2: 140, x2: 765 },
    // { pic: 16, y1: 10, x1: 315, y2: 100, x2: 1070 },
    // { pic: 17, y1: 340, x1: 155, y2: 340, x2: 910 },
    // { pic: 18, y1: 50, x1: 310, y2: 50, x2: 1070 },
    // { pic: 19, y1: 190, x1: 280, y2: 190, x2: 1020 },
    // { pic: 20, y1: 485, x1: 660, y2: 485, x2: 1410 },
    // { pic: 21, y1: 250, x1: 250, y2: 250, x2: 1000 },
    // { pic: 22, y1: 215, x1: 650, y2: 215, x2: 1405 },
    // { pic: 23, y1: 385, x1: 495, y2: 385, x2: 1250 },
    // { pic: 24, y1: 110, x1: 690, y2: 110, x2: 1440 },
    // { pic: 25, y1: 305, x1: 190, y2: 305, x2: 945 },
    // { pic: 26, y1: 30, x1: 440, y2: 30, x2: 1190 },
    // { pic: 27, y1: 435, x1: 50, y2: 435, x2: 805 },
    // { pic: 28, y1: 365, x1: 450, y2: 365, x2: 1200 },
    // { pic: 29, y1: 510, x1: 460, y2: 510, x2: 1215 },
  ];
  useEffect(() => {
    setCountTo10(0);
    setPageX1(picss[pic]?.x1);
    setPageY1(picss[pic]?.y1);

    setPageX2(picss[pic]?.x2);
    setPageY2(picss[pic]?.y2);
  }, [pic]);

  const handleOnClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setTestX(x);
    setTestY(y);
  };
  if (isStart === true && pic !== 15) {
    setTimeout(() => {
      setCount(count - 1);
      setCountEachPhoto(countEachPhoto + 1);
      if (pic !== 15) {
        setInput((prevInput) => ({ ...prevInput, time: input.time + 1 }));
      }
      if (pic === 0) {
        setInput((prevInput) => ({ ...prevInput, pic1: input.pic1 + 1 }));
      }
      if (pic === 1) {
        setInput((prevInput) => ({ ...prevInput, pic2: input.pic2 + 1 }));
      }
      if (pic === 2) {
        setInput((prevInput) => ({ ...prevInput, pic3: input.pic3 + 1 }));
      }
      if (pic === 3) {
        setInput((prevInput) => ({ ...prevInput, pic4: input.pic4 + 1 }));
      }
      if (pic === 4) {
        setInput((prevInput) => ({ ...prevInput, pic5: input.pic5 + 1 }));
      }
      if (pic === 5) {
        setInput((prevInput) => ({ ...prevInput, pic6: input.pic6 + 1 }));
      }
      if (pic === 6) {
        setInput((prevInput) => ({ ...prevInput, pic7: input.pic7 + 1 }));
      }
      if (pic === 7) {
        setInput((prevInput) => ({ ...prevInput, pic8: input.pic8 + 1 }));
      }
      if (pic === 8) {
        setInput((prevInput) => ({ ...prevInput, pic9: input.pic9 + 1 }));
      }
      if (pic === 9) {
        setInput((prevInput) => ({ ...prevInput, pic10: input.pic10 + 1 }));
      }
      if (pic === 10) {
        setInput((prevInput) => ({ ...prevInput, pic11: input.pic11 + 1 }));
      }
      if (pic === 11) {
        setInput((prevInput) => ({ ...prevInput, pic12: input.pic12 + 1 }));
      }
      if (pic === 12) {
        setInput((prevInput) => ({ ...prevInput, pic13: input.pic13 + 1 }));
      }
      if (pic === 13) {
        setInput((prevInput) => ({ ...prevInput, pic14: input.pic14 + 1 }));
      }
      if (pic === 14) {
        setInput((prevInput) => ({ ...prevInput, pic15: input.pic15 + 1 }));
      }
      if (pic === 15) {
        setInput((prevInput) => ({ ...prevInput, pic16: input.pic16 + 1 }));
      }
      // if (pic === 16) {
      //   setInput((prevInput) => ({ ...prevInput, pic17: input.pic17 + 1 }));
      // }
      // if (pic === 17) {
      //   setInput((prevInput) => ({ ...prevInput, pic18: input.pic18 + 1 }));
      // }
      // if (pic === 18) {
      //   setInput((prevInput) => ({ ...prevInput, pic19: input.pic19 + 1 }));
      // }
      // if (pic === 19) {
      //   setInput((prevInput) => ({ ...prevInput, pic20: input.pic20 + 1 }));
      // }
      // if (pic === 20) {
      //   setInput((prevInput) => ({ ...prevInput, pic21: input.pic21 + 1 }));
      // }
      // if (pic === 21) {
      //   setInput((prevInput) => ({ ...prevInput, pic22: input.pic22 + 1 }));
      // }
      // if (pic === 22) {
      //   setInput((prevInput) => ({ ...prevInput, pic23: input.pic23 + 1 }));
      // }
      // if (pic === 23) {
      //   setInput((prevInput) => ({ ...prevInput, pic24: input.pic24 + 1 }));
      // }
      // if (pic === 24) {
      //   setInput((prevInput) => ({ ...prevInput, pic25: input.pic25 + 1 }));
      // }
      // if (pic === 25) {
      //   setInput((prevInput) => ({ ...prevInput, pic26: input.pic26 + 1 }));
      // }
      // if (pic === 26) {
      //   setInput((prevInput) => ({ ...prevInput, pic27: input.pic27 + 1 }));
      // }
      // if (pic === 27) {
      //   setInput((prevInput) => ({ ...prevInput, pic28: input.pic28 + 1 }));
      // }
      // if (pic === 28) {
      //   setInput((prevInput) => ({ ...prevInput, pic29: input.pic29 + 1 }));
      // }
      // if (pic === 29) {
      //   setInput((prevInput) => ({ ...prevInput, pic30: input.pic30 + 1 }));
      // }
      if (count == 0) {
        setIsStartDiffer(false);
        // setPic(30);
        // window.location = "/testingPage"
        // setCount("time out");

        setIsStartTesting(true);
      }
    }, [1000]);
  }

  const [pages, setPages] = useState([
    { id: 0, data: <Pic1 />, isChecked: false },
    { id: 1, data: <Pic2 />, isChecked: false },
    { id: 2, data: <Pic3 />, isChecked: false },
    { id: 3, data: <Pic4 />, isChecked: false },
    { id: 4, data: <Pic5 />, isChecked: false },
    { id: 5, data: <Pic6 />, isChecked: false },
    { id: 6, data: <Pic7 />, isChecked: false },
    { id: 7, data: <Pic8 />, isChecked: false },
    { id: 8, data: <Pic9 />, isChecked: false },
    { id: 9, data: <Pic10 />, isChecked: false },
    { id: 10, data: <Pic11 />, isChecked: false },
    { id: 11, data: <Pic12 />, isChecked: false },
    { id: 12, data: <Pic13 />, isChecked: false },
    { id: 13, data: <Pic14 />, isChecked: false },
    { id: 14, data: <Pic15 />, isChecked: false },
    { id: 15, data: <Pic16 />, isChecked: false },
    // { id: 16, data: <Pic17 />, isChecked: false },
    // { id: 17, data: <Pic18 />, isChecked: false },
    // { id: 18, data: <Pic19 />, isChecked: false },
    // { id: 19, data: <Pic20 />, isChecked: false },
    // { id: 20, data: <Pic21 />, isChecked: false },
    // { id: 21, data: <Pic22 />, isChecked: false },
    // { id: 22, data: <Pic23 />, isChecked: false },
    // { id: 23, data: <Pic24 />, isChecked: false },
    // { id: 24, data: <Pic25 />, isChecked: false },
    // { id: 25, data: <Pic26 />, isChecked: false },
    // { id: 26, data: <Pic27 />, isChecked: false },
    // { id: 27, data: <Pic28 />, isChecked: false },
    // { id: 28, data: <Pic29 />, isChecked: false },
    // { id: 29, data: <Pic30 />, isChecked: false },
    // { id: 15, data: <PicEnd scoreData={input.score} />, isChecked: false },
  ]);
  const isChecking = () => {
    const updatedPages = pages.map((page, index) => {
      if (index === pic) {
        return { ...page, isChecked: !page.isChecked };
      }
      return page;
    });

    setPages(updatedPages);
  };

  const [countTo10, setCountTo10] = useState(0);
  const spot = () => {
    if (pic == 16) {
      return;
    }
    setInput((prevInput) => ({
      ...prevInput,
      [`click${pic + 1}`]: input[`click${pic + 1}`] + 1,
    }));
    setInput((prevInput) => ({
      ...prevInput,
      totalClick: input.totalClick + 1,
    }));
    setCountTo10(countTo10 + 1);
    if (countTo10 == 9) {
      handleSkip();
      setCountTo10(0);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleSkip = () => {
    setCountTo10(0);
    setInput((prevInput) => ({
      ...prevInput,
      // totalClick: prevInput.totalClick + 1,
      [`skip${pic + 1}`]: (prevInput[`skip${pic + 1}`] || 0) + 1,
    }));

    setInput((prevInput) => ({
      ...prevInput,
      totalSkip: prevInput.totalSkip + 1,
    }));
    console.log(pages)
    let isFalse = pages.filter((data) => data.isChecked == false);
    let lastPic = isFalse.length - 2;
    let nextFalse = isFalse.filter((data) => data.id >= pic + 1);

    if (isFalse[lastPic]?.id === pic) {
      setPic(isFalse[0].id);
      return;
    }
    setPic(nextFalse[0].id);
  };
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  const [lang, setLang] = useState(`EN`);
  const [isOpenLang, setIsOpenLand] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("LANG")) {
      setLang(localStorage.getItem("LANG"));
    }
  }, []);
  return (
    <div className="fixed left-0 top-0 w-full h-full ">
      {isStart ? (
        <div
          // onClick={spot}
          className={`w-full h-full flex flex-col relative items-center justify-start mt-[80px]  ${
            pic == 17 ? `bg-[url('BG.jpg')] bg-cover bg-center ` : `bg-black`
          } `}
        >
          {pic !== 17 && (
            <div
              className={`flex items-center justify-between relative top-0 w-full pb-[0.5rem] ${
                pages[15] && pic == 15
                  ? "text-5xl items-center justify-center"
                  : "text-3xl items-start"
              }`}
            >
              {/* <div className="text-red-500">Time for each : {countEachPhoto}</div> */}
              <div className="text-white text-[1rem] w-[25%] text-center flex justify-center">
                {lang == "EN"
                  ? `Scores : ${input.score}`
                  : ` คะเเนน  : ${input.score}`}
              </div>

              <div className="text-white text-[1rem] w-[45%] text-center flex justify-center">
                {lang == `EN`
                  ? `Total clicks : ${input.totalClick} `
                  : `คลิ๊กทั้งหมด: ${input.totalClick} `}
                <div style={{ textAlign: "center", marginTop: "50px" }}></div>{" "}
                <div
                  onClick={handleSkip}
                  className="bg-white  cursor-pointer text-[#131E3C] "
                >
                  {" "}
                  {lang == "EN" ? "SKIP" : `ข้าม`}
                </div>
                <div>page : {pic}</div>
              </div>
              {/* <div className="text-blue-500">Skips : {countTo10}</div> */}
              <div className="text-white text-[1.5rem] w-[33%] text-center flex justify-center">
                {lang == "EN"
                  ? `Time : ${minutes + "m" + seconds + "s"}`
                  : `เวลาทั้งหมด : ${minutes + " นาที " + seconds + " วินาที"}`}
              </div>
              {/* <div className="text-white text-[1rem] w-[25%] text-center flex justify-center">
                {lang == "EN"
                  ? `Time : ${seconds + "s"}`
                  : `เวลาทั้งหมด : ${seconds + " วินาที"}`}
              </div> */}
            </div>
          )}

          <div
            onClick={spot}
            className="flex  w-[800px] bg-black relative justify-center items-center flex-col"
          >
            <div className={`flex w-full items-center`}>
              {pic == 16 && (
                <div className="flex flex-col items-center justify-center w-full h-full text-4xl  ">
                  <div className="bg-white pb-5 bg-opacity-70 w-[40%] rounded-xl flex flex-col gap-2  shadow-xl">
                    <div className="w-full h-[10rem] rounded-t-xl flex items-center justify-center  bg-[#D70321] text-white">
                      <div className="w-[50%]   flex flex-col h-full items-center">
                        <div className="w-full flex justify-center items-end text-7xl h-[70%]  ">
                          {input.score}
                        </div>
                        <div className="w-full flex justify-center text-xl">
                          {lang == `EN` ? `Total 15` : `ทั้งหมด 15 `}
                        </div>
                      </div>
                      <div className="text-8xl flex h-[70%] w-[1%] items-center bg-white rounded-md"></div>
                      <div className="w-[50%]  flex flex-col h-full">
                        {count > 0 && (
                          <div className="h-[70%]  flex">
                            {" "}
                            {lang == `EN` ? (
                              <div className="w-full flex justify-center text-4xl  items-end">
                                <div> {10 - minutes + "m "}</div>
                                <div className="text-[#D70321]">{" d"}</div>
                                <div>{60 - seconds + "s"}</div>
                              </div>
                            ) : (
                              <div className="w-full flex justify-center text-4xl  items-end">
                                <div> {10 - minutes + "นาที"}</div>
                                <div className="text-[#D70321]">{" d"}</div>
                                <div>{60 - seconds + "วินาที"}</div>
                              </div>
                            )}
                          </div>
                        )}
                        {count < 0 && <div> 10m</div>}
                        <div className="text-xl w-full flex justify-center">
                          {lang == `EN` ? `Used Time ` : `เวลาที่ใช้ไป`}
                        </div>
                      </div>
                    </div>
                    <div className="text-white flex flex-col gap-1 text-2xl pt-5 pb-5">
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {lang == "EN" ? `First Name ` : `ชื่อ`}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.firstName}
                        </div>
                      </div>
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {" "}
                          {lang == "EN" ? `Last Name  ` : `นามสกุล  `}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.lastName}{" "}
                        </div>
                      </div>
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {" "}
                          {lang == `EN` ? ` Total clicks ` : ` คลิ๊กทั้งหมด `}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.totalClick}{" "}
                        </div>
                      </div>
                      <div className="text-black flex w-full ">
                        <div className=" w-[50%] flex justify-start pl-[10%] ">
                          {" "}
                          {lang == `EN` ? ` Total skips ` : ` ข้ามทั้งหมด `}
                        </div>
                        <div className=" w-[50%] flex justify-center">
                          {input.totalSkip}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10 pt-5">
                    <button
                      className="bg-white text-2xl pr-10 pl-10 pt-2 pb-2 rounded-md   shadow-xl"
                      onClick={() => {
                        if (pic === 15) {
                          setPic(0);
                          setInput({
                            ...input,
                            firstName: "",
                            lastName: "",
                            totalClick: 0,
                            score: 0,
                            time: 0,
                            pic1: 0,
                            pic2: 0,
                            pic3: 0,
                            pic4: 0,
                            pic5: 0,
                            pic6: 0,
                            pic7: 0,
                            pic8: 0,
                            pic9: 0,
                            pic10: 0,

                            pic11: 0,
                            pic12: 0,
                            pic13: 0,
                            pic14: 0,
                            pic15: 0,
                            pic16: 0,
                            pic17: 0,
                            pic18: 0,
                            pic19: 0,
                            pic20: 0,

                            pic21: 0,
                            pic22: 0,
                            pic23: 0,
                            pic24: 0,
                            pic25: 0,
                            pic26: 0,
                            pic27: 0,
                            pic28: 0,
                            pic29: 0,
                            pic30: 0,

                            click1: 0,
                            click2: 0,
                            click3: 0,
                            click4: 0,
                            click5: 0,
                            click6: 0,
                            click7: 0,
                            click8: 0,
                            click9: 0,
                            click10: 0,

                            click11: 0,
                            click12: 0,
                            click13: 0,
                            click14: 0,
                            click15: 0,
                            click16: 0,
                            click17: 0,
                            click18: 0,
                            click19: 0,
                            click20: 0,

                            click21: 0,
                            click22: 0,
                            click23: 0,
                            click24: 0,
                            click25: 0,
                            click26: 0,
                            click27: 0,
                            click28: 0,
                            click29: 0,
                            click30: 0,

                            skip1: 0,
                            skip2: 0,
                            skip3: 0,
                            skip4: 0,
                            skip5: 0,
                            skip6: 0,
                            skip7: 0,
                            skip8: 0,
                            skip9: 0,
                            skip10: 0,

                            skip11: 0,
                            skip12: 0,
                            skip13: 0,
                            skip14: 0,
                            skip15: 0,
                            skip16: 0,
                            skip17: 0,
                            skip18: 0,
                            skip19: 0,
                            skip20: 0,

                            skip21: 0,
                            skip22: 0,
                            skip23: 0,
                            skip24: 0,
                            skip25: 0,
                            skip26: 0,
                            skip27: 0,
                            skip28: 0,
                            skip29: 0,
                            skip30: 0,

                            isCorrect1: 0,
                            isCorrect2: 0,
                            isCorrect3: 0,
                            isCorrect4: 0,
                            isCorrect5: 0,
                            isCorrect6: 0,
                            isCorrect7: 0,
                            isCorrect8: 0,
                            isCorrect9: 0,
                            isCorrect10: 0,

                            isCorrect11: 0,
                            isCorrect12: 0,
                            isCorrect13: 0,
                            isCorrect14: 0,
                            isCorrect15: 0,
                            isCorrect16: 0,
                            isCorrect17: 0,
                            isCorrect18: 0,
                            isCorrect19: 0,
                            isCorrect20: 0,

                            isCorrect21: 0,
                            isCorrect22: 0,
                            isCorrect23: 0,
                            isCorrect24: 0,
                            isCorrect25: 0,
                            isCorrect26: 0,
                            isCorrect27: 0,
                            isCorrect28: 0,
                            isCorrect29: 0,
                            isCorrect30: 0,
                          });
                          setCountTo10(0);
                          setCount(600);
                          setIsStart(false);
                          setPages(
                            pages.map((page) => {
                              if (page.isChecked) {
                                return { ...page, isChecked: false }; // Update isChecked to false
                              }
                              return page; // Return the original object if no change
                            })
                          );
                        }
                      }}
                    >
                      {lang == `EN` ? `  Try again` : `ลองอีกครั้ง`}
                    </button>
                    <button
                      onClick={() => (window.location = "/")}
                      className="bg-[#D70321] text-2xl pr-10 pl-10 pt-2 pb-2  rounded-md text-white shadow-xl"
                    >
                      {lang == `EN` ? `Back To Home` : `กลับไปหน้าโฮม`}
                    </button>
                  </div>
                </div>
              )}

              {pic === pages[pic]?.id &&
                pages[pic]?.isChecked === false &&
                pages[pic]?.data}
              {/* {pic === pages[pic].id &&  pages[pic].data} */}
            </div>

            {pic !== 16 && (
              <div className="h-full w-full bg-red-500">
                <div className="w-[100%] h-[100%] absolute top-0">
                  <div
                    onClick={() => {
                      setCountTo10(0);
                      setInput((prevInput) => ({
                        ...prevInput,
                        score: input.score + 1,
                      }));
                      setInput((prevInput) => ({
                        ...prevInput,
                        [`isCorrect${pic + 1}`]: 1,
                      }));
                      isChecking();
                      // alert("CORRECT !!!");
                      let isFalse = pages.filter(
                        (data) => data.isChecked == false
                      );
                      let lastPic = isFalse.length - 2;
                      if (lastPic == 0) {
                        return setPic(15);
                      }
                      if (isFalse[lastPic].id === pic) {
                        setPic(isFalse[0].id);
                        return;
                      }
                      let nextFalse = isFalse.filter(
                        (data) => data.id >= pic + 1
                      );
                      setPic(nextFalse[0].id);
                    }}
                    className={`absolute rounded-full  w-[70px] h-[70px] bg-yellow-300`}
                    style={{
                      // top: 215,
                      // left: 335,
                      top: pageY1,
                      left: pageX1,
                      transform: "translate(-50%, -50%)", // Center the location indicator
                    }}
                  ></div>

                  <div
                    onClick={() => {
                      setCountTo10(0);
                      setInput((prevInput) => ({
                        ...prevInput,
                        score: input.score + 1,
                      }));
                      setInput((prevInput) => ({
                        ...prevInput,
                        [`isCorrect${pic + 1}`]: 1,
                      }));
                      isChecking();
                      // alert("CORRECT !!!");
                      let isFalse = pages.filter(
                        (data) => data.isChecked == false
                      );
                      let lastPic = isFalse.length - 2;
                      if (lastPic == 0) {
                        return setPic(15);
                      }
                      if (isFalse[lastPic].id === pic) {
                        setPic(isFalse[0].id);
                        return;
                      }
                      let nextFalse = isFalse.filter(
                        (data) => data.id >= pic + 1
                      );
                      setPic(nextFalse[0].id);
                    }}
                    className={`absolute rounded-full  w-[70px] h-[70px] bg-blue-500`}
                    style={{
                      top: pageY2,
                      left: pageX2,
                      // top: 215,
                      // left: 735,
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full bottom-0 relative flex justify-center items-center flex-col py-[2rem]">
            {pic !== 16 && (
              <div
                onClick={handleSkip}
                className="bg-white p-1 rounded-full cursor-pointer px-[2rem] text-[#131E3C] font-medium "
              >
                {" "}
                {lang == "EN" ? "SKIP" : `ข้าม`}
              </div>
            )}

            {/* {pic !== 30 && (
                    <div className="text-green-500 text-[1.5rem]">
                      {lang == "EN"
                        ? `Picture : ${pic + 1 + "/30"}`
                        : `รูปภาพ : ${pic + 1 + "/30"}`}
                    </div>
                  )} */}
          </div>
        </div>
      ) : (
        <div onChange={handleChange}>
          <Start setIsStart={setIsStart} />
        </div>
      )}
    </div>
  );
}
