import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./FlashCardInputForm.css"; // Import your CSS file
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import FlashCard from "../flashCard/flashCard";
import { CircularProgress } from "@mui/material";
import { FlashcardItem, FlashcardModel } from "../../models/flashcardModel";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const generateFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/generateFlashCard`;
const saveFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/persistFlashCard`;

function FlashCardInputForm(existingFlashCard: FlashcardModel) {
  const [topic, setTopic] = useState("");
  const [numberOfCards, setNumberOfCards] = useState(5);
  const [cards, setCards] = useState<Array<FlashcardItem>>([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [loadSave, setLoadSave] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [flashcardsItems, setFlashcardsItems] = useState<Array<FlashcardItem>>(
    []
  );

  useEffect(() => {
    console.log("here");
    if (existingFlashCard?.userId !== "") {
      setTopic("");
      const existingFlashCards: FlashcardItem[] = Object.entries(
        existingFlashCard.items as unknown as Items
      ).map(([question, answer]): FlashcardItem => ({ question, answer }));
      setCards(existingFlashCards);
    }
  }, [existingFlashCard]);

  interface Items {
    [key: string]: string;
  }

  const getFlashCards = async () => {
    const params = {
      topic: encodeURIComponent(topic || "the roman empire"),
      numberOfFlashCards: numberOfCards || 5,
      token: user.accessToken,
    };
    axios
      .post(generateFlashCardsEndpoint, {}, { params })
      .then((res) => {
        setFlashcardsItems(res.data.resultItem.items as Array<FlashcardItem>);
        let flashcardstest: Array<FlashcardItem> = [];

        flashcardstest = Object.entries(res.data.resultItem.items as Items).map(
          ([question, answer]): FlashcardItem => ({ question, answer })
        );
        setCards(flashcardstest);
      })
      .catch((err) => {
        console.log(err);
        alert(" error generating flash cards | check console");
      })
      .finally(() => {
        setLoading(false);
        setHasGenerated(true);
        setHasSaved(false);
      });
  };

  const saveFlashCards = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoadSave(true);

    const flashCardToSave: FlashcardModel = {
      userId: user?.userId || "NA",
      items: flashcardsItems,
    };
    const params = { token: user.accessToken };
    axios
      .post(saveFlashCardsEndpoint, flashCardToSave, { params })
      .then((res) => {
        if (res.data.isSuccess) {
          setHasSaved(true);
          setHasGenerated(false);
        } else alert(res.data.userMessage);
      })
      .catch((err) => {
        console.log(err);
        alert("error saving flash cards | check console");
      })
      .finally(() => {
        setLoadSave(false);
      });
  };

  const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTopic(value);
  };

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const valueInt = parseInt(value);
    setNumberOfCards(valueInt);
  };

  const handleGenerate = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    setHasSaved(false);
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
              placeholder={
                existingFlashCard.userId != "" ? "" : "the roman empire"
              }
              className=" form_field w-[50%] rounded-[17px] px-[10px] placeholder-white   "
            />
            <input
              type="number"
              id="number-input"
              name="number-input"
              value={numberOfCards}
              placeholder="5"
              onChange={handleNumberChange}
              required
              className=" form_field rounded-[17px] px-[10px] input-white  w-[10%] "
            />
            <button
              onClick={handleGenerate}
              className="submit-btn text-white flex items-center rounded-[17px]  w-[12%] justify-center "
              disabled={loading || loadSave}
            >
              {!loading && "Generate"}
              {loading && (
                <CircularProgress sx={{ color: "rgba(255,255,255,0.7)" }} />
              )}
            </button>
            <button
              disabled={hasSaved || !hasGenerated || loadSave || loading}
              onClick={saveFlashCards}
              className={`save-btn ${hasSaved ? "saved-btn" : ""} ${hasGenerated || hasSaved ? "text-white" : "text-purple-700"}  flex items-center rounded-[17px]  w-[12%] justify-center `}
            >
              {!loadSave && !hasSaved && "Save"}
              {loadSave && (
                <CircularProgress sx={{ color: "rgba(255,255,255,0.7)" }} />
              )}
              {!loadSave && hasSaved && <CheckRoundedIcon />}
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
