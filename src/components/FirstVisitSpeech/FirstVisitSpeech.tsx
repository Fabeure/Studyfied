import {  useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/IsPlayingContext";
import axios from "axios";

function FirstVisitSpeech({ scriptedTexts, pageName }: { scriptedTexts: string[], pageName: string }) {

  const { isPlaying, setIsPlaying } = useContext(AppContext);
  const [audioUrl, setAudioUrl] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [play , setIsPLay] = useState(false);


  const generateSpeech = async (textToSpeak: string) => {
    try {
      const response = await axios.post(
        "https://texttospeech-api.onrender.com/api/generate-speech",
        {
          text: textToSpeak,
          voice: "s3://voice-cloning-zero-shot/44f32760-8f41-4dfb-b192-ca077fc501ea/original/manifest.json",
        },
        { responseType: "arraybuffer" }
      );

      const blob = new Blob([response.data], { type: "audio/mpeg" });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error generating speech:", error);
      throw new Error("Failed to generate speech");
    }
  };

 
  const  [isFirstVisit] = useState(() => {
    const visitKey = `visited_${pageName}`;
    const first = localStorage.getItem(visitKey);
    
    return first !== "false";

    });
  

  useEffect(() => {
    console.log(isFirstVisit, isPlaying);
    const scriptedText = isFirstVisit ? scriptedTexts[Math.floor(Math.random() * 3)] : scriptedTexts[3 + Math.floor(Math.random() * 3)];
    localStorage.setItem(`visited_${pageName}`, "false");
    console.log("audio");
    console.log("audio2");
    const speakScriptedText = async () => {
      const url = await generateSpeech(scriptedText);
      setAudioUrl(url);
      setIsPLay(true);
    }
    speakScriptedText();
  }, []);

 useEffect(() => {
    if (audioUrl && hasInteracted) {
      const audio = new Audio(audioUrl);
      setIsPlaying(true);
      audio.play().then(() => {
        audio.onended = () => {
          setIsPlaying(false);
        };
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  }, [hasInteracted && play]);

  useEffect(() => {
    const handleUserInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keypress", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keypress", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keypress", handleUserInteraction);
    };
  }, []);

  return null;
}

export default FirstVisitSpeech;
