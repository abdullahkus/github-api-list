import React, { useState, useEffect } from 'react';
import UsersContainer from '@/containers/users/users.container';
import * as userService from '@/services/user.service';
import getUserTotalPages from '@utils/getUserTotalPages.util';

const Users = ({ users }) => {
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const getTotalPages = async () => {
            const totalPages = await getUserTotalPages();

            setTotalPages(totalPages);
        };
        getTotalPages();
    }, [totalPages]);
    return (
        <UsersContainer users={users} currentPage={1} totalPages={totalPages} />
    );
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
