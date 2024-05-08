// src/middlewares/GuestRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as frontAppRoute from '../config/frontAppRouteConfig'; // Ensure the path is correct

const GuestRoute = ({ children }) => {
  const user = useSelector(state => state.auth.user);

  if (user) {
    // If there is a user, redirect to the company home page
    return <Navigate to={frontAppRoute.COMPANY_HOME} replace />;
  }

  // If no user is found, render the intended component
  return children;
};

export default GuestRoute;
