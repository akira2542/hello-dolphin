import React, { Component } from 'react'
import logo from './assets/images/logo.svg';
import Test from './components/Test'
import '~/App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; this is how you import bootstrap
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
            </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                       <Test name="Dolphin"/>
            </a>
                </header>
            </div>
        );
    }
}