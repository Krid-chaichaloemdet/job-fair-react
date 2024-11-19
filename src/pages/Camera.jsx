import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import photo from "../assets/photo.svg"

export default function Camera({ setIsPhotoSuccess }) {
  const navigate = useNavigate();
  const [isPhotoAllow, setIsPhotoAllow] = useState(localStorage.getItem('photp') ? true : false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const handleAllowCamera = async () => {
    setIsPhotoAllow(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const handleCloseCamera = () => {
    const stream = videoRef.current?.srcObject; // Access the video stream
    if (stream && stream.getTracks) {
      stream.getTracks().forEach((track) => track.stop()); // Stop all tracks
    }
    videoRef.current.srcObject = null; // Clear the video source
  };

  const handleCaptureAndSend = async () => {
    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

    // Convert the canvas content to a Blob
    canvas.toBlob(async (blob) => {
      if (!blob) {
        console.error("Failed to capture image");
        return;
      }

      // Prepare FormData
      const formData = new FormData();
      formData.append("photo", blob, `photo_${Date.now()}.png`);

      try {
        // Send the image to the backend
        const response = await axios.post(
          "http://localhost:8000/upload",
          formData
        );
        console.log("response", response.data.response.userId)
        if (response.status == 200) {
          // setIsPhotoAllow(false);
          // setIsPhotoSuccess(false);
          handleCloseCamera();
          localStorage.setItem('userId', response.data.response.userId)
          localStorage.setItem('photo', true)
          navigate('/registerPage')
        } else {
          console.error("Photo upload failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending photo to backend:", error);
      }
    }, "image/png"); // Specify image type (e.g., PNG)
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100%] p-14">
      {isPhotoAllow ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white tracking-widest p-12 ">
           <p className="tracking-widest text-center">Please remove your mask</p>
           <p className="py-5 tracking-widest text-center">to take a photo of your face.</p>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-auto rounded-3xl shadow-lg"
            src=""
          ></video>
          <canvas
            className="w-96 h-96 bg-green-500 pt-20"
            ref={canvasRef}
            style={{ display: "none" }}
          ></canvas>
          <div className="flex flex-col  w-[300px]">
            <button className="mt-4 px-6 py-2 w-full bg-[#131E3C] text-white rounded-3xl tracking-widest" onClick={handleCaptureAndSend}>
            Take photo
            </button>
            <button
              className="mt-4 px-6 py-2 w-full bg-[#ECEEF3] text-[#131E3C] rounded-3xl border-2 border-[#131E3C]  transition-all"
              onClick={() => {
                handleCloseCamera();
                setIsPhotoAllow(false);
              }}
            >
              back
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center py-14">
            <img className="pb-14" src={photo} alt="" />
            <p className="text-center w-[100%]">Please make sure your photo</p>
            <p className="text-center w-[100%]"> clearly shows your face.</p> 
          </div>
          <div className="flex flex-col gap-3">
              <button onClick={handleAllowCamera} className="h-10 bg-[#131E3C] border shadow-lg rounded-[26px] text-[#fff] ">
                take a photo
              </button>
              <button className="h-10 w-[18rem] bg-white border border-[#131E3C] shadow-lg rounded-[26px] " onClick={() => navigate("/")}>
                back to home page
              </button>
            </div>
        </div>
        
      )}
    </div>
  );
}
