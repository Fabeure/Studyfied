import { Button, Grid, SxProps, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuizResultProps {
  totalQuestions: number;
  correctAnswers: number;
}

const returnButtonSx: SxProps<Theme> = {
  marginTop: "50px",
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

const titleStyle: React.CSSProperties = {
  marginTop: "20px",
  width: "fit-content",
  fontSize: "4rem",
  fontWeight: "bold",
  textAlign: "left",
  lineHeight: "1",
  color: "white",
};

export default function QuizResult({
  totalQuestions,
  correctAnswers,
}: QuizResultProps) {
  const [paperBg, setPaperBg] = useState<string>(
    "linear-gradient(to top,rgba(3, 227, 252,0.1) 0%,rgba(3, 252, 102,0.25) 100%)"
  );
  const [comment, setComment] = useState("well done");
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    const performance = correctAnswers / totalQuestions;
    let text = "it's too easy";
    let gradient =
      "linear-gradient(to top,rgba(3, 227, 252,0.1) 0%,rgba(3, 252, 102,0.25) 100%)";
    if (performance == 0) {
      text = "smooth brain";
      gradient =
        "linear-gradient(to top,rgba(3, 227, 252,0.07) 0%,rgba(252, 94, 3,0.25) 100%)";
    } else if (performance < 0.4) {
      text = "skill issue";
      gradient =
        "linear-gradient(to top,rgba(3, 227, 252,0.07) 0%,rgba(252, 219, 3,0.25) 100%)";
    } else if (performance < 0.6) {
      text = "you can do better";
      gradient =
        "linear-gradient(to top,rgba(3, 227, 252,0.1) 0%,rgba(152, 252, 3,0.35) 100%)";
    } else if (performance < 0.9) {
      text = "well done";
      gradient =
        "linear-gradient(to top,rgba(3, 227, 252,0.1) 0%,rgba(53, 252, 3,0.25) 100%)";
    }
    setPaperBg(gradient);
    setComment(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container rowGap={4} justifyContent={"center"}>
      <Grid item xs={12} marginTop={3}>
        <h1 style={titleStyle}>And the results are in </h1>
      </Grid>
      <Grid item container justifyContent={"center"}>
        <Grid
          item
          sx={{
            width: "fit-content",
            padding: "32px",
            borderRadius: "1em",
            background: paperBg,
          }}
        >
          <span
            style={{
              width: "fit-content",
              fontSize: "3rem",
              fontWeight: "100",
              color: "white"
            }}
          >
            You got {correctAnswers} out of {totalQuestions} questions right
            <br />
            <span style={{ fontStyle: "italic" }}>{comment}</span>
          </span>
        </Grid>
      </Grid>
      <Grid item flexDirection={"row"} xs={3} minWidth={"max-content"}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleReturn}
          sx={returnButtonSx}
        >
          Go back
        </Button>
      </Grid>
    </Grid>
  );
}
