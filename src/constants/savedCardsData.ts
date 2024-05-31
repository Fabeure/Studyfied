interface CardData {
  id: number;
  description: string;
  image: string; // Assuming image paths are correctly imported or provided
}
export const savedcardsData: CardData[] = [
  {
    id: 1,
    description: "My saved flashcards",
    image: "flashcard",
  },

  {
    id: 2,
    description: "My saved quizzes",
    image: "quiz",
  },
];
