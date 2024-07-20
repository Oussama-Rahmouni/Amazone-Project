import axios from 'axios';

// Create an instance of axios with default properties
const api = axios.create({
    baseURL: 'http://localhost:5000/api', 
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials:true
});

export default api;
