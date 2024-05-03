// LoginPopup.js
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPopUp.css";

interface LoginPopupProps {
  onClose: () => void;
}

function LoginPopup({ onClose }: LoginPopupProps) {
  return (
    <div className="loginForm">
      <div className="popup-content">
      <span className="close" onClick={onClose}>
          {/* Enhance close button */}
          <svg
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
        </span>
        <LoginForm onClose={onClose}/>
      </div>
    </div>
  );
}

export default LoginPopup;
