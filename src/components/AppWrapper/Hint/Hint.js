import React from 'react';
import styles from './Hint.module.scss';


const Hint = ({lang}) => (
    <p className={styles.hint}>
        <span>
            {
                lang === "pl"
                    ?
                    "Liczby powinny być zapisane po przecinkach i bez spacji."
                    :
                    "The numbers should be written after commas and without spaces."
            }
        </span>
    </p>
);

export default Hint;