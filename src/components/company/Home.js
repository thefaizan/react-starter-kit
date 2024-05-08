// src/components/company/Home.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiRouteConfig, pageMeta, useDocumentTitle, frontAppRoute } from '../../config/commonImports';
import { logout } from '../../store/slices/authSlice'; // Import the logout action

function Home() {
    
  useDocumentTitle(pageMeta.companyHomePage.title); // Set the page title

  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      // Optional: Call the backend to invalidate the token
      await axios.post(apiRouteConfig.logout, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Failed to logout:', error);
    }
    // Dispatch logout action
    dispatch(logout());
    // Clear token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate(frontAppRoute.LOGIN_PAGE);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {user ? (
        <>
          <h1 className="text-xl text-center mb-4">Welcome to Company Homepage, {user.name}!</h1>
          <button
            onClick={handleLogout}
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Home;
