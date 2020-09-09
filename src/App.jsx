import React from 'react'
import style from '~/App.css' // Use Local CSS Not import '~/App.css' 
import 'bootstrap/dist/css/bootstrap.min.css' //this is how you import bootstrap

import Navbar from './components/core/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Team from './components/team/team'
import Faqs from './components/faqs/faqs'
import Sponsor from './components/sponsor/sponsor'

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Home/>
                <About/>
                <Team/>
                <Faqs/>
                <Sponsor/>
            </React.Fragment>
        )
    }
}