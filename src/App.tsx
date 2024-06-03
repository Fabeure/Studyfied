import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Register/ResgisterPage";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ProfilePage from "./pages/Profile/ProfilePage";
import FlashCardsPage from "./pages/FlashCards/FlashCards";
import ChatBot from "./pages/ChatBot/ChatBot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "./pages/summary/summary";
import Welcome from "./pages/Welcome/Welcome";
import QuizPage from "./pages/Quiz/QuizPage";
import QuizPlayPage from "./pages/Quiz/QuizPlayPage";
import SavedFlashCards from "./pages/SavedFlashCards/SavedFlashCards";
import { ChatBotCanvas } from "./components/ChatBotCanvas/ChatBotCanvas";
import { IsPlayingProvider } from "./context/IsPlayingContext";

function App() {
  return (
    <main className="h-full toClick">
      <ToastContainer />
      <IsPlayingProvider>
      <ChatBotCanvas />
      </IsPlayingProvider>
      <HashRouter>
        <NavBar />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            /////// Protected routes :
            <Route element={<RequireAuth />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="quizPlay" element={<QuizPlayPage />} />
              <Route path="quiz" element={<QuizPage />} />
              <Route path="chatbot" element={<ChatBot />} />
              <Route path="flashCards" element={<FlashCardsPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="summary" element={<Summary/>} />
              <Route path="myFlashCards" element={<SavedFlashCards />} />
            </Route>
        </Routes>
  </HashRouter>
    </main>
  );
}

export default App;
