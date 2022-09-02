import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getProfile } from "../../store/profileSlice";

export const RequireAuth: React.FC = () => {
  const profile = useAppSelector(getProfile);

  return profile.mail ? <Outlet /> : <Navigate to='/login' />;
}