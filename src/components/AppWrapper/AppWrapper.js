import React from 'react';
import styles from './AppWrapper.module.scss';
import Button from './Button/Button';
import Hint from "./Hint/Hint";
import Input from "./Input/Input";


class AppWrapper extends React.Component {
    state = {
        fetchedData: this.props.data.Lotto.numerki.split(","),
        inputNumber: 1
    };
    compare = (a) => {
        let array = a.split(",");
        let hits = [];
        for (let i = 0; i < array.length; i++) {
            if (this.state.fetchedData.includes(array[i])) {
                hits.push(array[i]);
            }
        }
        console.log(array, hits);
    };

    handleButton = (e) => {
        e.preventDefault();
        for (let i = 0; i < this.state.inputNumber; i++) {
            console.log(e.target[i].value);
            console.log(this.state.fetchedData);
            this.compare(e.target[i].value);
        }
    };

    addInput = (e) => {
        e.preventDefault();
        let counter = ++this.state.inputNumber;
        this.setState({
            inputNumber: counter
        })
    };
    removeInput = (e) => {
        e.preventDefault();
        let counter = --this.state.inputNumber;
        this.setState({
            inputNumber: counter
        })
    };

    render() {
        let inputs = [];
        for (let i = 0; i < this.state.inputNumber; i++) {
            inputs.push(<Input number={i} fetchedData={this.state.fetchedData} key={i}/>)
        }
        return (
            <form onSubmit={this.handleButton} className={styles.wrapper}>
                <label htmlFor="liczby">Wpisz tutaj swoje liczby: </label>

                <div className={styles.inputWrapper}>
                    {inputs}
                </div>

                <Hint />
                <div className={styles.btnWrapper}>
                    <Button buttonFn={this.addInput}>+</Button>
                    <Button buttonFn={this.removeInput}>-</Button>
                    <Button type="submit">Sprawdź!</Button>
                </div>

            </form>
        );
    }
}


export default AppWrapper;