import axios from "axios";
import { useState } from "react";
import "./LoginPage.css";
import { isEmail, isPassword } from "./validators";

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
  const [changedField, setChangedField] = useState("");

  // input handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChangedField(name);
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

  function handleInputBlur(event: React.FocusEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    switch (name) {
      case "regemail":
        if (changedField == name && !isEmail(value)) {
          alert("use a valid email");
        }
        break;
      case "regpass":
        if (changedField == name && !isPassword(value)) {
          alert("use a valid password");
        }
        break;
      case "regname":
        if (changedField == name && value == "") {
          alert("Full name required");
        }
        break;
      case "confirmpass":
        if (changedField == name && value != regPassword) {
          alert("passwords dont match");
        }
        break;
      // case "reguser":
      // if (changedField == name && value) {
      //   alert("use a valid username");
      // }
      // break;
      case "logEmail":
        if (changedField == name && !isEmail(value)) {
          alert("use a valid email");
        }
        break;
      case "logPassword":
        if (changedField == name && !isPassword(value)) {
          alert("use a valid password");
        }
        break;
      default:
        break;
    }
  }

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
    axios
      .post(loginEndpoint, loginData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data + " | check console");
      });
  };

  return (
    <div className="page-content">
      <h1 className="loginPage-header">
        Don't have an account ? <span>Sign up</span>
      </h1>
      <div className="formsWrapper">
        {/* ///////////// register wrapper */}
        <div className="registerForm-wrapper">
          <h1 className="registerForm-title">New here</h1>
          <div className="registerForm-row">
            <div className="textFieldWrapper">
              <label htmlFor="regname">Full name :</label>
              <input
                type="text"
                name="regname"
                id="regname"
                value={regFullName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="textFieldWrapper">
              <label htmlFor="reguser">Username :</label>
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
              <label htmlFor="regemail">Email :</label>
              <input
                type="text"
                name="regemail"
                id="regemail"
                value={regEmail}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="textFieldWrapper">
              <label htmlFor="regpass">Password :</label>
              <input
                type="password"
                name="regpass"
                id="regpass"
                value={regPassword}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
          </div>
          <div className="registerForm-row">
            <div className="textFieldWrapper">
              <label htmlFor="confirmpass">Confirm password :</label>
              <input
                type="password"
                name="confirmpass"
                id="confirmpass"
                value={regConfirmPass}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
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
          <div className="textFieldWrapper">
            <label htmlFor="logEmail">Email :</label>
            <input
              type="text"
              name="logEmail"
              id="logEmail"
              value={logEmail}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="textFieldWrapper">
            <label htmlFor="logPassword">Password :</label>
            <input
              type="password"
              name="logPassword"
              id="logPassword"
              value={logPassword}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <button className="loginForm-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
