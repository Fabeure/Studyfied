import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PlaceHolderPage from "./pages/Placeholder/PlaceHolderPage";

// default url
const baseURL = "/Studyfied";

// pages
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
