import React, { useState, useEffect } from "react";
import "./HomePage.css";

import { Container } from "@mui/material";
//import * as React from "react";
import addSVG from "../../assets/addgrey.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
//import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./HomePage.css";
//import { sets } from "./data";
// import { Container } from "@mui/material";*
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";


import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Home() {

  ///////// States

   const [sets, setSets] = React.useState([
    {
      id: "1",
      topic: "Maths",
      description: "Maths is the study of numbers, shapes and patterns",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "2",
      topic: "Science",
      description: "Science is the study of the world around us",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "3",
      topic: "English",
      description: "English is the study of the English language",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "4",
      topic: "History",
      description:
        "History is the study of the past History is the study of the pastHistory is the study of the past History is the study of the past",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "5",
      topic: "Geography",
      description: "Geography is the study of the earth",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "6",
      topic: "Art",
      description: "Art is the study of creativity",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "7",
      topic: "Music",
      description: "Music is the study of sound",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "8",
      topic: "Physical Education",
      description: "Physical Education is the study of physical fitness",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "9",
      topic: "Religious Education",
      description: "Religious Education is the study of religion",
      creationTime: "2021-10-10T14:48:00",
    },
    {
      id: "10",
      topic: "Computing",
      description: "Computing is the study of computers",
      creationTime: "2021-10-10T14:48:00",
    },
  ]);


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
  const L = sets.length;

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
                            height: "150px",
                          }}
                        >
                          <Typography sx={{ height: "50px" }}>
                            {set.topic}
                          </Typography>

                          <Typography
                            sx={{
                              textAlign: "left",
                              height: "75px",
                              overflow: "hidden",
                            }}
                          >
                            {set.description}
                          </Typography>
                          <Typography
                            sx={{
                              mb: 1,
                              height: "50px",
                              fontSize: "medium",
                              marginTop: 2,
                            }}
                            color="text.secondary"
                          >
                            {set.creationTime}
                          </Typography>
                        </CardContent>

                        <div className="learnmore-container">
                          <button className="learn-more" style={{}}>
                            Learn more
                          </button>
                        </div>
                      </React.Fragment>
                    </Card>
                  </div>
                );
                return null;
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
        <React.Fragment >
         <Box sx={{
             
        }}>

          <CardContent>
           
            <div className="add-icon-container">
              <img className="add-icon"  src={addSVG} alt="Icon"  />

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
              sx={{ mb: 1, fontSize: "medium", marginTop: 5,
            fontStyle: "italic",
          color: "rgba(0, 0, 0, 0.6)"}}
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
  
