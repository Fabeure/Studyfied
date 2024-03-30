import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./HomePage.css";
import { sets } from "./data";
// import { Container } from "@mui/material";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

const L = sets.length;

function Home() {
  ///////// States
  const [startingIndex, setStartingIndex] = useState(0);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [currentSets, setCurrentSets] = useState(sets.slice(0, 3));

  ///~~~~~~~~ Executes a function when a state change is detected
  useEffect(
    () => {
      //~~ instructions to execute when a state change is detected :
      setCurrentSets(sets.slice(startingIndex, startingIndex + 3));
      setDisableNextBtn(startingIndex >= L - 3);
      setDisablePrevBtn(startingIndex == 0);
    },
    //~~  the state you want to watch :
    [startingIndex]
  );

  ///~~~~~~~~ nav arrow click handler
  function handleArrowClick(event: React.MouseEvent<HTMLButtonElement>): void {
    const btn = event.currentTarget.name;
    if (btn === "prevButton") {
      setStartingIndex(Math.max(startingIndex - 3, 0));
    }
    if (btn === "nextButton") {
      setStartingIndex(Math.min(startingIndex + 3, L));
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
      {currentSets.length !== 0 ? (
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
                  <Card
                    variant="outlined"
                    sx={{
                      border: "1px solid #f3f2f2",
                      borderRadius: 7,
                      boxShadow: " 0px 5px 6px 1px rgba(0, 0, 0, 0.2)",
                      width: 275,
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
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            textWeight: "bold",
                            textTransform: "capitalize",
                            marginLeft: 1,
                            marginTop: 1,
                            marginBottom: 2,
                          }}
                          component="div"
                        >
                          {set?.topic}
                        </Typography>

                        <Typography sx={{ textAlign: "left" }}>
                          {set?.description}
                        </Typography>
                        <Typography
                          sx={{ mb: 1, fontSize: "medium", marginTop: 2 }}
                          color="text.secondary"
                        >
                          {set?.creationTime}
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <button className="learn-more" style={{}}>
                          Learn more
                        </button>
                      </CardActions>
                    </React.Fragment>
                  </Card>
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
        </>
      ) : (
        <Card
          variant="outlined"
          sx={{
            border: "1px solid #f3f2f2",
            borderRadius: 7,
            boxShadow: " 0px 5px 6px 1px rgba(0, 0, 0, 0.2)",
            width: 275,
            bgcolor: "#f3f2f2",
          }}
          className="add-card"
        >
          <React.Fragment>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div className="add-icon">
                <AddCircleOutlineIcon />
              </div>

              <Typography
                sx={{ mb: 1, fontSize: "medium", marginTop: 2 }}
                color="text.secondary"
              >
                create a new set
              </Typography>
            </CardContent>

            <CardActions></CardActions>
          </React.Fragment>
        </Card>
      )}
    </div>
  );
}
export default Home;
  
