import { demoData } from "../../constants/demoData";
import "./feature.css";
import flashcard from "../../assets/demo/flashcard.png";
import chatbot from "../../assets/demo/chatbot.png";
import { Tilt } from "react-tilt";
import summary from "../../assets/demo/summary.png";
import quiz from "../../assets/demo/quiz.png";
import screenshot from "../../assets/screenshot.png";
import { useNavigate } from "react-router-dom";
import flashcardScreen from "../../assets/demo/screenshots/flashCards.jpg";
import chatbotScreen from "../../assets/demo/screenshots/chat.jpg";
import summaryScreen from "../../assets/demo/screenshots/summary.jpg";
import quizScreen from "../../assets/demo/screenshots/quiz.jpg";

const Feature = ({ id }: { id: number }) => {
  const data = demoData[id - 1];
  const navigate = useNavigate();
  const handleClick = (topic: string) => {
    navigate(topic);
  };
  return (
    <>
      <div
        className={` text-left feature-container flex text-white  ${!(id % 2) ? "flex-row " : "flex-row-reverse  light-background"} `}
      >
        <div className="description-container w-[50%]">
          <div className={`positioning  ${!(id % 2) ? null : "ml-[5%] "} `}>
            <div className="icon-container  ml-[30%] mb-[50px] ">
              <img
                className="icon w-[35%] h-[35%]"
                src={
                  data.topic === "flashcard"
                    ? flashcard
                    : data.topic === "chatbot"
                      ? chatbot
                      : data.topic === "summary"
                        ? summary
                        : quiz
                }
                alt=""
              />
            </div>

            <div className=" tracking-[0.09rem] slogan lg:text-[30px] md:text-[23px] text-[15px] w-[90%] font-semibold">
              <span className="mr-[20px]"></span>
              {data.slogan}
            </div>
            <div className="tracking-[0.09rem] font-light mt-[60px] lg:text-[18px] md:text-[14px] text-[10px]">
              {data.content1}
            </div>
            <div className=" tracking-[0.09rem] font-light mt-[25px] lg:text-[15px] md:text-[10px] text-[9px]">
              {data.content2}
            </div>
          </div>
        </div>

        <div
          className={` ${id % 2 ? null : " ml-[10%] "}  screenshot-container flex flex-col justify-center  w-[50%] `}
        >
          <div
            className={` ${id % 2 ? "w-[90%] " : null}  mt-[10%] screenshot `}
          >
            <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
              <div className="relative full ">
                <img
                  src={
                    data.topic === "flashcard"
                      ? flashcardScreen
                      : data.topic === "chatbot"
                        ? chatbotScreen
                        : data.topic === "summary"
                          ? summaryScreen
                          : quizScreen
                  }
                  alt={screenshot}
                  className="w-full h-full object-cover screenshot-img rounded-[40px] "
                />
              </div>
            </Tilt>
          </div>
          <div className=" w-full">
            <button
              className={` ${id % 2 ? " ml-[5%]" : " ml-[60%] lg:ml-[70%] "} mt-[25px] lg:text-[16px] md:text-[13px] text-[10px] tryIt tracking-[0.09rem]`}
              onClick={() => handleClick(data.topic)}
            >
              Try it now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
