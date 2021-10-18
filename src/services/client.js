import axios from 'axios';

const api = axios.create({
    baseURL: 'https://github.com/users',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With'
    }
});


export default api;

