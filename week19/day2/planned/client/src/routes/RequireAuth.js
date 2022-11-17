import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to={"/login"} />;
}

export default RequireAuth;
