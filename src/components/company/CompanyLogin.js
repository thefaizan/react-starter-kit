// src/components/company/CompanyLogin.js

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiRouteConfig, pageMeta, useDocumentTitle, frontAppRoute } from '../../config/commonImports';
import { setCredentials } from '../../store/slices/authSlice'; // Import the action

function CompanyLogin() {
  useDocumentTitle(pageMeta.companyLoginPage.title); // Set the page title

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    try {
      const response = await axios.post(apiRouteConfig.login, {
        email,
        password
      });
      if (response.data.success) {
        dispatch(setCredentials({ user: response.data.user, token: response.data.token }));
        localStorage.setItem('token', response.data.token); // Store token in local storage for persistence
        navigate(frontAppRoute.COMPANY_HOME); // Redirect to the home page after successful login
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || 'Unknown error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 rounded shadow-lg bg-white">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyLogin;
