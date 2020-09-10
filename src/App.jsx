import React from 'react'
import style from '~/App.css' // Use Local CSS Not import '~/App.css' 
import 'bootstrap/dist/css/bootstrap.min.css' //this is how you import bootstrap
import {createGlobalStyle} from 'styled-components';
import Navbar from './components/core/navbar/navbar'
import SideBar from './components/core/navbar/sidebar'
import Home from './components/home/home'
import About from './components/about/about'
import Team from './components/team/team'
import Faqs from './components/faqs/faqs'
import Sponsor from './components/sponsor/sponsor'
import ryeFont1 from './assets/font-family/Rye/Rye-Regular.woff';
import ryeFont2 from './assets/font-family/Rye/Rye-Regular.woff2';
import itimFont1 from './assets/font-family/Itim/Itim-Regular.woff';
import itimFont2 from './assets/font-family/Itim/Itim-Regular.woff2';



const Globalstyle = createGlobalStyle`

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
h1{
    font-family: 'Itim-Regular';
}

`

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Globalstyle />
          
                <Navbar/>
                <SideBar/>
                <Home/>
                <About/>
                <Team/>
                <Faqs/>
                <Sponsor/>
            </React.Fragment>
        )
    }
}