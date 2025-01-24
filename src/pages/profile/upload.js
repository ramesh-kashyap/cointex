import React, { useState } from "react";
import Api from "../../Requests/Api";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("No file selected.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    setSelectedFile(file);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);

    console.log("Selected File:", file);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
      
    console.log("FormData contents:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await Api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(`Image uploaded successfully: ${response.data.message}`);
    } catch (error) {
      console.error("Error during upload:", error.response || error);
      alert("Failed to upload the image.");
    }
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          style={{ width: "200px" }}
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            style={{ width: "200px", marginTop: "10px" }}
          />
        )}
        <button onClick={handleUpload} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
