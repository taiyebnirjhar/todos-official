import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="./login" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
