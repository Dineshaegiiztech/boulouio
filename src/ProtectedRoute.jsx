import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
