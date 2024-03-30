import React, { useState, useEffect } from "react";
import "./HomePage.css";

import { Container } from "@mui/material";
import addSVG from "../../assets/addgrey.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import "./HomePage.css";

const L=4;
function Home() {

  const [sets, setSets] = React.useState([
    {
      id: "1",
      topic: "Summary",
      description:
      "Effortlessly condense long texts into concise summaries for quick understanding."
        },
    {
      id: "2",
      topic: "Flash cards",
      description: "Create interactive study aids from any content to enhance learning and retention."
    },
    {
      id: "3",
      topic: "Quiz",
      description: "Engage users with customized quizzes that test knowledge and promote active learning.",
    },
    {
      id: "4",
      topic: "Explain",
      description:
        "Gain deep insights and understanding with AI-generated explanations.",
    },
  ]);

  const [startingIndex, setStartingIndex] = useState(0);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [currentSets, setCurrentSets] = useState(sets.slice(0, 1));

  useEffect(
    () => {
      setCurrentSets(sets.slice(startingIndex, startingIndex + 1));
      setDisableNextBtn(startingIndex >= L - 1);
      setDisablePrevBtn(startingIndex == 0);
    },
    [startingIndex]
  );

  function handleArrowClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const btn = event.currentTarget.name;
    if (btn === "prevButton") {
      setStartingIndex(Math.max(startingIndex - 1, 0));
    }
    if (btn === "nextButton") {
      setStartingIndex(Math.min(startingIndex + 1, L));
    }
  }

  // const bull = (
  //   <Box
  //     component="span"
  //     sx={{
  //       bgcolor: "tomato",
  //       display: "inline-block",
  //       mx: "7px",
  //       transform: "scale(0.8)",
  //     }}
  //   >
  //     •
  //   </Box>
  // );

  return (
    <div className="page-content m-5">
      {sets.length !== 0 ? (
        <>
          <div className="sets-container">
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
                        width: 650,
                        height: 300,
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
                          <p className="card-topic" >
                            {set.topic}
                          </p>

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
                          <button className="learn-more" >
                            Learn more
                          </button>
                        </div>
                      </React.Fragment>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navigation-buttons" style={{}}>
            <button
              className="Scroll-Btn Prev-Btn"
              name="prevButton"
              disabled={disablePrevBtn}
              onClick={handleArrowClick}
            >
              <ArrowBackIosNewIcon />
            </button>
            <button
              className="Scroll-Btn Next-Btn"
              name="nextButton"
              disabled={disableNextBtn}
              onClick={handleArrowClick}
            >
              <ArrowForwardIosIcon />
            </button>
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
            <Box sx={{}}>
              <CardContent>
                <div className="add-icon-container">
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
            </Box>
            <CardActions></CardActions>
          </React.Fragment>
        </Card>
      )}
    </div>
  );
}
export default Home;
