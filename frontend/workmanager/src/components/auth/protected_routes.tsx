import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth_context"

export default function ProtectedRoutes() {
  const user = useAuth();
  // Need to check the role of the user. If the role allows access to the screen then continue else. Dashboard?
  // Or do we want to get a list of screens the user is allowed to access and check for permissions?
  // If token exists, get user info
  // If user.user exists navigate to dashboard
  if (user?.token === ''){
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
