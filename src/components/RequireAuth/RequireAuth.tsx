import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { user, setPromptLogin, promptLogin } = useAuth();
  const location = useLocation();
  if (user.accessToken == "") setPromptLogin(true);
  return promptLogin ? (

    <Navigate to="/" state={{ from: location }} replace />
  ) : (
      <Outlet />
      );
}
