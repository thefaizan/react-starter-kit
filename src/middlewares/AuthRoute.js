// src/middlewares/AuthRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as frontAppRoute from '../config/frontAppRouteConfig'; // Ensure the path is correct

const AuthRoute = ({ children }) => {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={frontAppRoute.LOGIN_PAGE} replace />;
  }

  return children;
};

export default AuthRoute;
