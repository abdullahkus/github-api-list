import React from 'react';
import UserList from '@/components/user-list/user-list.component';
import Pagination from '@/components/shared/pagination/pagination.component';
import UserSearch from '@/components/user-search/user-search.component';

const UserListContainer = ({ users, currentPage, totalPages }) => {
    return (
        <div className="flex flex-col gap-2">
            <UserSearch />
            <UserList users={users} />
            <div className="mx-auto">
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default UserListContainer;
