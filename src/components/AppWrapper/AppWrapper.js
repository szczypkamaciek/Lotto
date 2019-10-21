import React from 'react';
import styles from './AppWrapper.module.scss';

let numbers = React.createRef();

const AppWrapper = ({handleButtonFn}) => (
    <div className={styles.wrapper}>
        <label htmlFor="liczby">Wpisz tutaj swoje liczby: </label>
        <input type="string" name="liczby" ref={numbers}/>

        <p className={styles.hint}><span className={styles.hintQuestionMark}>?</span><span className={styles.hintText}>Liczby powinny być zapisane po przecinkach i bez spacji.</span></p>
        <input className={styles.button} type="button" id="button" value="Sprawdź!" onClick={handleButtonFn}/>
    </div>
);


export default AppWrapper;