import React from 'react';
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getProfile } from "../../store/profileSlice";

type Props = {
  children: React.ReactElement<any, any> | null,
}

export const RequireAuth: React.FC<Props> = ({ children }) => {
  const profile = useAppSelector(getProfile);

  if (!profile.mail) {
    return <Navigate to='/' />
  }
  return children;
}