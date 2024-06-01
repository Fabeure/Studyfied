import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { user, setPromptLogin, promptLogin } = useAuth();
  const location = useLocation();
  if (user.accessToken == "") setPromptLogin(true);
  return promptLogin ? (
    <Navigate to="/Studyfied/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
