import FlashCardInputForm from "../../components/FlashCardInputForm/FlashCardInputForm";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import flashCards from "../../assets/demo/flashcard.png";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
function FlashCardsPage() {
  const { user } = useAuth();
  const [firstTime, setFirstTime] = useState(false);
  //check if it's the first time the user use the app
  //if it's the first time, show the how it works component
  return (
    <div>
      {firstTime ? (
        <HowItWorks
          image={{ url: flashCards }}
          steps={[
            {
              text: "Choose a title for your new set of flash cards! You can re-use this set once you save it.",
            },
            {
              text: "Provide a topic or paste your study notes in. The generated flash cards will contain relevant information",
            },
            {
              text: "Click generate. After a few seconds, your flash cards are ready! You can edit each one to your liking.",
            },
          ]}
        />
      ) : null}

      <FlashCardInputForm />
    </div>
  );
}

export default FlashCardsPage;
