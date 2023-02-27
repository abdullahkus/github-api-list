import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Authorization: 'Bearer ' + process.env.GITHUB_KEY,
    },
});

export default axiosInstance;
