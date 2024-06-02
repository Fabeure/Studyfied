import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { user, setPromptLogin, promptLogin } = useAuth();
  const location = useLocation();
  console.log("prompt login: ", promptLogin);

  if (user.accessToken == "") setPromptLogin(true);
  if (user.accessToken != "") setPromptLogin(false);

  return user.accessToken == "" ? (

    <Navigate to="/" state={{ from: location }} replace />
  ) : (
      <Outlet />
      );
}
