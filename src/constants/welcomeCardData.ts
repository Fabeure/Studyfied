interface CardData {
    id: number;
    description: string;
    image: string; // Assuming image paths are correctly imported or provided
  }
export const cardsData: CardData[] = [
    {
      id: 1,
      description: "My flashcards",
      image: "flashcard",
    },
    {
      id: 2,
      description: "study buddy",
      image: "chatbot",
    },
  
    {
      id: 4,
      description: "My quizzes",
      image: "quiz",
    },
    {
      id: 3,
      description: "My summaries",
      image: "summary",
    },
  ];
  