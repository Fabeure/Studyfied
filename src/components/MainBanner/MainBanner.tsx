import "./MainBanner.css"; // You can create a separate CSS file for the main banner styles
import Typewriter from "typewriter-effect";

function MainBanner() {
  return (
    <div className="main-banner">
      <h1>Welcome to Our Learning Platform</h1>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 65,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "Empower Your Learning Journey with AI-Powered Study Tools.",
            )
            .pauseFor(2000)
            .deleteAll(55)
            .typeString(
              "Revolutionize Your Study Sessions with Intelligent Assistance.",
            )
            .pauseFor(2000)
            .deleteAll(55)
            .typeString(
              "Unlock Your Potential with Cutting-Edge AI for Smarter Studying.",
            )
            .start();
        }}
      />{" "}
    </div>
  );
}

export default MainBanner;
