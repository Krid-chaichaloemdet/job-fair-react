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

import axios from "../config/axios";
import Pic11 from "../pictures/Pic11";
import Pic12 from "../pictures/Pic12";
import Pic13 from "../pictures/Pic13";
import Pic14 from "../pictures/Pic14";
import Pic15 from "../pictures/Pic15";
import Pic16 from "../pictures/Pic16";
import Pic17 from "../pictures/Pic17";

export default function TestingDiiferPage({
  setIsStartTesting,
  setIsStartDiffer,
  input,
  setInput,
}) {
  const [count, setCount] = useState(60);

  const [countEachPhoto, setCountEachPhoto] = useState(0);
  const [pic, setPic] = useState(0);

  const [isStart, setIsStart] = useState(false);

  const [topScorer, setTopScorer] = useState([]);

  const [totalClick, setTotalClcik] = useState(0);

  // useEffect(() => {
  //   const saveRecord = () => {
  //     axios.post("http://192.168.0.169:4567/create", input);
  //   };
  //   if (pic === 15) {
  //     saveRecord();
  //   }
  // }, [pic]);

  const [orientation, setOrientation] = useState(
    window.innerWidth > window.innerHeight ? "Landscape (X)" : "Portrait (Y)"
  );
  const [isIpad, setIsIpad] = useState(false);

  const checkIfIpad = () => {
    const isIpadDevice =
      /iPad|Macintosh/.test(navigator.userAgent) && "ontouchend" in document;
    setIsIpad(isIpadDevice);
  };

  const updateOrientation = () => {
    setOrientation(
      window.innerWidth > window.innerHeight ? "Landscape (X)" : "Portrait (Y)"
    );
  };

  useEffect(() => {
    checkIfIpad();

    window.addEventListener("resize", updateOrientation);

    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  const [pageX1, setPageX1] = useState("");
  const [pageY1, setPageY1] = useState("");

  const [pageX2, setPageX2] = useState("");
  const [pageY2, setPageY2] = useState("");

  let picss = [
    { pic: 0, y1: 35, x1: 260, y2: 35, x2: 665 },
    { pic: 1, y1: 350, x1: 290, y2: 350, x2: 685 },
    { pic: 2, y1: 360, x1: 230, y2: 360, x2: 635 },
    { pic: 3, y1: 490, x1: 105, y2: 490, x2: 505 },

    { pic: 4, y1: 405, x1: 115, y2: 405, x2: 515 },

    { pic: 5, y1: 225, x1: 165, y2: 225, x2: 555 },

    { pic: 6, y1: 335, x1: 185, y2: 335, x2: 585 },

    { pic: 7, y1: 40, x1: 205, y2: 40, x2: 595 },

    { pic: 8, y1: 35, x1: 305, y2: 35, x2: 695 },

    { pic: 9, y1: 40, x1: 255, y2: 40, x2: 655 },

    { pic: 10, y1: 355, x1: 105, y2: 355, x2: 505 },

    { pic: 11, y1: 295, x1: 285, y2: 295, x2: 685 },

    { pic: 12, y1: 95, x1: 365, y2: 95, x2: 760 },

    { pic: 13, y1: 215, x1: 335, y2: 215, x2: 735 },

    { pic: 14, y1: 440, x1: 350, y2: 440, x2: 750 },
    { pic: 15, y1: 140, x1: 360, y2: 140, x2: 765 },
    // { pic: 16, y1: 10, x1: 315, y2: 100, x2: 1070 },
  ];
  useEffect(() => {
    setCountTo10(0);
    setPageX1(picss[pic]?.x1);
    setPageY1(picss[pic]?.y1);

    setPageX2(picss[pic]?.x2);
    setPageY2(picss[pic]?.y2);
  }, [pic]);

  // if (isStart === true && pic !== 16) {
  //   setTimeout(() => {
  //     setCount(count - 1);
  //     setCountEachPhoto(countEachPhoto + 1);
  //     if (pic !== 15) {
  //       setInput((prevInput) => ({ ...prevInput, time: input.time + 1 }));
  //     }
  //     if (pic === 0) {
  //       setInput((prevInput) => ({ ...prevInput, pic1: input.pic1 + 1 }));
  //     }
  //     if (pic === 1) {
  //       setInput((prevInput) => ({ ...prevInput, pic2: input.pic2 + 1 }));
  //     }
  //     if (pic === 2) {
  //       setInput((prevInput) => ({ ...prevInput, pic3: input.pic3 + 1 }));
  //     }
  //     if (pic === 3) {
  //       setInput((prevInput) => ({ ...prevInput, pic4: input.pic4 + 1 }));
  //     }
  //     if (pic === 4) {
  //       setInput((prevInput) => ({ ...prevInput, pic5: input.pic5 + 1 }));
  //     }
  //     if (pic === 5) {
  //       setInput((prevInput) => ({ ...prevInput, pic6: input.pic6 + 1 }));
  //     }
  //     if (pic === 6) {
  //       setInput((prevInput) => ({ ...prevInput, pic7: input.pic7 + 1 }));
  //     }
  //     if (pic === 7) {
  //       setInput((prevInput) => ({ ...prevInput, pic8: input.pic8 + 1 }));
  //     }
  //     if (pic === 8) {
  //       setInput((prevInput) => ({ ...prevInput, pic9: input.pic9 + 1 }));
  //     }
  //     if (pic === 9) {
  //       setInput((prevInput) => ({ ...prevInput, pic10: input.pic10 + 1 }));
  //     }
  //     if (pic === 10) {
  //       setInput((prevInput) => ({ ...prevInput, pic11: input.pic11 + 1 }));
  //     }
  //     if (pic === 11) {
  //       setInput((prevInput) => ({ ...prevInput, pic12: input.pic12 + 1 }));
  //     }
  //     if (pic === 12) {
  //       setInput((prevInput) => ({ ...prevInput, pic13: input.pic13 + 1 }));
  //     }
  //     if (pic === 13) {
  //       setInput((prevInput) => ({ ...prevInput, pic14: input.pic14 + 1 }));
  //     }
  //     if (pic === 14) {
  //       setInput((prevInput) => ({ ...prevInput, pic15: input.pic15 + 1 }));
  //     }
  //     if (pic === 15) {
  //       setInput((prevInput) => ({ ...prevInput, pic16: input.pic16 + 1 }));
  //     }
  //     // if (pic === 16) {
  //     //   setInput((prevInput) => ({ ...prevInput, pic17: input.pic17 + 1 }));
  //     // }
  //     if(input.score == 15){
  //       setIsStartDiffer(false);

  //       setIsStartTesting(true);
  //     }
  //     if ( count == 0 ) {
  //       setIsStartDiffer(false);

  //       setIsStartTesting(true);
  //     }
  //   }, [1000]);
  // }

  useEffect(() => {
    if (isStart === true && pic !== 16) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
        setCountEachPhoto((prevCountEachPhoto) => prevCountEachPhoto + 1);

        if (pic !== 15) {
          setInput((prevInput) => ({ ...prevInput, time: prevInput.time + 1 }));
        }

        if (pic >= 0 && pic <= 15) {
          setInput((prevInput) => ({
            ...prevInput,
            [`pic${pic + 1}`]: (prevInput[`pic${pic + 1}`] || 0) + 1,
          }));
        }

        if (input.score === 15 || count === 0) {
          setIsStartDiffer(false);
          setIsStartTesting(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isStart, pic, count, input.score]); 

  console.log(input.score);
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
    { id: 15, data: <PicEnd />, isChecked: false },
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
  useEffect(() => {
    if (localStorage.getItem("LANG")) {
      setLang(localStorage.getItem("LANG"));
    }
  }, []);
  return (
    <div className="fixed left-0 top-0 w-full h-full overflow-y-scroll">
      {isStart ? (
        <div
          className={`w-full h-full flex flex-col relative items-center justify-start mt-[80px]  ${
            pic == 17 ? `bg-[url('BG.jpg')] bg-cover bg-center ` : `bg-black`
          } `}
        >
          {pic !== 17 && (
            <div
              className={`flex items-center justify-between relative top-0 w-full pb-[1rem] mt-[2rem] ${
                pages[15] && pic == 15
                  ? "text-5xl items-center justify-center"
                  : "text-3xl items-start"
              }`}
            >
              <div className="text-white text-[1rem] w-[25%] text-center flex justify-center">
                {lang == "EN"
                  ? `Picture : ${pic + 1 + "/15"}`
                  : ` คะเเนน  : ${input.score}`}
              </div>
              <div className="text-white text-[1rem] w-[25%] text-center flex justify-center">
                {lang == "EN"
                  ? `Scores : ${input.score}`
                  : ` คะเเนน  : ${input.score}`}
              </div>

              <div className="text-white text-[1rem] w-[25%] text-center flex justify-center">
                {lang == `EN`
                  ? `Total clicks : ${input.totalClick} `
                  : `คลิ๊กทั้งหมด: ${input.totalClick} `}
              </div>

              <div className="text-white text-[1rem] w-[25%] text-center flex justify-center">
                <div className="">
                  <div className="w-full flex justify-center  gap-3 items-end">
                    <div> {minutes + " m "}</div>
                    <div>{seconds + " s"}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="h-[70%] flex justify-center items-center">
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
                        </div>
                        <div className="text-8xl flex h-[70%] w-[1%] items-center bg-white rounded-md"></div>
                      </div>
                    </div>
                  </div>
                )}

                {pic === pages[pic]?.id &&
                  pages[pic]?.isChecked === false &&
                  pages[pic]?.data}
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
                      className={`absolute rounded-full  w-[70px] h-[70px] `}
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
                      className={`absolute rounded-full  w-[70px] h-[70px] `}
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
