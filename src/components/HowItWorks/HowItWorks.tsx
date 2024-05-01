import { useState } from "react";
import "./HowItWorks.css";

// Define interface for the steps
interface Step {
  text: string;
}

// Define interface for the image
interface Image {
  url: string;
}

interface HowItWorksProps {
  image: Image;
  steps: Step[];
}

function HowItWorks({ image, steps }: HowItWorksProps) {
  const [showButton, setShowButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State to control component visibility

  const handleRightArrowClick = () => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep < steps.length - 1 ? prevStep + 1 : prevStep;
      showButton
        ? setShowButton(true)
        : setShowButton(nextStep === steps.length - 1); // Show button if it's the last step
      return nextStep;
    });
  };

  const handleLeftArrowClick = () => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep > 0 ? prevStep - 1 : prevStep;
      return nextStep;
    });
  };

  // Function to handle click on the button at the end
  const handleButtonClick = () => {
    setIsVisible(false); // Hide the component when "Finish" button is clicked
  };

  // Function to render content based on the current step
  const renderRightSideContent = () => {
    if (steps.length === 0 || currentStep >= steps.length) {
      return null;
    }
    return (
      <>
        <p>{steps[currentStep].text}</p>
      </>
    );
  };

  const renderLeftSideContent = () => {
    if (steps.length === 0 || currentStep >= steps.length) {
      return null;
    }
    return <img src={image.url} alt="icon" className="card-icon" />;
  };

  // Render button if it's the last step
  const renderButton = () => {
    if (showButton) {
      return <button onClick={handleButtonClick}>Got It!</button>;
    }
  };
  if (!isVisible) {
    return null; // Render nothing if isVisible is false
  }
  return (
    <div className="blurred">
      <div className="content">
        <h2 className="title">How It Works</h2>
        <div className="content-wrapper">
          <div className="left-side">{renderLeftSideContent()}</div>
          <div className="right-side">{renderRightSideContent()}</div>
        </div>
        <div className="arrow-container">
          <i
            className="fa-solid fa-arrow-left arrow left-arrow"
            onClick={handleLeftArrowClick}
          ></i>
          <div className="button-container">{renderButton()}</div>
          <i
            className="fas fa-arrow-right arrow right-arrow"
            onClick={handleRightArrowClick}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
