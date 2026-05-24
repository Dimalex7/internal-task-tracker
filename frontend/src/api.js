import axios from 'axios';

// create an axios instance pointing to our fastapi backend
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
});

export default api;