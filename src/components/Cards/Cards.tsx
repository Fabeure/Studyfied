import { useEffect, useState } from "react";
import "./Cards.css"
import { setsFromData } from "./data";
import { Card, CardContent, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import quiz from "../../assets/illustrations/quiz.png";
import flashCards from "../../assets/illustrations/flashCards.png";
import summary from "../../assets/illustrations/summary.png";
import explain from "../../assets/illustrations/explain.png";

const L = 4;
const CYCLE_TIME = 5000; // Time in milliseconds between card cycles (5 seconds)
const ANIMATION_DURATION = 500; // Animation duration in milliseconds

function Cards() {
  const [startingIndex, setStartingIndex] = useState(0);
  const [currentSets, setCurrentSets] = useState(setsFromData.slice(0, 1));

  useEffect(() => {  
    // Start the timer on component mount and update on startingIndex change
    const newTimerId = setInterval(() => {
      setStartingIndex(prevIndex => (prevIndex === L - 1 ? 0 : prevIndex + 1)); // Increment index with circular behavior
    }, CYCLE_TIME);
  
    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(newTimerId);
  }, [startingIndex]);

  useEffect(() => {
    // Add animation class on index change
    const cardContainer = document.getElementById("slider"); // Get element reference
    if (cardContainer) {
      cardContainer.classList.add("fade-out");
      setTimeout(() => {
        setCurrentSets(setsFromData.slice(startingIndex, startingIndex + 1));
        cardContainer.classList.remove("fade-out");
        cardContainer.classList.add("fade-in");
        setTimeout(() => {
          cardContainer.classList.remove("fade-in");
        }, ANIMATION_DURATION);
      }, ANIMATION_DURATION);
    }
  }, [startingIndex]);

  function handleArrowClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const btn = event.currentTarget.name;
    if (btn === "prevButton") {
      setStartingIndex(prevIndex => (prevIndex === 0 ? L - 1 : prevIndex - 1));
    }
    if (btn === "nextButton") {
      setStartingIndex(prevIndex => (prevIndex === L - 1 ? 0 : prevIndex + 1));
    }
  }
  return (
    <div className="sets-container">
    <div className="navigation-buttons">
      <button
        className="Scroll-Btn Prev-Btn"
        name="prevButton"
        onClick={handleArrowClick}
      >
        <ArrowBackIosNewIcon className="arrow-icon" />
      </button>
      <button
        className="Scroll-Btn Next-Btn"
        name="nextButton"
        onClick={handleArrowClick}
      >
        <ArrowForwardIosIcon className="arrow-icon" />
      </button>
    </div>
    <div
      id="slider"
      className="flex flex-row space-x-7 justify-center card-container"
      style={{
        margin: "100px",
      }}
    >
      {currentSets.map((set) => {
        let icon = "";

        switch (set.icon) {
          case "summary":
            icon = summary;
            break;
          case "explain":
            icon = explain;
            break;
          case "quiz":
            icon = quiz;
            break;
          default:
            icon = flashCards;
            break;
        }
        return (
          <div key={set.id}>
            <Card
              variant="outlined"
              sx={{
                border: "1px solid #f3f2f2",
                borderRadius: 7,
                boxShadow: " 0px 5px 6px 2px rgba(0, 0, 0, 0.3)",
                width: { md: 650, sm: 400, xs: 250 },
                height: { m: 300, sm: 200, xs: 150 },
              }}
              className="card"
            >
              <div className="left-card-content">
                <img src={icon} alt="icon" className="card-icon" />
              </div>
              <div className="right-card-content">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <p className="card-topic">{set.topic}</p>

                  <Typography
                    sx={{
                      textAlign: "left",
                      overflow: "hidden",
                    }}
                  >
                    {set.description}
                  </Typography>
                </CardContent>
                <div className="learnmore-container">
                  <button className="learn-more">Try it now !</button>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  </div>
  )
}
export default Cards;