// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider'; // Assuming you create an AuthProvider for managing auth state

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth(); // Retrieve user from AuthProvider

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
