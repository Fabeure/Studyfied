import FlashCardInputForm from "../../components/FlashCardInputForm/FlashCardInputForm";
import { FlashcardModel } from "../../models/flashcardModel";
import { useLocation } from "react-router-dom";
 import HowItWorks from "../../components/HowItWorks/HowItWorks";
import flashCards from "../../assets/demo/flashcard.png";
import { useEffect, useState } from "react"; 
import { IsPlayingProvider } from "../../context/IsPlayingContext";
import { ChatBotCanvas } from "../../components/ChatBotCanvas/ChatBotCanvas";
import FirstVisitSpeech from "../../components/FirstVisitSpeech/FirstVisitSpeech";


function FlashCardsPage() {
  const location = useLocation();
  const flashCard = location.state?.savedFlashCard as FlashcardModel;

  const scriptedTexts = [
    `Welcome to the Flashcard Page! Ready to boost your knowledge on any topic? Just enter a subject, and I'll generate flashcards for you in a flash!`,
    `Exciting to see you here! Let's make learning fun and interactive. Type in a topic, and let's get started on creating some awesome flashcards!.`,
    `First time here? No problem! I'm here to help you learn efficiently. Pick a topic, and watch how quickly we can turn it into a set of useful flashcards.`,
    `Welcome back to the Flashcard Page! Let's continue mastering new topics. What subject are we diving into today?`,
    `Great to see you again! Ready to conquer another topic? Enter your subject, and let's get those flashcards ready to enhance your learning journey.`,
    `You're back! Awesome! Consistency is key to learning. What topic are we exploring this time? Let's make some more flashcards together!`
  ];

  const [firstTime] = useState(() => {
    const first = localStorage.getItem("firstTime");
    return first !== "false";
  });

  useEffect(() => {
   
    if (firstTime) {
      localStorage.setItem("firstTime", "false");
    }
  
  }, [firstTime]);
  



  
  return (
    <div>
    {firstTime && (
        <HowItWorks
          image={{ url: flashCards }}
          steps={[
            {
              text: "Choose a title for your new set of flash cards! You can re-use this set once you save it.",
            },
            {
              text: "Provide a topic or paste your study notes in. The generated flash cards will contain relevant information.",
            },
            {
              text: "Click generate. After a few seconds, your flash cards are ready! You can edit each one to your liking.",
            },
          ]}
        />
      )}
      <FlashCardInputForm userId={flashCard ? flashCard.userId : ""} items={flashCard ? flashCard.items : []} />
      <IsPlayingProvider>
        <FirstVisitSpeech scriptedTexts={scriptedTexts} pageName={'flashcard'}/>
        <ChatBotCanvas />
      </IsPlayingProvider>
    </div>
  );
}

export default FlashCardsPage;