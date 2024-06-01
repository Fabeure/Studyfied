import "./WelcomeCard.css";
import flashcard from "../../assets/demo/flashcard.png";
import chatbot from "../../assets/demo/chatbot.png";
import summary from "../../assets/demo/summary.png";
import quiz from "../../assets/demo/quiz.png";
import arrow from "../../assets/arrow.png";
import { Tilt } from "react-tilt";
import { cardsData } from "../../constants/welcomeCardData";
import { useNavigate } from "react-router-dom";

function WelcomeCard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className=" flex  flex-wrap justify-center  cards-container">
          {cardsData.map((card) => (
            <div className="fragment-like" key={card.id} onClick={()=>navigate(`${card.path}`)
          } >
              <Tilt
                className="welcomeCard-container cursor-pointer items-center m-[20px] flex justify-center flex-col  "
                options={{ max: 20, scale: 1.05, speed: 45 }}
                style={{ transition: "transform 0.1s ease-in-out" }}
              >
                <div className=" card w-full h-full flex justify-center flex-col ">
                  <div className="card-image h-[40%] flex justify-center">
                    <img
                      className="icon "
                      src={
                        card.image === "flashcard"
                          ? flashcard
                          : card.image === "chatbot"
                            ? chatbot
                            : card.image === "summary"
                              ? summary
                              : quiz
                      }
                    />
                  </div>
                  <div className="card-description font-light  lg:text-[23px] mt-[20px] text-white flex flex-row justify-center items-center  ">
                    {card.description}
                    <span className="w-[40px] h-[40px] flex justify-center items-center ml-[5px]  mt-[5px] ">
                      <img src={arrow} alt="" />
                    </span>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default WelcomeCard;
