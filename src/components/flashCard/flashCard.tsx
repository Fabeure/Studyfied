import React, { useEffect, useState } from "react";
import "./flashCard.css";
interface FlashCard {
  question: string;
  answer: string;
}
interface Props {
  flashCardsProp: FlashCard[];
}
const FlashCard: React.FC<Props> = ({ flashCardsProp }) => {
  const [flip, setFlip] = useState(
    Array.from({ length: flashCardsProp.length }).fill(false)
  );
  useEffect(() => {
    setFlip(Array.from({ length: flashCardsProp.length }, () => false));
  }, [flashCardsProp]);
  return (
    <div>
      <div className="fragment-like flex flex-wrap mt-[20px]    ">
        {flashCardsProp.map((card, index) => (
          <div
            key={index}
            className="lg:w-[420px]  md:w-[300px] w-[200px]  m-[30px] lg:text-[16px] text-[13px] text-white"
          >
            <div
              className={`w-full card-container cursor-pointer m-[20px]  flex items-center justify-center  lg:h-[250px] md:h-[230px] sm:h-[210px]  ${flip[index] ? "back" : "front"}     `}
              onClick={() => {
                setFlip((prevFlip) => [
                  ...prevFlip.slice(0, index),
                  !prevFlip[index],
                  ...prevFlip.slice(index + 1),
                ]);
              }}
            >
              <div className="mx-[10px] text-white">
                {flip[index] === false && (
                  <div className="">{card.question}</div>
                )}
                {flip[index] === true && (
                  <div className="card-text">{card.answer}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCard;
