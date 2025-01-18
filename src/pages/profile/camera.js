import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import Api from "../../Requests/Api";
import axios from "axios";

export default function Camera() {
  const [imageSrc, setImageSrc] = useState(null); // Stores the captured image
  const webcamRef = useRef(null); // Reference to the Webcam component
  const navigate = useNavigate(); // For navigation

  // Function to compress the captured image
  const compressImage = async (imageDataUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageDataUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const maxWidth = 600; // Maximum width for the compressed image
        const maxHeight = 400; // Maximum height for the compressed image

        let { width, height } = img;

        // Maintain aspect ratio while resizing
        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = (maxHeight / width) * height;
            width = maxWidth;
          } else {
            width = (maxWidth / height) * width;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        // Convert the canvas to a compressed Data URL
        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7); // 70% quality
        resolve(compressedDataUrl);
      };

      img.onerror = (error) => reject(error);
    });
  };

  // Function to capture an image from the webcam
  const capture = async () => {
    const screenshot = webcamRef.current.getScreenshot();
    if (screenshot) {
      try {
        const compressedImage = await compressImage(screenshot); // Compress the image
        setImageSrc(compressedImage); // Update the state with the compressed image
        console.log("Compressed Image:", compressedImage);

        // Post the compressed image to the backend
        const response = await Api.post("/camera", {
          image: compressedImage,
        });
        console.log("Image successfully uploaded!");
      } catch (error) {
        console.error("Error compressing or uploading the image:", error);
      }
    } else {
      console.log("No image captured");
    }
  };

  return (
    <div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Captured"
          style={{ height: "400px", width: "600px" }}
        />
      )}
      <Webcam
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
      />
      <button onClick={capture}>Capture & Upload</button>
    </div>
  );
}
