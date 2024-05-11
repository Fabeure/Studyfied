import { Box } from "@mui/material";
import { useState } from "react";
import QuestionReveal from "../../components/Quiz/QuestionReveal";
import QuestionTransition from "../../components/Quiz/QuestionTransition";

const quiz = {
  question1: [
    { answer: "fsef", status: false },
    { answer: "fsef", status: false },
    { answer: "fsef", status: false },
    { answer: "fsef", status: true },
  ],
  question2: [
    { answer: "dff", status: true },
    { answer: "fsef", status: false },
  ],
  question3: [
    { answer: "dzdqzdqzd", status: false },
    { answer: "dff", status: true },
  ],
};

const getQuestion = (index: number, quiz: object) => {
  const entries = Object.entries(quiz);
  const question = {
    prompt: entries[index][0],
    choices: entries[index][1],
  };
  console.log(question);
  return question;
};

const quizLength = (quiz: object) => {
  return Object.entries(quiz).length - 1;
};

export default function QuizPlayPage() {
  const [phase, setPhase] = useState<"transition" | "reveal" | "end">("reveal");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerSubmit = () => {
    setPhase("transition");
  };

  const handleTransition = () => {
    if (currentQuestion < quizLength(quiz)) {
      setPhase("reveal");
      setCurrentQuestion((previous) => previous + 1);
    } else setPhase("end");
  };

  return (
    <Box paddingTop={"1rem"} paddingX={"2rem"} minWidth={"fit-content"}>
      {phase == "reveal" && (
        <QuestionReveal
          question={getQuestion(currentQuestion, quiz)}
          onSubmit={handleAnswerSubmit}
        />
      )}
      {phase == "transition" && (
        <QuestionTransition onTransit={handleTransition} />
      )}
      {phase == "end" && <div>lol done</div>}
    </Box>
  );
}
