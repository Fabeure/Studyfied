import TextToSpeech from "../../components/TextToSpeech/TextToSpeech";
import { IsPlayingProvider } from "../../context/IsPlayingContext";
import { ChatBotCanvas } from "../../components/ChatBotCanvas/ChatBotCanvas";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import chatbots from "../../assets/demo/chatbot.png";
import { useEffect, useState } from "react";


export default function Home() {



  const  [isFirstVisit] = useState(() => {
    const visitKey = `visited_bot`;
    const first = localStorage.getItem(visitKey);

    return first !== "false";

    });

    useEffect(() => {
   
      if (isFirstVisit) {
        localStorage.setItem("visited_bot", "false");
      }
    
    }, [isFirstVisit]);

  return (
    <main className="h-full">
      {isFirstVisit && (
        <HowItWorks
          image={{ url:chatbots }}
          steps={[
            {
              text: "Simply type in any study-related question or topic. Your AI Study Buddy can provide explanations, summaries, and answers to help you understand better.",
            },
           
          ]}
        />
      )}
      <IsPlayingProvider>
        <TextToSpeech />
        <ChatBotCanvas />
      </IsPlayingProvider>
    </main>
  );
}
