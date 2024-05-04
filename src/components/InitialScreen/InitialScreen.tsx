import { useState } from "react";
import "./InitialScreen.css";

function InitialScreen() {
  const [fadeInitialScreen, setFadeInitialScreen] = useState(false);

  const handleDismiss = () => {
    setFadeInitialScreen(true);
  };

  return (
    <div
      className={`initial-screen ${fadeInitialScreen ? "fade-out" : ""}`}
      onClick={handleDismiss}
    >
      <div className="text-to-animate">Studyfied</div>
      <div className="text-to-animate">
        <span>Learning made easy.</span>
      </div>
    </div>
  );
}

export default InitialScreen;
