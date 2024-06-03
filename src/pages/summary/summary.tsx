import React, { useEffect, useState } from "react";
import "./summary.css";
import axios from "axios";
import { toast } from "react-toastify";
import { IsPlayingProvider } from "../../context/IsPlayingContext";
import FirstVisitSpeech from "../../components/FirstVisitSpeech/FirstVisitSpeech";
import { ChatBotCanvas } from "../../components/ChatBotCanvas/ChatBotCanvas";

function Summary() {
  const summaryEndpoint =
    process.env.VITE_BACKEND_API + "/api/Resumes/getResume";
  const [resume, setResume] = useState<[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [base64Files, setBase64Files] = useState<string[]>([]);
  const [requestSent, setrequestSent] = useState<boolean>(false);

  const scriptedTexts = [
    `Welcome to your Summary Page! This is where you can get a quick overview of your accomplishments and key highlights. Let's review your achievements together!`,
    `Excited to see your summary? Let's dive in! Your accomplishments are worth celebrating.`,
    `First time on the Summary Page? Get ready to reflect on your journey and see how far you've come.`,
    `Welcome back to your Summary Page! Ready to update your highlights and reflect on your progress?`,
    `Great to see you again! Let's review your summary and ensure it reflects your current achievements and goals.`,
    `You're back for more! Consistency is key to success. Let's review and refine your summary for maximum impact!`
  ];

  useEffect(() => {
    if (loading) {
      toast.warning("Please wait. This may take a while...", {
        autoClose: 9000,
      });
    }
  }, [loading]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setrequestSent(false);
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
      const promises = filesArray.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target) {
              const base64 = e.target.result as string;
              resolve(base64);
            }
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((base64Array) => {
          const newencodedFiles = base64Array.map((file) => {
            return file.substring(22); // to remove the header "data:application/pdf;base64," from the base64 string
          });
          setBase64Files(newencodedFiles);
        })
        .catch((error) => {
          console.error("Error reading files:", error);
        });
    }
  };

  const handleRemoveFile = (file: File) => {
    setSelectedFiles(selectedFiles.filter((f) => f !== file));
  };

  const handleUpload = () => {
    setResume(null);
    setLoading(true);
    setrequestSent(true);
    sendResumeRequest();
  };

  const sendResumeRequest = async () => {
    if (!base64Files.length) {
      alert("Please select a file first.");
      return;
    }
    try {
      const response = await axios.post(summaryEndpoint, base64Files);
      setLoading(false);
      const data = response.data;
      setResume(data.resultItem.resumeContents);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const formatText = (text: any) => {
    // Split the text by '**' to identify the bold sections
    const parts = text.split("**");
    return parts.map((part: any, index: any) => {
      if (index % 2 === 0) {
        // Regular text
        return part;
      } else {
        // Bold text
        return (
          <>
            <br />
            <strong className="color-red " key={index}>
              {part}
            </strong>
            <br />
          </>
        );
      }
    });
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
          className="rounded-[20px] w-[500px] h-[30px]  bg-white"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        {!requestSent ? (
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
        ) : null}
      </div>

      {!requestSent ? (
        <div className="upload-btn-container flex mt-[20px] items-center justify-center ">
          <button
            className=" upload-btn flex items-center justify-center  "
            onClick={handleUpload}
          >
            summarize
          </button>
        </div>
      ) : null}

      {resume ? (
        <div className="summaryContainer text-white text-left m-[30px] ">
          {resume.map((item, index) => (
            <div key={index} className=" m-[20px] ">
              <p>{formatText(item)}</p>
              <br />
              <br />
            </div>
          ))}
        </div>
      ) : null}
      <IsPlayingProvider>
        <FirstVisitSpeech scriptedTexts={scriptedTexts} pageName={'summary'}/>
        <ChatBotCanvas />
      </IsPlayingProvider>
    </div>
    
  );
}
export default Summary;
