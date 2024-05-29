import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionReveal from "../../components/Quiz/QuestionReveal";
// import QuestionTransition from "../../components/Quiz/QuestionTransition";
import QuizResult from "../../components/Quiz/QuizResult";
import { useLocation } from "react-router-dom";

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
  return Object.entries(quiz).length;
};

export default function QuizPlayPage() {
  const [phase, setPhase] = useState<"transition" | "reveal" | "end">("reveal");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const location = useLocation();
  const { quiz } = location.state;

  useEffect(() => {
    if (!quiz) {
      alert("quiz wasnt generated");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerSubmit = (answerStatus: boolean) => {
    // setPhase("transition");
    if (answerStatus) setCorrectAnswers((answers) => answers + 1);

    if (currentQuestion < quizLength(quiz) - 1) {
      // setPhase("reveal");
      setCurrentQuestion((previous) => previous + 1);
    } else setPhase("end");
  };

  // const handleTransition = () => {
  //   if (currentQuestion < quizLength(quiz)) {
  //     setPhase("reveal");
  //     setCurrentQuestion((previous) => previous + 1);
  //   } else setPhase("end");
  // };

  return (
    <Box paddingTop={"1rem"} paddingX={"2rem"} minWidth={"fit-content"}>
      {phase == "reveal" && (
        <QuestionReveal
          question={getQuestion(currentQuestion, quiz)}
          onSubmit={handleAnswerSubmit}
        />
      )}
      {/* {phase == "transition" && (
        <QuestionTransition onTransit={handleTransition} />
      )} */}
      {phase == "end" && (
        <QuizResult
          totalQuestions={quizLength(quiz)}
          correctAnswers={correctAnswers}
        />
      )}
    </Box>
  );
}
