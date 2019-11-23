import React from 'react';
import styles from './Input.module.css';

const Input = ({number, lang}) => (
    <div className={styles.wrapper}>
        <input
            className={styles.input}
            maxLength="17"
            name={"Input"+number}
            pattern="?:(?:[1-9]|[1-4][0-9],){5}([1-9]|[1-4][0-9])"
        />
        <label className={styles.label} htmlFor={"Input"+number}>
            {lang === "pl" ? "Zestaw " : "Set "} {number+1} :
        </label>
        <div className={styles.formItemBar} />
    </div>
);

export default Input;
