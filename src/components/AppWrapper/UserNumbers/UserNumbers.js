import React from 'react';
import styles from './UserNumbers.module.scss';

const UserNumbers = ({numbers, hits}) => (
    <p>
        {console.log(numbers)}
        <span className={styles.numbers}>{numbers.toString()}</span>
        <span className={styles.hits}>{hits.toString()}</span>
    </p>

);

export default UserNumbers;