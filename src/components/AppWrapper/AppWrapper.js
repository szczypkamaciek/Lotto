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
        lang: "pl",
        paragraphs: []
    };
    statement = React.createRef();

    changeLanguage = e => {
        e.preventDefault();
        this.setState((prevState) => ({
            lang: prevState.lang === "pl" ? "en" : "pl"
        }))
    };

    compare = a => {
        let hits = [];
        for (let i = 0; i < a.length; i++) {
            if (this.state.fetchedData.includes(a[i])) {
                hits.push(a[i]);
            }
        }
        if (hits.length === 0) {
            hits.push("X");
        }
        return hits;
    };

    checkIfDuplicates = a => {
        return new Set(a).size === a.length;
    };

    showStatement = w => {
       this.statement.current.innerText = w;
    };

    handleButton = e => {
        e.preventDefault();
        for (let i = 0; i < this.state.inputNumber; i++) {
            if (!this.checkIfDuplicates(e.target[i].value)) {
                let array = e.target[i].value.split(",");
                this.state.paragraphs.push(
                    {
                        numbers: array,
                        hits: this.compare(array)
                    }
                );
                this.setState((prevState) => ({
                    paragraphNumbers: prevState.paragraphNumbers + 1
                }));
            } else {
                if (this.state.lang === "pl") {
                    this.showStatement("Liczby powinny być różne");
                } else {
                    this.showStatement("Numbers should be unique")
                }
            }
        }
    };

    addInput = e => {
        e.preventDefault();
        this.setState((prevState) => ({
            inputNumber: prevState.inputNumber + 1
        }))
    };

    removeInput = e => {
        e.preventDefault();
        if (this.state.inputNumber > 1) {
            this.setState((prevState) => ({
                inputNumber: prevState.inputNumber - 1
            }))
        }
    };

    render() {
        let inputs = [];
        let components = [];
        for (let i = 0; i < this.state.inputNumber; i++) {
            inputs.push(
                <Input number={i} fetchedData={this.state.fetchedData} key={i} lang={this.state.lang}/>
            )
        }
        this.state.paragraphs.map(item => (
            components.push(
                <UserNumbers key={item} numbers={item.numbers} hits={item.hits}/>
            )
        ));

        return (
            <>
                <div className={styles.firstSection}>
                    <p>{this.state.lang === "pl" ? "Sprawdź swój kupon Lotto!" : "Check your Lotto coupon!"}</p>
                    {this.state.lang === "pl"
                        ?
                        <img src="https://image.flaticon.com/icons/svg/299/299425.svg" alt="" onClick={this.changeLanguage}/>
                        :
                        <img src="https://image.flaticon.com/icons/svg/299/299474.svg" alt="" onClick={this.changeLanguage}/>
                    }
                </div>
                <form onSubmit={this.handleButton} className={styles.wrapper}>
                    <div className={styles.hintLabelWrapper}>
                        <label htmlFor="liczby">
                            {this.state.lang === "pl" ? "Wpisz tutaj swoje liczby: " : "Enter your numbers here: "}
                        </label>
                        <Hint lang={this.state.lang}/>
                    </div>
                    <div className={styles.inputWrapper}>
                        {inputs}
                    </div>

                    <div className={styles.btnWrapper}>
                        <Button buttonFn={this.addInput}>+</Button>
                        <Button buttonFn={this.removeInput}>-</Button>
                        <Button type="submit">{this.state.lang === "pl" ? "Sprawdź!" : "Check!"}</Button>
                    </div>
                    <div>
                        {!components.length
                            ?
                            <UserNumbers key="UserNumbersTitle" numbers="" hits=""/>
                            :
                            <UserNumbers
                                key="UserNumbersTitle"
                                numbers={
                                    this.state.lang === "pl"
                                    ? (components.length>1?"Twoje zestawy liczb:":"Twój zestaw liczb:")
                                    : (components.length>1?"Your number sets:": "Your number set:")
                                }
                                hits={this.state.lang === "pl" ? "Trafienia:" : "Hits:"}
                            />
                        }
                        {components}
                    </div>
                </form>
                <div>
                    <p ref={this.statement}>{this.state.lang === "pl" ? "Powodzenia !!!" : "Good Luck!!!"}</p>
                </div>
            </>
        );
    }
}


export default AppWrapper;