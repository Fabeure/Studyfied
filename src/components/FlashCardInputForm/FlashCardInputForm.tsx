import { useContext, useState } from "react";
import "./FlashCardInputForm.css"; // Import your CSS file
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import FlashCards from "../flashCards/flashCards";
//import flashcard from "../../pages/FlashCards/Flashcard";
interface FlashCardDto {
  topic: String;
  numberOfCards?: number;
}
const flashCards = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 2", answer: "Answer 2" },
];
const getFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/getFlashCard`;

function FlashCardInputForm() {
  const [topic, setTopic] = useState("");
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [cards, setCards] = useState([]);
  const { user } = useContext(AuthContext);

  const flashcardDto: FlashCardDto = {
    topic: topic,
    numberOfCards: numberOfCards,
  };
  const getFlashCards = async () => {
    axios
      .post(getFlashCardsEndpoint, { topic })
      .then((res) => {
        console.log(user);
        console.log("inside the axios flashcard post request");
        console.log(res);
        console.log(res.data);
        // const accessToken = res.data?.accessToken;
       
      })
      .catch((err) => {
        console.log(err);
        alert(" | check console");
      });
  };
  const handleTopicChange = (event: any) => {
    setTopic(event.target.value);
  };

  const handleNumberChange = (event: any) => {
    setNumberOfCards(event.target.value);
  };

  const handleTopicSubmit = (event: any) => {
    event.preventDefault();

    try {
      // Additional logic for handling successful submission (optional)
      console.log("Title:", numberOfCards);
      console.log("Topic:", topic);
      getFlashCards();
    } catch (error) {
      console.error("Error handling form submission:", error);
      // Handle error gracefully, e.g., display an error message to the user
    }
  };

  return (
    <>
      <div className="flashcard-input-form text-left mt-[20px] md:text-[17px] text-[14px]  ">
        <div className="ml-[30px] text-white ">
          Give it a catchy title, and tell us how many cards you'd like to whip
          up!
        </div>
        <div className="form ">
          <form
            onSubmit={handleTopicSubmit}
            className="form-container text-white   flex justify-around "
          >
            <input
              type="text"
              id="topic-input"
              name="topic-input"
              value={topic}
              onChange={handleTopicChange}
              required
              placeholder="enter your topic"
              className=" form_field w-[50%] rounded-[7px] placeholder-white   "
            />
            <input
              type="number"
              id="number-input"
              name="number-input"
              value={numberOfCards}
              onChange={handleNumberChange}
              required
              className=" form_field rounded-[7px]  input-white  w-[10%] "
            />
            <button className="submit-btn text-white flex items-center w-[12%] justify-center ">
              generate
            </button>
          </form>
        </div>
      </div>
      {flashCards.length > 0 ? (
        <div>
          <FlashCards flashCards={flashCards} />
        </div>
      ) : null}
    </>
  );
}

export default FlashCardInputForm;
