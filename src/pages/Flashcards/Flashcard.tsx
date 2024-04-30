import { flashcardModel } from "../../models/flashcardModel";
import { useState } from "react";

import "./Flashcards.css";
export default function flashcard(props: { flashcard: flashcardModel }) {
  const flashcard = props.flashcard;
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flipped" : "notflipped"} md:h-600 sm:h-200 md:w-200     `}
      onClick={() => setFlip(!flip)}
    >
      {!flip && <div className="front">{flashcard.question}</div>}
      {flip && <div className="back">{flashcard.answer}</div>}
    </div>
  );
}
