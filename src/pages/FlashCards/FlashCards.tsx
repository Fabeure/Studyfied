import FlashCardInputForm from "../../components/FlashCardInputForm/FlashCardInputForm";
import { FlashcardModel } from "../../models/flashcardModel";
import { useLocation } from "react-router-dom";
 import HowItWorks from "../../components/HowItWorks/HowItWorks";
import flashCards from "../../assets/demo/flashcard.png";
import { useEffect, useState } from "react"; 
function FlashCardsPage() {
  const location = useLocation();
  const flashCard = location.state?.savedFlashCard as FlashcardModel;

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
    </div>
  );
}

export default FlashCardsPage;