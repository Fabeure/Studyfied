interface CardData {
  id: number;
  description: string;
  image: string; 
  url: string// Assuming image paths are correctly imported or provided
}
export const savedcardsData: CardData[] = [
  {
    id: 1,
    description: "Browser My Flashcards",
    image: "flashcard",
    url: "/myFlashCards"
  },
];
