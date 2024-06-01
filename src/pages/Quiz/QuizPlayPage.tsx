import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionReveal from "../../components/Quiz/QuestionReveal";
import QuizResult from "../../components/Quiz/QuizResult";
import { useLocation } from "react-router-dom";
import { Quiz } from "../../models/QuizModel";

const getQuestion = (index: number, quiz: Quiz) => {
  const prompt = Object.keys(quiz.questionAnswerPairs)[index];
  const choices = Object.values(quiz.questionAnswerPairs)[index];
  return { prompt, choices };
};

export default function QuizPlayPage() {
  const [phase, setPhase] = useState<"transition" | "reveal" | "end">("reveal");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const location = useLocation();
  const quiz = location.state.quiz as Quiz;

  useEffect(() => {
    if (!quiz) {
      alert("quiz wasnt generated");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswerSubmit = (answerStatus: boolean) => {
    if (answerStatus) setCorrectAnswers((answers) => answers + 1);

    if (currentQuestion < quiz.numberOfQuestion - 1) {
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

      {phase == "end" && (
        <QuizResult
          totalQuestions={quiz.numberOfQuestion}
          correctAnswers={correctAnswers}
        />
      )}
    </Box>
  );
}
