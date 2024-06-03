import {
  Box,
  Button,
  CircularProgress,
  Grid,
  SxProps,
  Theme,
} from "@mui/material";
import checkMarks from "../../assets/illustrations/quizChecks.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../models/QuizModel";
import axios from "axios";
import QuizSelection from "../../components/Quiz/QuizSelection";

const inputStyle: React.CSSProperties = {
  flexGrow: 1,
  borderRadius: "0.8em",
  color: "white",
  paddingLeft: "1.2em",
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

// const quizEndpoint = `${process.env.VITE_BACKEND_API}/api/Quiz/getQuiz`;
const quizEndpoint = `${process.env.VITE_BACKEND_API}/api/Quiz/getQuiz`;

export default function QuizPage() {
  const [quizTopic, setQuizTopic] = useState<string>("");
  const [quizLength, setQuizLength] = useState(4);
  const [quizDifficulty, setQuizDifficulty] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (generatedQuiz)
      navigate("/quizPlay", {
        state: { quiz: generatedQuiz as Quiz },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generatedQuiz]);

  const fetchQuiz = () => {
    const params = {
      topic: encodeURIComponent(quizTopic || "the roman empire"),
      difficulty: quizDifficulty,
      numberOfQuestion: quizLength,
    };
    axios
      .post(quizEndpoint, {}, { params })
      .then((response) => {
        if (response.data.isSuccess) {
          const { resultItem } = response.data;
          setGeneratedQuiz(resultItem);
        } else {
          alert(response.data.userMessage);
          console.error(response.data);
        }
      })
      .catch((err) => {
        alert("An error occured");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGenQuiz = () => {
    setLoading(true);
    fetchQuiz();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuizTopic(value);
  };

  const handleLengthChange = (length: number | string) => {
    setQuizLength(length as number);
  };

  const handleDifficultyChange = (diff: number | string) => {
    setQuizDifficulty(diff as string);
  };

  return (
    <Box component="div"
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
                color: "white"
              }}
            >
              Test your knowledge <br />
              <span
                style={{
                  width: "fit-content",
                  fontSize: "3rem",
                  fontWeight: "100",
                  fontStyle: "italic",
                  color: "white"
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
              <Box component="div"
                sx={{
                  background:
                    "linear-gradient(to right, rgb(187, 87, 254), rgb(112, 216, 222))",
                  padding: "4px",
                  borderRadius: "1em",
                }}
              >
                <input
                  type="text"
                  placeholder="the roman empire"
                  style={inputStyle}
                  onChange={handleInputChange}
                  value={quizTopic}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            columnGap={2}
            alignItems={"center"}
            direction={"row"}
          >
            <Grid item xs>
              <QuizSelection
                options={[1, 2, 3, 4, 5, 6, 7, 8]}
                defaultValue={4}
                onChange={handleLengthChange}
              />
            </Grid>
            <Grid item xs>
              <QuizSelection
                options={["easy", "medium", "hard"]}
                defaultValue={"medium"}
                onChange={handleDifficultyChange}
              />
            </Grid>
            <Grid item xs>
              <Box component="div" sx={{ textAlign: "left", fontSize: "1.3rem" }}>
                <h1
                  style={{
                    width: "fit-content",
                    fontSize: "2rem",
                    fontWeight: "100",
                    fontStyle: "italic",
                    color: "white"
                  }}
                >
                  questions.
                </h1>
              </Box>
            </Grid>
            <Grid item xs={3} minWidth={"max-content"}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleGenQuiz}
                sx={genButtonSx}
                disabled={loading}
              >
                {!loading && "Generate Quiz"}
                {loading && (
                  <CircularProgress sx={{ color: "rgba(255,255,255,0.7)" }} />
                )}
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
          height={"320px"}
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
