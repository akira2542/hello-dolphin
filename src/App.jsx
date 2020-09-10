import React, { Component } from 'react'
import '~/App.css'
import {createGlobalStyle} from 'styled-components';
import ryeFont1 from './assets/font-family/Rye/Rye-Regular.woff';
import ryeFont2 from './assets/font-family/Rye/Rye-Regular.woff2';
import itimFont1 from './assets/font-family/Itim/Itim-Regular.woff';
import itimFont2 from './assets/font-family/Itim/Itim-Regular.woff2';



const Globaltyle = createGlobalStyle`

@font-face {
    font-family: 'Rye-Regular';
    src: url(${ryeFont1}) format('woff'),url(${ryeFont2}) format('woff2'); 
    font-style: normal;
    font-display: swap; 

}
@font-face {
    font-family: 'Itim-Regular';
    src: url(${itimFont1}) format('woff'),url(${itimFont2}) format('woff2'); 
    font-style: normal;
    font-display: swap; 

}

`


// import 'bootstrap/dist/css/bootstrap.min.css'; this is how you import bootstrap
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Globaltyle />
                {/* <header className="App-header">
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
                </header> */}
 

            </div>
        );
    }

}
