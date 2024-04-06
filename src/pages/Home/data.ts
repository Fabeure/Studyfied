export interface SetType {
  id: string;
  topic: string;
  description: string;
  icon: string;
}

export const setsFromData: SetType[] = [
  {
    id: "1",
    topic: "Summary",
    description:
      "Effortlessly condense long texts into concise summaries for quick understanding.",
    icon: "summary",
  },
  {
    id: "2",
    topic: "Flash cards",
    description:
      "Create interactive study aids from any content to enhance learning and retention.",

    icon: "flashCards",
  },
  {
    id: "3",
    topic: "Quiz",
    description:
      "Engage users with customized quizzes that test knowledge and promote active learning.",

    icon: "quiz",
  },
  {
    id: "4",
    topic: "Chat with AI",
    description:
      "Gain deep insights and understanding with AI-generated explanations.",

    icon: "explain",
  },
];
