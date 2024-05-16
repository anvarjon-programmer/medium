import axios from "axios";

export const request = axios.create({
    baseURL:'http://68.183.210.134:7007/auth/',
})