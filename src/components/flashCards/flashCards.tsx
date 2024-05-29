import React, { useState } from "react";
import "./flashCards.css";
interface FlashCard {
  question: string;
  answer: string;
}
interface Props {
  flashCards: FlashCard[];
}
const FlashCards: React.FC<Props> = ({ flashCards }) => {
  const initialFlipState = Array.from({ length: flashCards.length }).fill(
    false
  );
  const [flip, setFlip] = useState(initialFlipState);
  return (
    <div>
      <div className="fragment-like flex flex-wrap mt-[20px]   ">
        {flashCards.map((card, index) => (
          <div
            key={index}
            className="lg:w-[420px]  md:w-[300px] w-[200px]  m-[30px] lg:text-[16px] text-[13px] text-white"
          >
            <div
              className={`w-full    card-container cursor-pointer    m-[20px]  flex items-center justify-center  lg:h-[250px] md:h-[230px] sm:h-[210px]  ${flip[index] ? "back" : "front"}     `}
              onClick={() => {
                setFlip((prevFlip) => [
                  ...prevFlip.slice(0, index),
                  !prevFlip[index],
                  ...prevFlip.slice(index + 1),
                ]);
              }}
            >
              {flip[index] == false && <div>{card.question}</div>}
              {flip[index] == true && <div>{card.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
