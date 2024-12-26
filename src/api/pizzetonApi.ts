import axios from "axios";

const url = import.meta.env.API_URL;

const pizzetonApi = axios.create({
    baseURL: url
});

export default pizzetonApi;