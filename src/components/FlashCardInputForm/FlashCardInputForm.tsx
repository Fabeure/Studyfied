import { useContext, useState } from "react";
import "./FlashCardInputForm.css"; // Import your CSS file
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import FlashCard from "../flashCard/flashCard";
//import flashcard from "../../pages/FlashCards/Flashcard";

const getFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/getFlashCard`;
const saveFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/saveFlashCard`;
function FlashCardInputForm() {
  const [topic, setTopic] = useState("");
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [cards, setCards] = useState([]);
  const { user } = useContext(AuthContext);
  //var numbercards=0;
  const saveFlashCardDto: any = {
    id: "",
    userId: "",
    items: [],
  };
  const getFlashCards = async () => {
    console.log("inside the getFlashCards function user:",user);
    const path = "https://localhost:7001/api/FlashCards/generateFlashCard?topic=";
    const requestappend = path + topic + "&numberOfFlashCards=" + numberOfCards;
    axios
      .post(requestappend)
      .then((res) => {
        let flashcardstest: any = [];
        flashcardstest = Object.entries(res.data.resultItem.items).map(
          ([question, answer]) => ({
            question,
            answer,
          })
        );
        console.log("flashcardstest: ", flashcardstest);
        setCards(flashcardstest);

        // const accessToken = res.data?.accessToken;
      })
      .catch((err) => {
        console.log(err);
        alert(" | check console");
      });
  };

  const saveFlashCards = async () => {
    axios
      .post(saveFlashCardsEndpoint, saveFlashCardDto)
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

  const handleGnenerate = (event: any) => {
    event.preventDefault();

    try {
      // Additional logic for handling successful submission (optional)
      console.log("number:", numberOfCards);
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
          Give it a catchy topic, and tell us how many cards you'd like to whip
          up!
        </div>
        <div className="form ">
          <form className="form-container text-white   flex justify-around ">
            <input
              type="text"
              id="topic-input"
              name="topic-input"
              value={topic}
              onChange={handleTopicChange}
              required
              placeholder="enter your topic"
              className=" form_field w-[50%] rounded-[17px] px-[10px] placeholder-white   "
            />
            <input
              type="number"
              id="number-input"
              name="number-input"
              value={numberOfCards}
              onChange={handleNumberChange}
              required
              className=" form_field rounded-[17px] px-[10px] input-white  w-[10%] "
            />
            <button
              onClick={handleGnenerate}
              className="submit-btn text-white flex items-center rounded-[17px]  w-[12%] justify-center "
            >
              generate
            </button>
            <button
              onClick={saveFlashCards}
              className="save-btn text-white flex items-center rounded-[17px]  w-[12%] justify-center "
            >
              save
            </button>
          </form>
        </div>
      </div>
      {cards.length > 0 ? (
        <div>
          <FlashCard flashCardsProp={cards} />
        </div>
      ) : null}
    </>
  );
}

export default FlashCardInputForm;
