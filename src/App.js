import React from 'react';
import styles from './App.module.scss';
import InputBar from "./components/InputBar/InputBar";


class App extends React.Component {
    state = {
        isLoading: true,
        data: {},
        error: null
    };

    fetchData() {
        fetch("http://serwis.mobilotto.pl/mapi_v6/index.php?json=getGames&fbclid=IwAR2nAx0aMaXt5sNPEUa2xV9pKcWG6X_f4beUEMG6CPRdYoBBmnlxL8K11mQ}")
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        data: data,
                    })
                }
            )
            .catch(error => this.setState({error, isLoading: false}));
    };

    componentDidMount() {
        this.fetchData();
        console.log(this.state);
    };


    render() {
        return (
            <div className={styles.wrapper}>
                <InputBar/>
            </div>
        );
    }
}

export default App;
