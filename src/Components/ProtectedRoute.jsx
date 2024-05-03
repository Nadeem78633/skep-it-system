// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth.js";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
