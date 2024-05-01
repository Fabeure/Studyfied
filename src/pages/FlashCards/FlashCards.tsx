import FlashCardInputForm from "../../components/FlashCardInputForm/FlashCardInputForm";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import flashCards from "../../assets/illustrations/flashCards.png";

function FlashCardsPage() {
  return (
    <div>
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
      <FlashCardInputForm />
    </div>
  );
}

export default FlashCardsPage;
