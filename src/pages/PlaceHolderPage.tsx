import axios from "axios";
import { useState } from "react";

interface dataState {
  name: string;
  age: number;
}

export default function PlaceHolderPage() {
  const [data, setData] = useState<dataState[]>([]);
  // api call
  // if broken disable cors blocking from your browser
  async function fetchWeatherData() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/WeatherForecast`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err + " | check console");
      });
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>Coming soon 🎬</h1>
      <button onClick={fetchWeatherData} style={{ marginBottom: "1rem" }}>
        Call test api
      </button>
      <div style={{ width: "30%", textAlign: "left" }}>
        <ul>
          {data &&
            data.map((d) => (
              <>
                <li key={d.age}>
                  {d.name} {d.age}
                </li>
                <hr />
              </>
            ))}
        </ul>
      </div>
    </div>
  );
}
