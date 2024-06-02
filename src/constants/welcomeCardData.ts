interface CardData {
    id: number;
    description: string;
    image: string; // Assuming image paths are correctly imported or provided
    path?: string; // Optional path for navigation	  
  }
export const cardsData: CardData[] = [
    {
      id: 1,
      description: "My flashcards",
      image: "flashcard",
      path: "/flashcards",
    },
    {
      id: 2,
      description: "study buddy",
      image: "chatbot",
      path: "/chatbot",
    },
  
    {
      id: 4,
      description: "My quizzes",
      image: "quiz",
      path: "/quiz",
    },
    {
      id: 3,
      description: "My summaries",
      image: "summary",
      path: "/summary",
    },
  ];
  