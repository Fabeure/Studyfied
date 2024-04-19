import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Register/Login";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import { AppTheme } from "./styles/AppTheme";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ProfilePage from "./pages/Profile/ProfilePage";

// default url
const baseURL = "/Studyfied";

// pages
const pageRoutes = [
  { name: "Home", path: baseURL, element: <Home /> },
  { name: "Login", path: `${baseURL}/login`, element: <Login /> },
  { name: "Profile", path: `${baseURL}/profile`, element: <ProfilePage /> },
];

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Router>
        <NavBar links={pageRoutes} />
        <Routes>
          <Route path={baseURL}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            /////// Protected routes :
            <Route element={<RequireAuth />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
