import { useNavigate } from "react-router-dom";

interface QuizResultProps {
  totalQuestions: number;
  correctAnswers: number;
}

export default function QuizResult({
  totalQuestions,
  correctAnswers,
}: QuizResultProps) {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/Studyfied/quiz");
  };
  return (
    <div>
      QuizResult : <br />
      You got {correctAnswers} out of {totalQuestions} questions right
      <button type="button" onClick={handleReturn}>
        return
      </button>
    </div>
  );
}
