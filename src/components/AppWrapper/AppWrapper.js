import React from 'react';
import styles from './AppWrapper.module.scss';
import Button from './Button/Button';
import Hint from "./Hint/Hint";
import Input from "./Input/Input";
import UserNumbers from "./UserNumbers/UserNumbers";


class AppWrapper extends React.Component {
    state = {
        fetchedData: this.props.data.Lotto.numerki.split(","),
        inputNumber: 1,
        paragraphNumbers: 1,
        paragraphs: [

        ]
    };



    compare = a => {
        let hits = [];
        for (let i = 0; i < a.length; i++) {
            if (this.state.fetchedData.includes(a[i])) {
                hits.push(a[i]);
            }
        }
        if (hits.length == 0) {
            hits.push("X");
        }
        return hits;
    };

    checkIfDuplicates = w => {
        return new Set(w).size === w.length;
    };

    handleButton = e => {
        e.preventDefault();
        for (let i = 0; i < this.state.inputNumber; i++) {
            console.log("Klik przed ifem");
            if (!this.checkIfDuplicates(e.target[i].value)) {
                console.log("Klik w ifie");
                let array = e.target[i].value.split(",");
                // console.table(array);
                // this.compare(array);
                // console.table(this.compare(array));
                this.state.paragraphs.push(
                    {
                        numbers: array,
                        hits: this.compare(array)
                    }
                );
                this.setState((prevState) => ({
                    paragraphNumbers: prevState.paragraphNumbers + 1
                }));
                console.log(this.state.paragraphs)


            } else {
                console.log("Podane liczby muszą być różne");
            }
        }
    };

    addInput = e => {
        e.preventDefault();
        let counter = ++this.state.inputNumber;
        this.setState({
            inputNumber: counter
        })
    };

    removeInput = e => {
        e.preventDefault();
        let counter = --this.state.inputNumber;
        this.setState({
            inputNumber: counter
        })
    };

    render() {
        let inputs = [];
        let components = [];
        for (let i = 0; i < this.state.inputNumber; i++) {
            inputs.push(<Input number={i} fetchedData={this.state.fetchedData} key={i}/>)
        }
        this.state.paragraphs.map(item => (
            components.push(
                <UserNumbers key={item} numbers={item.numbers} hits={item.hits}/>
            )
        ));

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

                <div>
                    {!components.length
                        ?
                        <UserNumbers key="UserNumbersTitle" numbers="" hits=""/>
                        :
                        <UserNumbers
                            key="UserNumbersTitle"
                            numbers={components.length>1?"Twoje zestawy liczb:":"Twój zestaw liczb:"}
                            hits={"Trafienia:"}
                        />
                    }

                    {components}
                </div>

            </form>
        );
    }
}


export default AppWrapper;