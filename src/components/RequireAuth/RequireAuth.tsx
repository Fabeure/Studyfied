import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { user } = useAuth();
  const location = useLocation();
  return user.accessToken != "" ? (
    <Outlet />
  ) : (
    <Navigate to="/Studyfied/login" state={{ from: location }} replace />
  );
}
