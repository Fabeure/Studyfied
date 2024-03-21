// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PlaceHolderPage from "./pages/PlaceHolderPage";

// default url
const baseURL = "/Studyfied";
const pageRoutes = [
  { name: "Home", path: baseURL, element: <Home /> },
  {
    name: "Placeholder",
    path: `${baseURL}/placeholder`,
    element: <PlaceHolderPage />,
  },
  { name: "Login", path: `${baseURL}/login`, element: <Login /> },
];

function App() {
  // const [count, setCount] = useState(0);
  // const [activePage, setActivePage] = useState("home");

  // async function fetchWeatherData() {
  //   // Mocking weather data fetch
  //   console.log('Fetching weather data...');
  // }

  return (
    <Router>
      <NavBar links={pageRoutes} />
      <Routes>
        {pageRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
