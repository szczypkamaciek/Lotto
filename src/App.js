import React from 'react';
import styles from './App.module.scss';
import InputBar from "./components/InputBar/InputBar";


class App extends React.Component {
    state = {
        isLoading: true,
        data: {},
        error: null
    };

    data = {};

    fetchUsers() {
        fetch(`https://jsonp.afeld.me/?callback=&url=http%3A%2F%2Fserwis.mobilotto.pl%2Fmapi_v6%2Findex.php%3Fjson%3DgetGames%26fbclid%3DIwAR2nAx0aMaXt5sNPEUa2xV9pKcWG6X_f4beUEMG6CPRdYoBBmnlxL8K11mQ`)
            .then(response => response.json())
            .then(data => {
                    this.data = data;
                    this.setState({
                        data: data,
                        isLoading: false,
                    })
                }
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    };

    render() {
        const {Lotto} = this.state.data;
        console.log(Lotto);
        return (
            <div className={styles.wrapper}>
                <InputBar/>
            </div>
        );
    }
}

export default App;
