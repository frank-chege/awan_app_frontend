import axios from "axios";
import Config from "react-native-config";

export const createRequest = () => {
    const url = Config.BASE_URL
    const request = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 5000
    });
    return request
}