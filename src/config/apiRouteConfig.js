// src/config/apiRouteConfig.js

const API_BASE_URL = 'http://localhost:8000/api';

const apiRouteConfig = {
    login: API_BASE_URL + '/login',
    logout: API_BASE_URL + '/logout',
};

export default apiRouteConfig;
