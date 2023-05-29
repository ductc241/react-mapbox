import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.mapbox.com',
    timeout: 100000,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})

export default instance