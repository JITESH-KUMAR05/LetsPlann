import axios from 'axios';

// Use environment variables with fallback
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      if (user._id) {
        config.headers.Authorization = `Bearer ${user._id}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;