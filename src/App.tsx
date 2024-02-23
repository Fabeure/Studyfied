import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  async function fetchWeatherData() {
    try {
      const response = await fetch('https://corsproxy.io/?https://studyfiedbackend.onrender.com/WeatherForecast');
  
      // Handle potential CORS errors here if using fetch directly
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      console.log(text);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Fabeure 6:</h1>
      <div className="card">
      <button onClick={() => {
          setCount((count) => count + 1);
          fetchWeatherData();
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
