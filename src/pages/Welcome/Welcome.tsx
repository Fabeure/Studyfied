import "./Welcome.css";
import WelcomeCard from "../../components/WelcomeCards/WelcomeCard";
import useAuth from "../../hooks/useAuth";
import { ChatBotCanvas } from "../../components/ChatBotCanvas/ChatBotCanvas";
import FirstVisitSpeech from "../../components/FirstVisitSpeech/FirstVisitSpeech";
import { IsPlayingProvider } from "../../context/IsPlayingContext";

function Welcome() {

  const { user } = useAuth();

  const scriptedTexts = [
    `Welcome to our Menu! Explore a variety of features designed to enhance your learning experience.`,
    `Discover:
    - Chat Bot: Engage in interactive conversations with our AI assistant for personalized support.
    - Summaries: Get concise overviews of your achievements and key highlights.
    - Quizzes: Test your knowledge and challenge yourself with fun quizzes on various topics.
    `,
    `First time here? Dive in and start exploring!`,
    `Welcome back to our Menu! Explore even more features to enrich your learning journey.`,
    `Discover:
    - Flashcards: Improve your retention and understanding with customizable flashcard sets.
    `,
    `Returning user? Welcome back! Select one of the options above to continue your learning adventure.`
  ];
  

  return (
    <>
      <div className="">
        <div className="welcome-text font-light lg:text-[18px] text-[15px] text-left  mt-[30px] lg:ml-[10%] ml-[5%]   ">
          <span className="font-semibold"> Welcome back {user.name}! </span>
          <br />
          We're thrilled to have you here again. Let's take another step
          towards your goals.
        </div>
        <div className=" lg:mr-[15%] lg:ml-[15%] mr-[10%] ml-[10%] mt-[20px] flex flex-wrap justify-cent
        er cards-container">
          <WelcomeCard />
          <IsPlayingProvider>
        <FirstVisitSpeech scriptedTexts={scriptedTexts} pageName={'welcome'}/>
        <ChatBotCanvas />
      </IsPlayingProvider>          
        </div>
      </div>
    </>
  );
}
export default Welcome;
