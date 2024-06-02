import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./SavedFlashCards.css";
import axios from "axios";
import { FlashcardModel } from "../../models/flashcardModel";

const getSavedFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/getFlashCardsByUserId`;

function SavedFlashCards() {
  const { user } = useContext(AuthContext);
  const [savedSets, setSavedSets] = useState<FlashcardModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          userId: encodeURIComponent(user?.userId),
        };

        const response = await axios.get(getSavedFlashCardsEndpoint, {
          params,
        });
        console.log(response.data);
        const fetchedSets = response.data.resultItem as FlashcardModel[]; // Cast to FlashcardModel[] for type safety
        console.log(fetchedSets);
        setSavedSets(fetchedSets);
        console.log("result: ", savedSets);
      } catch (err) {
        console.error("Error fetching saved flash cards:", err);
        alert(
          "An error occurred while fetching your saved sets. Please check the console for details."
        );
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="content flex items-center justify-center">
      <div className="backButton flex flex-wrap  items-center justify-center gap-[100px]  cursor-pointer">
        {savedSets.map((savedSet) => (
          <div
            className="savedSet w-[400px] h-[150px] flex items-center justify-center  "
            key={savedSet.id}
            onClick={() => {
              navigate("/flashcards", {
                state: { savedFlashCard: savedSet },
              });
            }}
          >
            <div className="savedSetText  text-white w-[400px] h-[150px] flex items-center justify-center ">
              <div>{Object.keys(savedSet.items)[0]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedFlashCards;
