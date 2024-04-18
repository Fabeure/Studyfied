import Flashcard from "./Flashcard";
import "./Flashcards.css";
const flashcards = [
  { id: "1", question: "What is 2+2?", answer: "4" },
  { id: "2", question: "What is 3+3?", answer: "6" },
  { id: "3", question: "What is 4+4?", answer: "8" },
  { id: "4", question: "What is 5+5?", answer: "10" },
  { id: "5", question: "What is 6+6?", answer: "12" },
];

function FlashcardsList() {
  return (
    <div className=" flex justify-center flex-wrap flex-row cards-container  ">
      {flashcards.map((flashcard) => {
        return (
          <div className="card-container h-200  mx-5">
            <Flashcard flashcard={flashcard} key={flashcard.id} />
          </div>
        );
      })}
    </div>
  );
}
export default FlashcardsList;
