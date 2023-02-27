import React, { useState } from 'react';
import Input from '../shared/form/input.component';
import * as userService from '@services/user.service';
import { useRouter } from 'next/router';
import * as styles from './user-search.module.css';
import Button from '../shared/button/button.component';
const UserSearch = () => {
    const [username, setUsername] = useState('');
    const [userNotFoundError, setUserNotFoundError] = useState(false);

    const router = useRouter();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        await userService
            .getUser(username)
            .then((response) => {
                router.push(`/users/${username}`);
                return response.data;
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setUserNotFoundError(true);
                }
            });
    };

    return (
        <form onSubmit={handleSearch}>
            <div className={styles['userSearch__container']}>
                <h3 className={styles['userSearch__title']}>User Search</h3>
                <div className={styles['userSearch__wrapper']}>
                    <Input
                        name="username"
                        type="text"
                        value={username}
                        placeholder="abdullahkus"
                        onChange={handleUsernameChange}
                    />
                    <Button title="Search" />
                </div>
                {userNotFoundError && <span>User not found!</span>}
            </div>
        </form>
    );
};

export default UserSearch;
