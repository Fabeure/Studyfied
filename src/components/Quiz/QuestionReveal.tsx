import { Grid, LinearProgress } from "@mui/material";
import { QuizChoice, QuizQuestionFormatted } from "../../models/QuizModel";
import { useEffect, useRef, useState } from "react";

interface QuestionRevealProps {
  onSubmit: (answerStatus: boolean) => void;
  question: QuizQuestionFormatted;
}

const answerTextStyle: React.CSSProperties = {
  fontSize: "2em",
};

const answerStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2em",
  color: "white",
};

const promptStyle: React.CSSProperties = {
  fontSize: "2em",
  textAlign: "left",
  paddingLeft: "1em",
  fontWeight: "600",
  color: "white",
};

const Answer = ({
  choice,
  key,
  reveal,
  onClick,
}: {
  choice: QuizChoice;
  key: React.Key;
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
          cursor: reveal ? "unset" : "pointer",
        }}
      >
        <span style={answerTextStyle}>{choice.content}</span>
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
  const hasSubmittedRef = useRef(false);
  const [answerStatus, setAnswerStatus] = useState(false);

  useEffect(() => {
    if (revealAnswer) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            if (!hasSubmittedRef.current) {
              hasSubmittedRef.current = true;
              onSubmit(answerStatus);
            }
          }
          return Math.min(oldProgress + 5, 100);
        });
      }, 200);
      return () => {
        clearInterval(timer);
        hasSubmittedRef.current = false;
        setRevealAnswer(false);
        setProgress(0);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSubmit, revealAnswer]);

  const handleAnswerClick = (answerStatus: boolean) => {
    setRevealAnswer(true);
    setAnswerStatus(answerStatus);
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
        justifyContent={"center"}
      >
        {question.choices.map((choice, key) => (
          <Answer
            choice={choice}
            key={key}
            reveal={revealAnswer}
            onClick={() => handleAnswerClick(choice.status)}
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
