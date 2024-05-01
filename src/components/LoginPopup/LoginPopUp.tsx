// LoginPopup.js
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPopUp.css";

interface LoginPopupProps {
  onClose: () => void;
}

function LoginPopup({ onClose }: LoginPopupProps) {
  const handlePopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // to not close popup when clicking inside of it
  };

  return (
    <div className="loginForm" onClick={onClose}>
      <div className="popup-content" onClick={handlePopupClick}>
        <LoginForm onClose={onClose} />
      </div>
    </div>
  );
}

export default LoginPopup;
