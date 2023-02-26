import React from 'react';
import UserList from '@/components/user-list/user-list.component';

const UserListContainer = ({ users }) => {
    return (
        <div className="flex flex-col gap-2">
            <UserList users={users} />
        </div>
    );
};

export default UserListContainer;
