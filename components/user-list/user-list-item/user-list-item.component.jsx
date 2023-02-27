import React from 'react';
import styles from './user-list-item.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UserListItem = ({ user }) => {
    return (
        <Link href={`/users/${user.login}`}>
            <div className={styles.item}>
                <Image
                    className={styles.item__avatar}
                    src={user.avatar_url}
                    alt="avatar"
                    width={60}
                    height={60}
                />
                <div className="flex w-full ml-4 flex-col md:flex-row md:justify-between gap-2 ">
                    <span className={styles.item__username}>{user.login}</span>
                    <span className={styles.item__url}>{user.html_url}</span>
                </div>
            </div>
        </Link>
    );
};

export default UserListItem;
