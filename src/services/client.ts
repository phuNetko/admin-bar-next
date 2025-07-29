import axios from 'axios';
import { CheckToken } from '@/ultils/checkToken';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(async (config) => {
    const token = await CheckToken();
    console.log(token);
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

client.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            document.cookie = "token=; path=/";

            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default client;