import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { user, setPromptLogin } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (user.accessToken == "") setPromptLogin(true);
    if (user.accessToken != "") setPromptLogin(false);
  }, [setPromptLogin, user.accessToken]);

  return user.accessToken == "" ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
