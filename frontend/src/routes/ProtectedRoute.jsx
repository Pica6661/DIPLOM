import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Выходим из /routes в /src

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // или ваш лоадер
  }

  return user ? children : <Navigate to="/signin" replace />;
}