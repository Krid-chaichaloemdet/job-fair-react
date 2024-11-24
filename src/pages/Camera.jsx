import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

import photo from "../assets/photo.svg";
import SuccessUpload from "../component/camera/SuccessUpload";

export default function Camera({ setIsPhotoSuccess }) {
  const navigate = useNavigate();
  const [isPhotoAllow, setIsPhotoAllow] = useState(
    localStorage.getItem("photp") ? true : false
  );
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isOpenUploadSuccess, setIsOpenUploadSuccess] = useState(false);
  const [isPreviewPhoto, setIsPreviewPhoto] = useState(false);

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
    setIsPreviewPhoto(true);

    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
  };

  const handleConfirmToUpload = async () => {
    // setIsOpenUploadSuccess(true)
    setIsPreviewPhoto(false);
    handleCloseCamera()

    canvasRef.current.toBlob(async (blob) => {
      if (!blob) {
        console.error("Failed to capture image");
        return;
      }

      // Prepare FormData
      const formData = new FormData();
      formData.append("photo", blob, `photo_${Date.now()}.png`);

      try {
        // Send the image to the backend
        const response = await axios
          .post("/upload", formData)
          .finally(() => setIsOpenUploadSuccess(true));

        if (response.status == 200) {
          localStorage.setItem("userId", response.data.response.userId);
          localStorage.setItem("photo", true);
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
      {isOpenUploadSuccess && <SuccessUpload />}
      {isPhotoAllow ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-white tracking-widest p-12 ">
          <p className="tracking-widest text-center">Please remove your mask</p>
          <p className="py-5 tracking-widest text-center">
            to take a photo of your face.
          </p>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={`w-full h-auto rounded-3xl shadow-lg ${
              isPreviewPhoto ? "hidden" : "block"
            }`}
            src=""
          ></video>
          <canvas
            className={`w-full h-auto rounded-3xl shadow-lg ${
              isPreviewPhoto ? "block" : "hidden"
            }`}
            ref={canvasRef}
            // style={{ display: "none" }}
          ></canvas>

          <div className="flex flex-col  w-[300px]">
            {isPreviewPhoto && (
              <div>
                <button
                  onClick={handleConfirmToUpload}
                  className="mt-4 px-6 py-2 w-full bg-[#131E3C] text-white rounded-3xl tracking-widest"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setIsPreviewPhoto(false)}
                  className="mt-4 px-6 py-2 w-full bg-[#ECEEF3] text-[#131E3C] rounded-3xl border-2 border-[#131E3C]  transition-all"
                >
                  Retake
                </button>
              </div>
            )}
            {!isPreviewPhoto && (
              <div>
                <button
                  className="mt-4 px-6 py-2 w-full bg-[#131E3C] text-white rounded-3xl tracking-widest"
                  onClick={handleCaptureAndSend}
                >
                  Take Photo
                </button>
                <button
                  className="mt-4 px-6 py-2 w-full bg-[#ECEEF3] text-[#131E3C] rounded-3xl border-2 border-[#131E3C]  transition-all"
                  onClick={() => {
                    handleCloseCamera();
                    setIsPhotoAllow(false);
                  }}
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center py-14">
            <img className="pb-14" src={photo} alt="" />
            <p className="text-center font-extrabold w-[100%]">Guideline</p>
            <p className="text-center w-[100%]"> We respectfully ask for your permission to take a picture of you to complete your job application. This picture will only be used for the application process and will be securely stored</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAllowCamera}
              className="h-10 bg-[#131E3C] border shadow-lg rounded-[26px] text-[#fff] "
            >
              Take a Photo
            </button>
            <button
              className="text-gray-600 text-[10px] px-6 pt-1 pb-0 underline decoration-[#131E3C] cursor-pointer"
              onClick={() => navigate("/")}
            >
              I do not want to apply for a job
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
