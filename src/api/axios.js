import axios from 'axios';

const api = axios.create({
  baseURL: 'http://:53000/api/v1/',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    'Content-Type': 'application/json',
  },
});

export default api;
