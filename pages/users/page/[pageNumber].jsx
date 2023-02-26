import React, { useEffect, useState } from 'react';
import * as userService from '@/services/user.service';
import Users from '@/containers/users.container';

const PageNumber = ({ currentPage, users }) => {
    return <Users users={users} />;
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

export async function getStaticProps({ params }) {
    const { pageNumber } = params;
    let since;

    pageNumber === 1 ? (since = undefined) : (since = (pageNumber - 1) * 10);

    const users = await userService
        .getUsers(since, 10)
        .then((response) => response.data)
        .catch((err) => console.log(err));

    return {
        props: {
            currentPage: pageNumber,
            users,
        },
    };
}

export default PageNumber;
