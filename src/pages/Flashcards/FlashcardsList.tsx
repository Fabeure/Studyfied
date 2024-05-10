import { useState } from "react";
import Flashcard from "./Flashcard";
import "./Flashcards.css";
import axios from "axios";
import flashcardModel from "../../models/flashcardModel";

function FlashcardsList() {
  const flashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/v1/flashcards`;

  // const flashcards = [
  //   { id: "1", question: "What is 2+2?", answer: "4" },
  //   { id: "2", question: "What is 3+3?", answer: "6" },
  //   { id: "3", question: "What is 4+4?", answer: "8" },
  //   { id: "4", question: "What is 5+5?", answer: "10" },
  //   { id: "5", question: "What is 6+6?", answer: "12" },
  // ];
  const [flashcards, setFlashCards] = useState([]);

  const fetchFlashCards = async () => {
    try {
      const response = await axios.get(flashCardsEndpoint);
      setFlashCards(response.data); // Update flash cards state with the retrieved data
    } catch (error) {
      console.error("Error fetching flash cards:", error);
      // Handle error (e.g., show a message to the user)
    }
  };
  fetchFlashCards();
  return (
    <div className=" flex justify-center flex-wrap flex-row cards-container  ">
      {flashcards.map((flashcard: flashcardModel) => {
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
