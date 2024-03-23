import axios from "axios";
import { useState } from "react";
import "./LoginPage.css"

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
      <h1 style={{ marginTop: "1rem", marginBottom: "4rem" }}>
        Don't have an account ? Sign up
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
        }}
      >
        {/* ///////////// register wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            width: "49%",
          }}
        >
          <h1>New here</h1>
          <label htmlFor="regemail">Email</label>
          <input
            type="text"
            name="regemail"
            id="regemail"
            value={regEmail}
            onChange={handleInputChange}
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <label htmlFor="reguser">Username</label>
          <input
            type="text"
            name="reguser"
            id="reguser"
            value={regUsername}
            onChange={handleInputChange}
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <label htmlFor="regname">Full name</label>
          <input
            type="text"
            name="regname"
            id="regname"
            value={regFullName}
            onChange={handleInputChange}
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <label htmlFor="regpass">password</label>
          <input
            type="password"
            name="regpass"
            id="regpass"
            value={regPassword}
            onChange={handleInputChange}
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <label htmlFor="confirmpass">confirm password</label>
          <input
            type="password"
            name="confirmpass"
            id="confirmpass"
            value={regConfirmPass}
            onChange={handleInputChange}
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
        {/* ////////// divider */}
        <div
          style={{ backgroundColor: "violet", width: "1px", margin: "1rem" }}
        ></div>
        {/* /////////////// login wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "fit-content",
            alignItems: "start",
            width: "49%",
          }}
        >
          <h1>Already a member</h1>
          <label htmlFor="logEmail">email</label>
          <input
            type="text"
            name="logEmail"
            id="logEmail"
            value={logEmail}
            onChange={handleInputChange}
            style={{ margin: "0.2rem", border: "solid black 1px" }}
          />
          <label htmlFor="logPassword">password</label>
          <input
            type="password"
            name="logPassword"
            id="logPassword"
            value={logPassword}
            onChange={handleInputChange}
            style={{ margin: "0.2rem", border: "solid black 1px" }}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
