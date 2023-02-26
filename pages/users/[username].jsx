import React from 'react';
import * as userService from '@/services/user.service';
import UserDetailsContainer from '@/containers/user-details/user-details.container';
const username = ({ user }) => {
    return <UserDetailsContainer user={user} />;
};

export async function getServerSideProps({ params }) {
    const user = await userService
        .getUser(params.username)
        .then((response) => response.data)
        .catch((err) => console.log(err));

    return {
        props: {
            user,
        },
    };
}

export default username;
