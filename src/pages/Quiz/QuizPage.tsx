import {
  Box,
  Button,
  Grid,
  SxProps,
  /*TextField,*/ Theme,
} from "@mui/material";
import checkMarks from "../../assets/illustrations/quizChecks.png";
import { useState } from "react";

// const inputSx: SxProps<Theme> = {
//   flexGrow: 1,
//   [`& fieldset`]: {
//     borderRadius: "1em",
//     color: "white",
//     backgroundColor: "#1B1A29",
//   },
//   [`& label`]: {
//     // color: "rgba(255,255,255,1)",
//   },
//   [`& input`]: {
//     color: "white",
//     // backdropFilter: "blur(4px)",
//     borderRadius: "2em",
//   },
// };

const inputStyle: React.CSSProperties = {
  flexGrow: 1,
  borderRadius: "0.8em",
  color: "white",
  paddingLeft: "1.5em",
  backgroundColor: "#1B1A29",
  width: "100%",
  height: "60px",
  fontSize: "1.3rem",
};

const genButtonSx: SxProps<Theme> = {
  fontSize: "1.3rem",
  paddingY: "0.7rem",
  borderRadius: "3em",
  boxShadow: 0,
  textTransform: "none",
  backgroundImage:
    "linear-gradient(to right,#280594 15%,#9306AB 57%,#FF06C1 100%)",
  fontStyle: "italic",
  fontWeight: "bold",
  color: "white",
};

export default function QuizPage() {
  const [quizTopic, setQuizTopic] = useState<string>("");

  const handleGenQuiz = () => {
    alert(quizTopic);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuizTopic(value);
  };
  return (
    <Box
      paddingBottom={"2rem"}
      paddingTop={"1rem"}
      paddingX={"2rem"}
      minWidth={"fit-content"}
    >
      <Grid container direction={"row"} columnGap={2}>
        {/* //////////////////////// left hand side */}
        <Grid
          item
          xs
          container
          rowGap={2}
          direction={"column"}
          minWidth={"fit-content"}
        >
          <Grid item alignItems={"start"} minWidth={"max-content"}>
            <h1
              style={{
                marginTop: "20px",
                width: "fit-content",
                fontSize: "4rem",
                fontWeight: "bold",
                textAlign: "left",
                lineHeight: "1",
              }}
            >
              Test your knowledge <br />
              <span
                style={{
                  width: "fit-content",
                  fontSize: "3rem",
                  fontWeight: "100",
                  fontStyle: "italic",
                }}
              >
                What's the topic ?
              </span>
            </h1>
          </Grid>

          <Grid
            item
            container
            columnGap={6}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid item xs minWidth={"500px"}>
              <Box
                sx={{
                  background:
                    "linear-gradient(to right, rgb(187, 87, 254), rgb(112, 216, 222))",
                  padding: "4px",
                  borderRadius: "1em",
                }}
              >
                {/* <TextField
                  fullWidth
                  placeholder="The roman empire"
                  sx={inputSx}
                /> */}
                <input
                  type="text"
                  placeholder="the roman empire"
                  style={inputStyle}
                  onChange={handleInputChange}
                />
              </Box>
            </Grid>
            <Grid item xs={3} minWidth={"max-content"}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleGenQuiz}
                sx={genButtonSx}
              >
                Generate Quiz
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* //////////////////////// right hand side */}
        <Grid
          item
          xs={4}
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"end"}
          height={"520px"}
          minWidth={"fit-content"}
        >
          <Grid item>
            <img src={checkMarks} style={{ height: "300px", width: "540px" }} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
