import React from 'react';
import Image from 'next/image';
import * as styles from './user-details.module.css';
const UserDetailsContainer = ({ user }) => {
    return (
        <div className={styles.userDetails}>
            <Image
                className={styles.userDetails__avatar}
                src={user.avatar_url}
                alt="avatar"
                width={200}
                height={200}
            />
            <div className={styles.userDetails__summary}>
                {user.name && user.bio && (
                    <div className={styles.summary__head}>
                        {user.name && (
                            <span className={styles.summary__name}>
                                {user.name}
                            </span>
                        )}
                        {user.bio && (
                            <span className={styles.summary__bio}>
                                {user.bio}
                            </span>
                        )}
                    </div>
                )}
                <div className={styles.summary__details}>
                    <div className={styles.summary__group}>
                        <span className={styles.group__title}>Followers</span>
                        <span className={styles.group__value}>
                            {user.followers}
                        </span>
                    </div>
                    <div className={styles.summary__group}>
                        <span className={styles.group__title}>Following</span>
                        <span className={styles.group__value}>
                            {user.following}
                        </span>
                    </div>
                    {user.location && (
                        <div className={styles.summary__group}>
                            <span className={styles.group__title}>
                                Location
                            </span>
                            <span className={styles.group__value}>
                                {user.location}
                            </span>
                        </div>
                    )}
                    {user.twitter_username && (
                        <div className={styles.summary__group}>
                            <span className={styles.group__title}>
                                Twitter Username
                            </span>
                            <span className={styles.group__value}>
                                {user.twitter_username}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDetailsContainer;
