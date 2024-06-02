export interface FlashcardModel {
  id?: string;
  userId: string;
  items: Array<FlashcardItem>;
}

export interface FlashcardItem {
  question: string,
  answer: string
}
