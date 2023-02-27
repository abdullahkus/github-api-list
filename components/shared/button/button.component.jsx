import React from 'react';
import * as styles from './button.module.css';
const Button = ({ title, ...props }) => {
    return (
        <button className={styles['button']} {...props}>
            {title}
        </button>
    );
};

export default Button;
