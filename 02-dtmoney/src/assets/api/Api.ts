import axios from "axios";

const http = axios.create({
    baseURL: "https://localhost:3000/api/"
})

export default http;