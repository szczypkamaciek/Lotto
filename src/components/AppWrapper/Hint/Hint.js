import React from 'react';
import styles from './Hint.module.scss';


const Hint = () => (
    <p className={styles.hint}>
        <span className={styles.hintQuestionMark}>?</span>
        <span className={styles.hintText}>Liczby powinny być zapisane po przecinkach i bez spacji.</span>
    </p>
);

export default Hint;