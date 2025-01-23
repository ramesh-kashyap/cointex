import React, { useState } from "react";
import Api from "../../Requests/Api";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedFile(file);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
      console.log(formData);
    try {
      const response = await Api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(`Image uploaded successfully: ${response.data}`);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Failed to upload the image.");
    }
  };

  return (
    <div>
      <form>
        <input  type="file" name="image" onChange={handleFileChange}style={{ width: "200px" }}/>
        {previewUrl && (
          <img src={previewUrl} alt="Preview"style={{ width: "200px", marginTop: "10px" }}/>
        )}
        <button onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
}
