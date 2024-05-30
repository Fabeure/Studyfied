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

export const exampleQuiz = {
  resultItem: {
    id: null,
    userId: "NA",
    topic: "cars",
    difficulty: "medium",
    numberOfQuestion: 4,
    questionAnswerPairs: {
      "1. Which car manufacturer is known for its luxury sedans and SUVs?": [
        {
          answer: "BMW",
          status: true,
        },
        {
          answer: "Mercedes-Benz",
          status: true,
        },
        {
          answer: "Ford",
          status: false,
        },
        {
          answer: "Toyota",
          status: false,
        },
      ],
      "\n2. What type of car is characterized by its high performance and sporty design?":
        [
          {
            answer: "Sports car",
            status: true,
          },
          {
            answer: "SUV",
            status: false,
          },
          {
            answer: "Sedan",
            status: false,
          },
          {
            answer: "Hatchback",
            status: false,
          },
        ],
      "\n3. Which car brand is known for its reliability and fuel efficiency?":
        [
          {
            answer: "Toyota",
            status: true,
          },
          {
            answer: "Honda",
            status: true,
          },
          {
            answer: "BMW",
            status: false,
          },
          {
            answer: "Mercedes-Benz",
            status: false,
          },
        ],
      "\n4. What is the name of the iconic muscle car produced by Dodge?": [
        {
          answer: "Challenger",
          status: true,
        },
        {
          answer: "Charger",
          status: true,
        },
        {
          answer: "Viper",
          status: true,
        },
        {
          answer: "Dakota",
          status: false,
        },
      ],
    },
  },
  resultCode: 0,
  userMessage: "Succesfully generated quiz",
  isSuccess: true,
  isFailed: false,
};
