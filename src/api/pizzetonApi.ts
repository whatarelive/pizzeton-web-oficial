import axios from "axios";

const pizzetonApi = axios.create({
    baseURL: 'http://localhost:4000/api/',
});

export default pizzetonApi;