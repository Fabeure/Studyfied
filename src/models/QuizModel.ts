export interface QuizChoice {
  content: string;
  status: boolean;
}

export interface QuizQuestionFormatted {
  prompt: string;
  choices: QuizChoice[];
}

export interface QuizQAPairs {
  [key: string]: QuizChoice[];
}

export interface Quiz {
  id: string | null;
  userId: string;
  topic: string;
  difficulty: string;
  numberOfQuestion: number;
  questionAnswerPairs: QuizQAPairs;
}
