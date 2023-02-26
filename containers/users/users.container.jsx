import React from 'react';
import UserList from '@/components/user-list/user-list.component';
import Pagination from '@/components/shared/pagination/pagination.component';

const UserListContainer = ({ users, currentPage, totalPages }) => {
    return (
        <div className="flex flex-col gap-2">
            <UserList users={users} />
            <div className="mx-auto">
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default UserListContainer;
