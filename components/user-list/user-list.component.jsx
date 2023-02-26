import React from 'react';
import styles from './user-list.module.css';
import UserListItem from './user-list-item/user-list-item.component';

const UserList = ({ users }) => {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-primary">User List</h3>
            <div className={styles.list}>
                {users.map((user) => (
                    <UserListItem user={user} key={user.id} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
