import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        // 'X-GitHub-Api-Version': '2022-11-28',
        Authorization: 'Bearer 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',
    },
});

export default axiosInstance;
