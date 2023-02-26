import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Link className={styles.header__logo} href="/">
                    EXAIRON
                </Link>
            </div>
        </header>
    );
};

export default Header;
