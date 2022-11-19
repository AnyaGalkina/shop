import axios from 'axios';

export const instance = axios.create({
    // baseURL: "https://anyagalkina.github.io/shop"
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://back-1.vercel.app/',
    // baseURL: './',
});
