import React, { useState, useEffect } from "react";
import "./HomePage.css";

import { Container, iconButtonClasses } from "@mui/material";
import addSVG from "../../assets/addgrey.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
//import{ quiz, flashCards, summary, explain} from "../../assets/illustrations";
import quiz from "../../assets/illustrations/quiz.png";
import flashCards from "../../assets/illustrations/flashCards.png";
import summary from "../../assets/illustrations/summary.png";
import explain from "../../assets/illustrations/explain.png";
import { setsFromData } from "./data";
const L = 4;
function Home() {
  const [sets, setSets] = React.useState(setsFromData);

  const [startingIndex, setStartingIndex] = useState(0);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [currentSets, setCurrentSets] = useState(sets.slice(0, 1));

  useEffect(() => {
    setCurrentSets(sets.slice(startingIndex, startingIndex + 1));
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
      {sets.length !== 0 ? (
        <>
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
                return (
                  <div>
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
                      <React.Fragment>
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            height: "150px",
                          }}
                        >
                          <p className="card-topic">{set.topic}</p>

                          <Typography
                            sx={{
                              textAlign: "left",
                              height: "150px",
                              overflow: "hidden",
                            }}
                          >
                            {set.description}
                          </Typography>
                        </CardContent>

                        <div className="learnmore-container">
                          <button className="learn-more">Try it now !</button>
                        </div>
                      </React.Fragment>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          {/**/}
        </>
      ) : (
        <Card
          variant="outlined"
          sx={{
            border: "1px solid #f3f2f2",
            borderRadius: 7,
            boxShadow: " 0px 5px 6px 1px rgba(0, 0, 0, 0.2)",
            width: 275,
            bgcolor: "rgba(243, 242, 242, 0.5)",
          }}
          className="add-card"
        >
          <React.Fragment>
            <div className="card-content">
              <div className="left-content">
                <img src="{set.icon}" alt="" />
              </div>
              <div className="right-card-content">
                <CardContent>
                  <div className="add-card-icon-container">
                    <img className="add-icon" src={addSVG} alt="Icon" />
                  </div>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      mb: 1,
                      fontSize: "medium",
                      marginTop: 5,
                      fontStyle: "italic",
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                    color="text.secondary"
                  >
                    create a new set
                  </Typography>
                </CardContent>
              </div>
            </div>
            <CardActions></CardActions>
          </React.Fragment>
        </Card>
      )}
    </div>
  );
}
export default Home;
