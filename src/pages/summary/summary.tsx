import React, { useState } from "react";
import "./summary.css";
import axios from "axios";

function Summary() {
  const summaryEndpoint =
    process.env.VITE_BACKEND_API + "/api/Resumes/getResume";
  const [base64String, setBase64String] = useState<string | null>(null);
  const [resume, setResume] = useState<[] | null>(null);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const base64 = await convertToBase64(file);
      console.log("base64", base64);
      setBase64String(base64);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    if (!base64String) {
      alert("Please select a file first.");
      return;
    }
    try {
      const newString = base64String.substring(28); // to remove the header "data:application/pdf;base64," from the base64 string
      console.log("newString", newString);

      const response = await axios.post(
        summaryEndpoint,
        newString,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      setResume(data.resultItem.resumeContents);
      console.log("sucesseful response");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="  cards-container  m-[30px]   ">
      <div className="prompt text-left text-white ">
        Hello. enter the PDF you want to summarize here and click upload!
      </div>
      <br />

      <div className="input text-left flex flex-wrap">
        <input
          className="rounded-[20px]   w-[400px] h-[30px]  bg-white"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <div className="upload-btn-container flex ">
          <button
            className="ml-[20%] upload-btn flex items-center justify-center  "
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
      {resume ? (
        <div className="summaryContainer text-white text-left m-[30px] ">
          {resume.map((item, index) => (
            <div key={index} className=" m-[20px] ">
              <p>{item}</p>
              <br />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default Summary;
