// LoginPopup.js
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPopUp.css";
import RegisterForm from "../RegisterForm/RegisterForm";

interface LoginPopupProps {
  onClose: () => void;
}

function LoginPopup({ onClose }: LoginPopupProps) {
  const [variant, setVariant] = useState("login");

  const handlePopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // to not close popup when clicking inside of it
  };

  return (
    <div className="loginForm" onClick={onClose}>
      <div className="popup-content" onClick={handlePopupClick}>
        {variant == "login" && (
          <LoginForm onRegister={() => setVariant("register")} />
        )}
        {variant == "register" && (
          <RegisterForm onLogin={() => setVariant("login")} />
        )}
      </div>
    </div>
  );
}

export default LoginPopup;
