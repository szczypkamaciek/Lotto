import React from 'react';
import styles from './App.module.scss';
import AppWrapper from "./components/AppWrapper/AppWrapper";


class App extends React.Component {
    state = {
        data: {},
        error: null,
        loading: false,
        inputs: 3
    };

   componentDidMount() {
        fetch(`https://jsonp.afeld.me/?callback=&url=http%3A%2F%2Fserwis.mobilotto.pl%2Fmapi_v6%2Findex.php%3Fjson%3DgetGames%26fbclid%3DIwAR2nAx0aMaXt5sNPEUa2xV9pKcWG6X_f4beUEMG6CPRdYoBBmnlxL8K11mQ`)
           .then(res => {
               if (res.ok) {
                   return res.json()
               } else {
                   return Promise.reject(res)
               }
           })
           .then(res => this.setState({
               data: res,
               loading: true
           }))
           .catch(() => this.setState({ error: true }));
    };

    render() {
        if (this.state.loading) {
            return (
                <div className={styles.wrapper}>
                    <div className="first-section">
                        <p> Sprawdź swoją liczbę w Lotto! </p>
                    </div>
                    <AppWrapper data={this.state.data}/>


                    <div className="third-section">
                        <p id="komunikat"> Powodzenia !!!</p>
                    </div>
                    <div id="informacje" className="third-section">

                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.wrapper}>
                    Pobieranie aktualnych wyników Lotto.
                </div>
            );
        }
    }
}

export default App;
