import React from 'react';
import UserList from '@/components/user-list/user-list.component';

const UserListContainer = ({ users }) => {
    return (
        <div className="flex flex-col gap-2">
            <UserList users={users} />
        </div>
    );
};

export async function getStaticPaths() {
    // get users to calculate total pages
    const users = await userService
        .getUsers()
        .then((response) => response.data)
        .catch((err) => console.log(err));
    const userCount = users.length;
    const pageSize = 10;
    const pageCount = Math.ceil(userCount / pageSize);

    // create paths for each page, except for page 1
    const paths = Array.from({ length: pageCount }, (_, i) => i + 1)
        .filter((pageNumber) => pageNumber !== 1)
        .map((pageNumber) => ({
            params: { pageNumber: `${pageNumber}` },
        }));

    return {
        paths,
        fallback: false,
    };
}

export default UserListContainer;
