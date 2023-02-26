import React from 'react';
import Header from '@/components/header/header.component';
import Footer from '@/components/footer/footer.component';
import styles from './main.module.css';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.main}>{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
