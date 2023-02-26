import React from 'react';
import UsersContainer from '@/containers/users/users.container';
import * as userService from '@/services/user.service';

const Users = ({ users }) => {
    return <UsersContainer users={users} />;
};

export const getStaticProps = async () => {
    const users = await userService
        .getUsers(undefined, 10)
        .then((response) => response.data)
        .catch((err) => console.log(err));

    return {
        props: {
            users,
        },
    };
};

export default Users;
