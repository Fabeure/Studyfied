import React, { useState } from "react";
import "./summary.css";
import axios from "axios";

function Summary() {
  const summaryEndpoint =
    process.env.VITE_BACKEND_API + "/api/Resumes/getResume";
  const [base64String, setBase64String] = useState<string | null>(null);
  const [resume, setResume] = useState<[] | null>(null);

  // const handleFileChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (event.target.files) {
  //     const file = event.target.files[0];
  //     const base64 = await convertToBase64(file);
  //     console.log("base64", base64);
  //     setBase64String(base64);
  //   }
  // };

  // const convertToBase64 = (file: File): Promise<string> => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result as string);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  // const handleUpload = async () => {
  //   if (!base64String) {
  //     alert("Please select a file first.");
  //     return;
  //   }
  //   try {
  //     const newString = base64String.substring(28); // to remove the header "data:application/pdf;base64," from the base64 string
  //     console.log("newString", newString);

  //     const response = await axios.post(
  //       summaryEndpoint,
  //       newString,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = response.data;
  //     setResume(data.resultItem.resumeContents);
  //     console.log("sucesseful response");
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [base64Files, setBase64Files] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  const handleRemoveFile = (file: File) => {
    setSelectedFiles(selectedFiles.filter((f) => f !== file));
  };

  const handleUpload = () => {
    encodeFilesToBase64(selectedFiles);
    console.log("selectedFiles encoded hopefully", base64Files);
    // You can then handle the upload logic here, e.g., sending base64Files to a server
  };

  const encodeFilesToBase64 = (files: File[]) => {
    console.log("files", files); // For debugging
    const promises = files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    });

    Promise.all(promises)
      .then((encodedFiles) => {
        console.log("then,encodedFiles", encodedFiles); // For debugging
        const newencodedFiles = encodedFiles.map((file) => {
          return file.substring(22); // to remove the header "data:application/pdf;base64," from the base64 string
        });
        console.log("then,newBase64Files ", newencodedFiles); // For debugging
        setBase64Files(newencodedFiles);

        sendResumeRequest();
      })
      .catch((error) => console.error("Error encoding files:", error));
  };

  const sendResumeRequest = async () => {
    const params = {
      encodedImages: base64Files,
    };
    console.log("base64Files", base64Files);

    if (!base64Files.length) {
      alert("Please select a file first.");
      return;
    }
    try {
      const response = await axios.post(
        "https://localhost:7001/api/Resumes/getResume",
        {},
        { params }
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
        Hello. enter the pictures or screenshots of the course you want to
        summarize and click summarize!
      </div>
      <br />

      <div className="input text-left flex flex-col">
        <input
          className="rounded-[20px]   w-[400px] h-[30px]  bg-white"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <div className="selectedFiles m-[20px]">
          {selectedFiles.map((file, index) => (
            <div key={index} className="preview-item">
              <img
                src={URL.createObjectURL(file)}
                alt={`preview ${index}`}
                className="preview-image"
              />
              <button
                className=" flex items-center rounded-[20px] h-[30px] my-[10px] "
                onClick={() => handleRemoveFile(file)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="upload-btn-container flex items-center justify-center ">
        {" "}
        <button
          className=" upload-btn flex items-center justify-center  "
          onClick={handleUpload}
        >
          summarize
        </button>
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
