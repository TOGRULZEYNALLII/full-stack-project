import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute bileşeni, giriş yapılmamışsa login sayfasına yönlendirir.
const PrivateRoute = ({ element, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default PrivateRoute;
