export interface QuizChoice {
  answer: string;
  status: boolean;
}

export interface QuizQuestion {
  prompt: string;
  choices: QuizChoice[];
}

export interface Quiz {
  [key: string]: QuizQuestion;
}
