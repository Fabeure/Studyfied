import axios from "axios";
import { useState } from "react";
import "./LoginPage.css";

const registerEndpoint = `${
  import.meta.env.VITE_BACKEND_API
}/api/v1/authenticate/register`;

const loginEndpoint = `${
  import.meta.env.VITE_BACKEND_API
}/api/v1/authenticate/login`;

export default function Login() {
  // input states
  const [regEmail, setRegEmail] = useState("");
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  // input handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "regemail":
        setRegEmail(value);
        break;
      case "reguser":
        setRegUsername(value);
        break;
      case "regname":
        setRegFullName(value);
        break;
      case "regpass":
        setRegPassword(value);
        break;
      case "confirmpass":
        setRegConfirmPass(value);
        break;
      case "logEmail":
        setLogEmail(value);
        break;
      case "logPassword":
        setLogPassword(value);
        break;

      default:
        break;
    }
  };

  // register button handler
  const handleRegister = () => {
    const registerData = {
      Email: regEmail,
      Username: regUsername,
      FullName: regFullName,
      Password: regPassword,
      ConfirmPassword: regConfirmPass,
    };
    console.log(registerData);
    axios
      .post(registerEndpoint, registerData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err + " | check console");
      });
  };

  // login button handler
  const handleLogin = () => {
    const loginData = {
      Email: logEmail,
      Password: logPassword,
    };
    console.log(loginData);
    axios
      .post(loginEndpoint, loginData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err + " | check console");
      });
  };

  return (
    <div className="page-content">
      <h1 className="loginPage-header">
        Don't have an account ?{" "}
        <span
          style={{ color: "rgb(255, 128, 0)", fontWeight: "bold", fontStyle: "italic" }}
        >
          Sign up
        </span>
      </h1>
      <div className="formsWrapper">
        {/* ///////////// register wrapper */}
        <div className="registerForm-wrapper">
          <h1 className="registerForm-title">New here</h1>
          <div className="registerForm-row">
            <div className="textFieldWrapper">
              <label htmlFor="regname">Full name</label>
              <input
                type="text"
                name="regname"
                id="regname"
                value={regFullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="textFieldWrapper">
              <label htmlFor="reguser">Username</label>
              <input
                type="text"
                name="reguser"
                id="reguser"
                value={regUsername}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="registerForm-row">
            <div className="textFieldWrapper">
              <label htmlFor="regemail">Email</label>
              <input
                type="text"
                name="regemail"
                id="regemail"
                value={regEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="textFieldWrapper">
              <label htmlFor="regpass">Password</label>
              <input
                type="password"
                name="regpass"
                id="regpass"
                value={regPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="registerForm-row">
            <div className="textFieldWrapper">
              <label htmlFor="confirmpass">Confirm password</label>
              <input
                type="password"
                name="confirmpass"
                id="confirmpass"
                value={regConfirmPass}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className="registerForm-btn" onClick={handleRegister}>
            Register
          </button>
        </div>
        {/* ////////// divider */}
        <div className="formsWrapper-divider"></div>
        {/* /////////////// login wrapper */}
        <div className="loginForm-wrapper">
          <h1 className="loginForm-title">Already a member</h1>
          <label htmlFor="logEmail">Email</label>
          <input
            type="text"
            name="logEmail"
            id="logEmail"
            value={logEmail}
            onChange={handleInputChange}
          />
          <label htmlFor="logPassword">Password</label>
          <input
            type="password"
            name="logPassword"
            id="logPassword"
            value={logPassword}
            onChange={handleInputChange}
          />
          <button className="loginForm-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
