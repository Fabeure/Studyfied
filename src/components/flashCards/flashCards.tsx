import React, { useState } from "react";
import { Tilt } from "react-tilt";
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
            <Tilt
              className="card-container cursor-pointer w-full   m-[20px]  "
              tiltOptions={{
                max: 0,
                scale: 0,
                speed: 0,
              }}
            >
              <div
                className={`w-full   flex items-center justify-center  h-full  ${flip[index] ? "back" : "front"}     `}
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
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
