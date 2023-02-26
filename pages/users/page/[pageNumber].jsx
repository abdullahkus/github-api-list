import React, { useState, useEffect } from 'react';
import UsersContainer from '@/containers/users/users.container';
import * as userService from '@/services/user.service';
import getUserTotalPages from '@utils/getUserTotalPages.util';

const PageNumber = ({ users, currentPage }) => {
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const getTotalPages = async () => {
            const totalPages = await getUserTotalPages();

            setTotalPages(totalPages);
        };
        getTotalPages();
    }, [totalPages]);
    return (
        <UsersContainer
            users={users}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    );
};

export async function getStaticPaths() {
    // Calculating how many pages there are with 10 users on each page
    const users = await userService
        .getUsers()
        .then((response) => response.data)
        .catch((err) => console.log(err));
    const totalUser = users.length;
    const pageSize = 10;
    const totalPages = Math.ceil(totalUser / pageSize);

    const paths = Array.from({ length: totalPages }, (_, i) => i + 1)
        // create paths for each page, except for page 1
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

    // Github API also finds which page it is on because it is since instead of the page number option.
    // Since "/users/page/" pages start from 2, we subtract 1 from pageNumber.
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
