import axios from 'axios';

// Use environment variables with fallback
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;