import axios from "axios";

const pizzetonApi = axios.create({
    baseURL: 'https://military-gianna-pizzetondguti-6a3d8d19.koyeb.app/api/',
    // baseURL: 'http://localhost:4000/api/'
});

export default pizzetonApi;