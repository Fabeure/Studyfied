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

export const fakeQuiz = {
  "what's 9+10": [
    { answer: "19", status: false },
    { answer: "21", status: true },
    { answer: "8", status: false },
    { answer: "73", status: false },
  ],
  "what's the average amount of hands a human has": [
    { answer: "<2", status: true },
    { answer: "3", status: false },
    { answer: "2", status: false },
    { answer: "1", status: false },
  ],
  "Good luck": [
    { answer: "i'm right", status: true },
    { answer: "the other is right", status: true },
  ],
};
