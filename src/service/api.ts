import axios from 'axios';

const headers = {'Content-Type': 'application/json'};

const api =  axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com',
    headers,
});

export default api;