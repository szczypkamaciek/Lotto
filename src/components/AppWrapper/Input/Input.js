import React from 'react';
import styles from './Input.module.css';

const Input = ({number}) => (
    <div className={styles.wrapper}>
        <input
            className={styles.input}
            maxLength="17"
            name={"Input"+number}
        />
        <label className={styles.label} htmlFor={"Input"+number}>
            Zestaw {number+1}:
        </label>
        <div className={styles.formItemBar} />
    </div>
);

export default Input;
