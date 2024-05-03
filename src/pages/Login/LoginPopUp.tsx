// LoginPopup.js
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPopUp.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

interface LoginPopupProps {
  onClose: () => void;
}

function LoginPopup({ onClose }: LoginPopupProps) {
  const [variant, setVariant] = useState("login");

  return (
    <div
      className="loginForm"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="popup-content">
        {/* /////////////// close button is not needed
        <span className="close" onClick={onClose}> */}
        {/* Enhance close button */}
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span> */}
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
