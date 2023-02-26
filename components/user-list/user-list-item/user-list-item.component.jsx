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
                <div className={styles.item__nameGroup}>
                    <span className={styles.item__username}>{user.login}</span>
                </div>
                <span className={styles.item__url}>{user.html_url}</span>
            </div>
        </Link>
    );
};

export default UserListItem;
