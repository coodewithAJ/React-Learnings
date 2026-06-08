import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    <Navigate to="/" />;
    return;
  }

  return children
};

export default Protected;
