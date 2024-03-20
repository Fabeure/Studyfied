import axios from "axios";

export default function Login() {
  // api call
  // broken for now -- need cross origin requests to be enabled
  async function fetchWeatherData() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/WeatherForecast`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <label htmlFor="">email</label>
          <input
            type="text"
            name=""
            id=""
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <label htmlFor="">password</label>
          <input
            type="text"
            name=""
            id=""
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <label htmlFor="">confirm password</label>
          <input
            type="text"
            name=""
            id=""
            style={{ border: "solid black 1px", margin: "0.2rem" }}
          />
          <button onClick={() => fetchWeatherData()}>Register</button>
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
          <label htmlFor="">email</label>
          <input
            type="text"
            name=""
            id=""
            style={{ margin: "0.2rem", border: "solid black 1px" }}
          />
          <label htmlFor="">password</label>
          <input
            type="text"
            name=""
            id=""
            style={{ margin: "0.2rem", border: "solid black 1px" }}
          />
          <button onClick={() => fetchWeatherData()}>Login</button>
        </div>
      </div>
    </div>
  );
}
