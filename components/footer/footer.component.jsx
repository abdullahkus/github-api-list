import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <Link
                    className={styles.footer__text}
                    target="_blank"
                    href="https://github.com/abdullahkus"
                >
                    Abdullah KUŞ
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
