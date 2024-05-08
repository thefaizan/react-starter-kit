// src/App.js

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyLogin from './components/company/CompanyLogin';
import CompanyHome from './components/company/Home';
import HomePage from './components/HomePage';
import AuthRoute from './middlewares/AuthRoute';
import GuestRoute from './middlewares/GuestRoute';
import * as frontAppRoute from './config/frontAppRouteConfig';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path={frontAppRoute.HOME_PAGE} element={<HomePage />} />
        
        <Route path={frontAppRoute.LOGIN_PAGE} element={
          <GuestRoute>
            <CompanyLogin />
          </GuestRoute>
        } />

        <Route path={frontAppRoute.COMPANY_HOME} element={
          <AuthRoute>
            <CompanyHome />
          </AuthRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;
