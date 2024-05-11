import { Grid, LinearProgress } from "@mui/material";
import { QuizChoice, QuizQuestion } from "../../entities/QuizModel";
import { useEffect, useState } from "react";

interface QuestionRevealProps {
  onSubmit: () => void;
  question: QuizQuestion;
}

const answerTextStyle: React.CSSProperties = {
  fontSize: "2em",
};

const answerStyle: React.CSSProperties = {
  // backgroundColor: "#212036",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // borderStyle: "solid",
  // borderWidth: "3px",
  borderRadius: "2em",
  // borderColor: "transparent",
};

const promptStyle: React.CSSProperties = {
  fontSize: "2em",
  // backgroundColor: "green",
  textAlign: "left",
  paddingLeft: "1em",
  fontWeight: "600",
};

const Answer = ({
  choice,
  key,
  reveal,
  onClick,
}: {
  choice: QuizChoice;
  key: number;
  reveal: boolean;
  onClick: () => void;
}) => {
  const answerBg = () => {
    if (!reveal) return "#212036";
    if (choice.status) return "rgba(112, 216, 222, 0.6)";
    return "rgba(233, 6, 188, 0.6)";
  };

  const handleAnswerClick = onClick;

  return (
    <Grid
      item
      xs={5}
      key={key}
      sx={{
        height: "170px",
        padding: "3px",
        borderRadius: "2em",
        ["&:hover"]: {
          // borderColor: "yellow",
          background: !reveal
            ? "linear-gradient(to right, rgb(187, 87, 254), rgb(112, 216, 222))"
            : null,
        },
      }}
    >
      <div
        onClick={handleAnswerClick}
        style={{
          ...answerStyle,
          backgroundColor: answerBg(),
        }}
      >
        <span style={answerTextStyle}>{choice.answer}</span>
      </div>
    </Grid>
  );
};

export default function QuestionReveal({
  onSubmit,
  question,
}: QuestionRevealProps) {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (revealAnswer)
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            onSubmit();
            // return 0;
          }
          return Math.min(oldProgress + 5, 100);
        });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [onSubmit, revealAnswer]);

  const handleAnswerClick = () => {
    setRevealAnswer(true);
  };

  return (
    <Grid container direction={"column"} rowGap={3}>
      <Grid item marginTop={3}>
        <h1 style={promptStyle}>{question.prompt}</h1>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        columnGap={2}
        rowGap={2}
        // bgcolor={"red"}
        justifyContent={"center"}
      >
        {question.choices.map((choice, key) => (
          <Answer
            choice={choice}
            key={key}
            reveal={revealAnswer}
            onClick={handleAnswerClick}
          />
        ))}
      </Grid>
      <Grid item container justifyContent={"center"} marginTop={3}>
        {revealAnswer && (
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: "90%" }}
          />
        )}
      </Grid>
    </Grid>
  );
}
