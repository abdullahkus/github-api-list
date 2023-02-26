import axios from '@axios';

export const getUsers = async (since = 0, perPage = 100) => {
    if (!perPage) {
        return axios.get('/users', {
            params: {
                per_page: perPage,
                since,
            },
        });
    } else {
        return axios.get('/users', {
            params: {
                per_page: perPage,
                since,
            },
        });
    }
};

export const getUser = async (username) => {
    return axios.get(`/users/${username}`);
};
