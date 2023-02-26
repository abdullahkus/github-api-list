import * as userService from '@/services/user.service';

const getUserTotalPages = async () => {
    const users = await userService
        .getUsers()
        .then((response) => response.data)
        .catch((err) => console.log(err));
    const userCount = users.length;
    const pageSize = 10;
    const pageCount = Math.ceil(userCount / pageSize);
    return pageCount;
};

export default getUserTotalPages;
