import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:80', // Set the base URL for all requests
    });

    // You can add interceptors here if needed

    nuxtApp.provide('axios', axiosInstance);
});