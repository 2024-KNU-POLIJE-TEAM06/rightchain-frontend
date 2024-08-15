import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://ec2-108-136-47-162.ap-southeast-3.compute.amazonaws.com/api/v1/',
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
