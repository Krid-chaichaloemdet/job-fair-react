import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
        console.log("response",response.data.response.userId)
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
    <div className="bg-black bg-opacity-70 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
      {isPhotoAllow ? (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-96 h-96 bg-green-500 pt-20"
            src=""
          ></video>
          <canvas
            className="w-96 h-96 bg-green-500 pt-20"
            ref={canvasRef}
            style={{ display: "none" }}
          ></canvas>
          <div className="flex gap-5">
            <button className="bg-green-300" onClick={handleCaptureAndSend}>
              upload
            </button>
            <button
              className="bg-white"
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
        <div>
          <div className="bg-green-300">Can you send us your picture ?</div>
          <div className="flex gap-5">
            <button onClick={handleAllowCamera} className="bg-yellow-300">
              take a photo
            </button>
            <button className="bg-white" onClick={() => navigate("/")}>
              back to home page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
