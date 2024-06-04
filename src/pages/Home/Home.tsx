import "./Home.css";
import Demo from "../../components/Demo/Demo";
import Landingpage from "../../components/landing-page/landingpage";
import { IsPlayingProvider } from "../../context/IsPlayingContext";
import { ChatBotCanvas } from "../../components/ChatBotCanvas/ChatBotCanvas";
import FirstVisitSpeech from "../../components/FirstVisitSpeech/FirstVisitSpeech";
function Home() {

  const scriptedTexts = [
    `Welcome to our Home Page! Discover a world of possibilities right at your fingertips. Let's embark on an exciting journey together!`,
    `Excited to explore? Dive into our diverse range of content and discover something new every day!`,
    `First time here? Get ready to experience a wealth of resources and inspiration. Your adventure starts now!`,
    `Welcome back to our Home Page! Ready to rediscover your favorite content and find new favorites? Let's explore together!`,
    `Great to see you again! Our home is your home. Find what you love, and let's make the most of every moment!`,
    `You're back for more! Consistency is key to growth. Let's continue our journey of discovery and inspiration!`
  ];
  
  return (
    <>
      <div className="home-page ">
        <div className="cont ">
          <div id="landing-page" className="mt-[80px] ml-[50px]  ">
            <Landingpage />
          </div>
          <div id="demo" className="mt-[120px]   ">
            <Demo />
          </div>
        </div>
      </div>
      <IsPlayingProvider>
        <FirstVisitSpeech scriptedTexts={scriptedTexts} pageName={'home'}/>
        <ChatBotCanvas />
      </IsPlayingProvider>
    </>
  );
}
export default Home;
