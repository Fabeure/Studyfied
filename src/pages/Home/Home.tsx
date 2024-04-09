import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import quiz from "../../assets/illustrations/quiz.png";
import flashCards from "../../assets/illustrations/flashCards.png";
import summary from "../../assets/illustrations/summary.png";
import explain from "../../assets/illustrations/explain.png";
import { setsFromData } from "./data";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const L = 4;
function Home() {
  const [startingIndex, setStartingIndex] = useState(0);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [currentSets, setCurrentSets] = useState(setsFromData.slice(0, 1));

  useEffect(() => {
    setCurrentSets(setsFromData.slice(startingIndex, startingIndex + 1));
    setDisableNextBtn(startingIndex >= L - 1);
    setDisablePrevBtn(startingIndex == 0);
  }, [startingIndex]);

  function handleArrowClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const btn = event.currentTarget.name;
    if (btn === "prevButton") {
      setStartingIndex(Math.max(startingIndex - 1, 0));
    }
    if (btn === "nextButton") {
      setStartingIndex(Math.min(startingIndex + 1, L));
    }
  }

  return (
    <div className="page-content ">
      <ToastContainer />
      <div className="sets-container">
        <div className="navigation-buttons">
          <button
            className="Scroll-Btn Prev-Btn"
            name="prevButton"
            disabled={disablePrevBtn}
            onClick={handleArrowClick}
          >
            <ArrowBackIosNewIcon className="arrow-icon" />
          </button>
          <button
            className="Scroll-Btn Next-Btn"
            name="nextButton"
            disabled={disableNextBtn}
            onClick={handleArrowClick}
          >
            <ArrowForwardIosIcon className="arrow-icon" />
          </button>
        </div>
        <div
          id="slider"
          className="flex flex-row space-x-7 justify-center card-container  "
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
    </div>
  );
}
export default Home;
