import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Register/ResgisterPage";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import { AppTheme } from "./styles/AppTheme";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ProfilePage from "./pages/Profile/ProfilePage";
import FlashCardsPage from "./pages/FlashCards/FlashCards";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// default url
const baseURL = "/Studyfied";


function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <ToastContainer />
      <Router>
        <NavBar />
        <Routes>
          <Route path={baseURL}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="flashCards" element={<FlashCardsPage />} />
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
