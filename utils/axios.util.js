import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_GITHUB_KEY,
    },
});

export default axiosInstance;
