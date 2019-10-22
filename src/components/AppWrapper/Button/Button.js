import React from 'react';
import styles from './Button.module.scss';

const Button = ({buttonFn, type, children}) => (
    <button type={type} className={styles.button} onClick={buttonFn}>{children}</button>
);

export default Button;